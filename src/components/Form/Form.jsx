import React, { Component } from "react";
import * as yup from "yup";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
export class FormLogin extends Component {
  state = {
    email: "",
    password: "",
    gender: "male",
    licence: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.reset();
  };
  handleLicenceChange = ({ target }) => {
    this.setState({
      licence: target.checked,
    });
  };
  reset = () => {
    this.setState({
      email: "",
      password: "",
      gender: "male",
      licence: false,
    });

    this.props.closeModal();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault1"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === "male"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault2"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === "female"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Agree
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.licence}
        >
          Submit
        </button>
      </form>
    );
  }
}

const products = ["Sweater", "Keyboard"];

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
  rating: yup.number().min(1).max(10).required(),
  date: yup.date().default(() => new Date()),
  wouldRecommend: yup.boolean().default(false),
  product: yup.string().required("Please select a product").oneOf(products),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  rating: "",
  date: new Date(),
  wouldRecommend: false,
  product: "",
};

const handelSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const Input = styled(Field)`
  color: #00ff00;
`;

const ErrorMessageSt = styled(ErrorMessage)`
  color: #ff0000;
`;
export const LoginForm = () => {
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <div>
            <label>
              Name
              <Input type="text" name="name" />
              <ErrorMessageSt name="name" component="div" />
            </label>
          </div>
          <div>
            <label>
              Email
              <Input type="email" name="email" />
              <ErrorMessageSt name="email" component="div" />
            </label>
          </div>
          <div>
            <label>
              Password
              <Field type="password" name="password" />
              <ErrorMessageSt name="password" component="div" />
            </label>
          </div>
          <div>
            <label>
              Product
              <Field as="select" name="product" >
              <option value="">Select a product</option>
              {products.map((product, idx) => {
                return <option value={product} key={idx}>
                  {product}
                </option>;
              })}
              </Field>
              <ErrorMessageSt name="product" component="div" />
            </label>
          </div>
          <div>
            <label>
              Rating
              <Input type="number" name="rating" />
              <ErrorMessageSt name="rating" component="div" />
            </label>
          </div>
          <div>
            <label>
              Would recommend
              <Field type="checkbox" name="wouldRecommend" />
            </label>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
