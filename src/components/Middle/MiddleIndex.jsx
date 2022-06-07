import React, { useState, useEffect, useRef } from "react";
import ListItem from "./ListItem";
function MiddleIndex(props) {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTask(JSON.parse(localStorage.getItem("tasks")));
      console.log(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
    inputRef.current.focus();
  }, [task]);
  const myRemoveItem = (index1) => {
    setTask(() => {
      return task.filter((item, index) => {
        return index !== index1;
      });
    });
  };
  const addItem = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    setTask((prev) => {
      return [...prev, inputValue];
    });

    setInputValue("");
  };

  return (
    <div className="bg-white pt-4">
      <div className="pt-3 pb-3 d-flex justify-content-center align-items-center">
        <form
          action="post"
          href="#"
          onSubmit={addItem}
          className="d-flex justify-content-center align-items-center w-75 "
        >
          <input
            className="form-control d-inline w-75 me-2"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          ></input>
          <input type="submit" className="btn btn-success" value="Add"></input>
        </form>
      </div>
      <div className="pb-4">
        {task.length > 0 &&
          task.map((item, index) => (
            <ListItem
              key={index}
              itemList={item}
              buttonId={index}
              myRemoveItem={myRemoveItem}
            ></ListItem>
          ))}
      </div>
    </div>
  );
}

export default MiddleIndex;
