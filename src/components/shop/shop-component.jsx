import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import "../category-item/category.styles.scss";

const Shop = () => {
const { products } = useContext(ProductsContext)
  return (
    <div className="categories-container">
      {products.map((product, id) => (
        <card key={id} className="category-container">
          <span className="category-body-container"> {product.name} {product.price}</span>
          <span>
            <img className="background-image" src={product.imageUrl}></img>
          </span>
          {/* <span >{product.price}</span> */}
        </card>
      ))}
    </div>
  );
};

export default Shop;
