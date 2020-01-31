import React, { useState } from 'react';
import ItemList from './ItemList';
import './list.css'

function List() {
    const [list, setList] = useState([
        {
            title: 'test',
            description: 'test',
            isDone: false,
        },
        {
            title: 'test2',
            description: 'test2',
            isDone: false,
        },
        {
            title: 'test3',
            description: 'test3',
            isDone: false,
        },
        {
            title: 'test4',
            description: 'test4',
            isDone: false,
        }
    ]);

    const [isAddActive, setIsAddActive] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isEditActive, setIsEditActive] = useState(false);
    const [value, setValue] = useState('all');
    const [search, setSearch] = useState(null);

    const onCancelAddItem = () => {
        setIsAddActive(false);
        setNewTitle('');
        setNewDescription('')
    }

    const onSaveNewItem = () => { 
        if(newTitle.length > 0 && newDescription.length){
            const arr = [...list]
            let newItem = {
                title: newTitle,
                description: newDescription,
                isDone: false
            }
            arr.push(newItem)

            setIsAddActive(false);
            setList(arr);
            setNewTitle('');
            setNewDescription('')
        }
    }

    const onRemoveItem = (index) =>{
        let arr = [...list];
        arr.splice(index, 1);

        setList(arr);
    }

    const onEditItem = (item, index) =>{ 
        setNewTitle(item.title);
        setNewDescription(item.description); 
        setCurrentIndex(index);
        setIsEditActive(!isEditActive)
    }

    const onSaveEditItem = () =>{
        let arr = [...list];
        let index = currentIndex;
        arr[index].title = newTitle;
        arr[index].description = newDescription;

        setList(arr);
        setIsEditActive(false);
        setCurrentIndex(null);
    }

    const onDoneItem = (index) =>{
        let arr = [...list];
        arr[index].isDone = !list[index].isDone;

        setList(arr);
    }

    const onSearch = (e) => {
        console.log(e.target.value)
        // let res = list[0].title.match(e.target.value);
        // console.log(res);
    }
return (
            <div className="list">
                <select name="filter" id="filter" onChange={(e) => setValue(e.target.value)}>
                    <option value='all'>all</option>
                    <option value='done'>done</option>
                    <option value='notDone'>not done</option>
                </select>
                <input type="search" onChange={onSearch}/>
                {list.map((item, index) =>{
                    if(value == "all" || value == "done" && item.isDone || value == "notDone" && !item.isDone){
                    return <ItemList key={index} 
                                    title={item.title} 
                                    description={item.description}
                                    isDone={item.isDone}
                                    onRemoveItem={() => onRemoveItem(index)} 
                                    onEditItem={() => onEditItem(item, index)}
                                    onDoneItem={() => onDoneItem(index)}/> 
                    }
                })}
                {isAddActive 
                    ? <div  className="list-add-item-info">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} name="title" id="title"/>
                        <label htmlFor="description">Description</label>
                        <input type="text" value={newDescription} onChange={e => setNewDescription(e.target.value)} name="description" id="description"/>
                        <button onClick={onCancelAddItem}>Cancel</button>
                        <button onClick={onSaveNewItem}>Save</button>
                    </div>                         
                    : <button onClick={() => setIsAddActive(!isAddActive)}>Add to do item</button>
                }  
                {isEditActive ?
                    <div className="modal edit-modal">
                        <h3>Edit Item</h3>
                        <label htmlFor="title-edit">Title</label>
                        <input type="text" name="title-edit" id="title-edit" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                        <label htmlFor="description-edit">Description</label>
                        <input type="text" name="description-edit" value={newDescription} onChange={e => setNewDescription(e.target.value)} id="description-edit" />
                        <button onClick={onSaveEditItem}>Save</button>
                        <button onClick={onEditItem}>Cancel</button>
                    </div> 
                : null}              
            </div>
        )
}

export default List