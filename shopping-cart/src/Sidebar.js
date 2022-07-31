import "./Sidebar.css";

function Sidebar(props) {
  let cartItemCounted = Object.values(
    props.cartList.reduce((r, { Emoji, Name, Price }) => {
      r[Name] ??= { Emoji, Name, Price, Count: 0 };
      r[Name].Count++;
      return r;
    }, {})
  );

  return (
    <div className={props.isSidebarShow ? "Sidebar sidebarActive" : "Sidebar"}>
      <div className="sidebarTitle">Your shopping cart</div>
      <div className="cartFlowContainer">
        {cartItemCounted.map((element) => {
          return (
            <div className="cartContainer">
              <div className="cartEmoji">{element.Emoji}</div>
              <div className="cartDesciption">
                <div className="cartName">{element.Name}</div>
                <div className="cartPrice">{element.Price}</div>
                <div className="cartCountControl">
                  <button
                    className="cartCountAdd"
                    onClick={() => props.handleDeleteItemFromCart(element)}
                  >
                    -
                  </button>
                  <div className="cartCount">{element.Count}</div>
                  <button
                    className="cartCountMinus"
                    onClick={() => props.handleAddItemToCart(element)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebarTotal">
        Total: $
        {cartItemCounted
          .reduce(
            (total, item) =>
              Number(item.Count) * Number(item.Price.replace(/[^0-9.-]+/g, "")) + total,
            0
          )
          .toFixed(2)}
      </div>
      <button className="checkoutBtn">Checkout</button>
      <button className="closeBtn" onClick={() => props.handleSidebar()}>
        Close
      </button>
    </div>
  );
}
export default Sidebar;
