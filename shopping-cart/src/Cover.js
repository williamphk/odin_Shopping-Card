import "./Cover.css";

function Cover(props) {
  return (
    <div
      onClick={() => props.handleSidebar()}
      className={props.isSidebarShow ? "Cover coverActive" : "Cover"}
    ></div>
  );
}
export default Cover;
