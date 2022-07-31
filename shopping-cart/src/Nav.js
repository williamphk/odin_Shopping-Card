import "./Nav.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav(props) {
  return (
    <nav className="Nav">
      <Link to="/">
        <div className="Logo">EmojiStore</div>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <li className="Circle" onClick={() => props.handleSidebar()}>
          <ShoppingCartIcon sx={{ color: "text.primary", fontSize: 35 }} />
          {props.cartList.length ? <div className="cartAmount">{props.cartList.length}</div> : null}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
