import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Edit(props) {
  const [task, setTask] = useState([]);
  let { id } = useParams();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    setTask(JSON.parse(localStorage.getItem("tasks")));

    console.log(task);
  }, []);
  useEffect(() => {
    setInputValue(task[id]);
    inputRef.current.focus();
  }, [task]);
  const navigate = useNavigate();
  const changeValue = (e) => {
    e.preventDefault();
    setTask((task[id] = inputValue));
    localStorage.setItem("tasks", JSON.stringify(task));
    navigate("/");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-warning"
      style={{ height: "90vh" }}
    >
      <form
        onSubmit={changeValue}
        className="d-flex justify-content-center align-items-center"
      >
        <input
          className="form-control d-inline me-2"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        ></input>
        <input
          type="submit"
          className="btn btn-success"
          value={"Update"}
        ></input>
      </form>
    </div>
  );
}

export default Edit;
