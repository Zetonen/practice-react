import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Header } from "./components/Header/Header";
import { Counter } from "./components/Counter/Counter";
import { Modal } from "./components/Modal/Modal";
import { TodoList } from "./components/TodoList/TodoList";
import {  FormLogin, LoginForm } from "./components/Form/Form";
class App extends Component {
  state = {
    isShowModal: false,
  };

  openModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  createUser = (data) => {
    const user = {
      ...data,
      id: nanoid(),
    };

    console.log(user);
  };
  render() {
    const { isShowModal } = this.state;
    return (
      <>
        <Header onOpenModal={this.openModal} />
        {/* <Counter /> */}
        {isShowModal && (
          <Modal onCloseModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        <TodoList />
        <LoginForm/>
      </>
    );
  }
}

export default App;
