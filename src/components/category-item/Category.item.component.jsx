import "./category.styles.scss";
import Categories from "./categoriesJSON";

const Home = () => {
  let categories = Categories;

  return (
    <div className="categories-container">
      {categories.map((element, id) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${element.imageUrl})` }}
          ></div>
          <div className="category-body-container">
            <h2>{element.title.toLocaleUpperCase()}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
