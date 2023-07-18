import products from "../../products.js";
import Card from "../components/Card.jsx";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row  mt-5">
          {products.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
