import { useState } from "react";
import { PRODUCTDATA } from "../sampleData/productData";
import mainStyles from "../styles/main.module.css";
import ProductItem from "./productItem";

export default function Body({ children, home }) {
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState(PRODUCTDATA);

  const filterCategory = (category) => {
    const filteredData = PRODUCTDATA.filter(
      (state) => state.category === category
    );
    console.log("Filtered data:", filteredData);
    setData(filteredData);
    setFilter(true);
  };

  return (
    <div className={mainStyles.view}>
      <div className={mainStyles.container}>
        {data.map((product) => {
          console.log("product:", product);
          return (
            <ProductItem
              category={product.category}
              title={product.name}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              percentageOff={product.priceOff}
              benefit1={product.benefit1}
              benefit2={product.benefit2}
              benefit3={product.benefit3}
              image={product.image}
              onPress={() => {
                console.log("presses!", product.category);
                if (filter === true) {
                  setData(PRODUCTDATA);
                  setFilter(false);
                } else {
                  filterCategory(product.category);
                }
              }}
              onShop= {()=> {
                console.log("presses!", product.name);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
