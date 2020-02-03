import React, { useState } from "react";
import Search from "../components/Search";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import Filter from "../components/Filter";
import ListItems from "../components/ListItems";
import "../scss/list.scss";

function List() {
  const [list, setList] = useState([
    {
      title: "test",
      description: "test",
      isDone: false
    },
    {
      title: "test2",
      description: "test2",
      isDone: false
    },
    {
      title: "test3",
      description: "test3",
      isDone: false
    },
    {
      title: "test4",
      description: "test4",
      isDone: false
    }
  ]);

  const [isAddActive, setIsAddActive] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEditActive, setIsEditActive] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  return (
      
    <div className={`list ${isEditActive ? "has_modal" : ""}`}>
      <div className="list-header">
        <Filter setFilterValue={setFilterValue} />
        <Search setSearchValue={setSearchValue} />
      </div>

      <ListItems
        searchValue={searchValue}
        filterValue={filterValue}
        setIsEditActive={setIsEditActive}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
        setCurrentIndex={setCurrentIndex}
        setList={setList}
        list={list}
      />

      <AddItem
        isAddActive={isAddActive}
        setIsAddActive={setIsAddActive}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        setIsAddActive={setIsAddActive}
        list={list}
        setList={setList}
      />

      <EditItem
        isEditActive={isEditActive}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        list={list}
        setList={setList}
        setIsEditActive={setIsEditActive}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default List;
