import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Cover from "./Cover";
import App from "./App";
import Shop from "./Shop";

const RouteSwitch = () => {
  const [emojiList, setEmojiList] = useState([
    {
      Emoji: "☝",
      Name: "Hand",
      Price: "$19.05",
    },
    {
      Emoji: "⏰",
      Name: "Clock",
      Price: "$5.99",
    },
    {
      Emoji: "☕",
      Name: "Coffee",
      Price: "$16.99",
    },
    {
      Emoji: "⛄",
      Name: "Snow Man",
      Price: "$160.99",
    },
    {
      Emoji: "⛔",
      Name: "Stop Sign",
      Price: "$200.99",
    },
    {
      Emoji: "✍",
      Name: "Writing",
      Price: "$1.99",
    },
    {
      Emoji: "🌟",
      Name: "Star",
      Price: "$250.99",
    },
    {
      Emoji: "🍞",
      Name: "Bread",
      Price: "$0.99",
    },
  ]);

  const [cartList, setCartList] = useState([]);

  const handleAddedToCart = (index) => {
    let newAddedToCart = [...cartList];
    let addedItem = emojiList[index];
    newAddedToCart = [...newAddedToCart, addedItem];
    setCartList(newAddedToCart);
  };

  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const handleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  const handleAddItemToCart = (element) => {
    delete element.Count;
    let newCart = [...cartList];
    newCart = [...newCart, element];
    setCartList(newCart);
  };

  const handleDeleteItemFromCart = (element) => {
    delete element.Count;
    let newCart = [...cartList];
    let idexOfDeleteItem = newCart.map((item) => item.Name === element.Name).lastIndexOf(true);
    newCart.splice(idexOfDeleteItem, 1);
    setCartList(newCart);
  };

  return (
    <BrowserRouter basename="/odin_Shopping-Cart">
      <Nav cartList={cartList} handleSidebar={handleSidebar} />
      <Cover isSidebarShow={isSidebarShow} handleSidebar={handleSidebar} />
      <Sidebar
        cartList={cartList}
        isSidebarShow={isSidebarShow}
        handleSidebar={handleSidebar}
        handleAddItemToCart={handleAddItemToCart}
        handleDeleteItemFromCart={handleDeleteItemFromCart}
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop emojiList={emojiList} handleAddedToCart={handleAddedToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
