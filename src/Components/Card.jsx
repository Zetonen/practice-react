import data from '../data.json';
import Text from './Text';
const Card = () =>
  data.map((item) => {
    return (
      <div
        key={item.id}
        className="card mx-auto my-2"
        style={{ width: "18rem" }}
      >
        <img src={item.url} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">Card title: {item.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Text className="card-text" />
          <a href="http" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });

export default Card;
