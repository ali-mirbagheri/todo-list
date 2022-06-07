import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./MiddleIndex";

function ListItem(props) {
  const removeItems = props.myRemoveItem;
  return (
    <div className="d-flex border border-secondary w-75 rounded m-auto mt-3 justify-content-center form-control  bg-dark text-white">
      <p className="mt-auto">{props.itemList}</p>
      <div className="ms-auto mt-2 mb-2 me-1">
        <Link to={`/edit/${props.buttonId}`}>
          <button className=" btn btn-warning">edit</button>
        </Link>
      </div>
      <button
        onClick={() => removeItems(props.buttonId)}
        className="me-2 mb-2 mt-2  btn btn-danger"
      >
        delete
      </button>
    </div>
  );
}

export default ListItem;
