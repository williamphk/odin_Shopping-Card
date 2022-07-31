import "./Shop.css";

function Shop(props) {
  return (
    <div className="Shop">
      {props.emojiList.map((element, index) => {
        return (
          <div className="shopContainer">
            <div className="emojiImage">{element.Emoji}</div>
            <div className="EmojiDescription">
              <div className="emojiName">{element.Name}</div>
              <div className="emojiPrice">{element.Price}</div>
              <button className="emojiButton" onClick={() => props.handleAddedToCart(index)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
