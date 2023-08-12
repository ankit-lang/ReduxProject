import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/4/9/-original-imags7puv7k3dpeh.jpeg?q=70"
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgsrc: img1,
      id: "adfff",
    },
    {
      name: "Black Shoes",
      price: 1224,
      imgsrc: img2,
      id: "adfffsf",
    },
  ];
  const dispatch = useDispatch()

  const addToCartHandler = (options) => {
    
    dispatch({type:'addToCart',
    payload : {...options,quantity:1}
  })
  dispatch({type:"calculatePrice"})
    toast.success("Added To Cart")
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <Productcard
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const Productcard = ({ name, id, price, handler, imgsrc }) => (
  <div className="productcard">
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ id,name, price, imgsrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
