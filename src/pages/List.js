import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import Search from '../components/Search';
import AddItem from '../components/AddItem';
import EditItem from '../components/EditItem';
import Filter from '../components/Filter';
import '../scss/list.scss'

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
    const [filterValue, setFilterValue] = useState('all');
    const [searchValue, setSearchValue] = useState('');

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

    const onDoneItem = (index) =>{
        let arr = [...list];
        arr[index].isDone = !list[index].isDone;

        setList(arr);
    }

    return (
        <div className="list">
            <div className="list-header">
                <Filter setFilterValue = {setFilterValue}/>                
                <Search setSearchValue = {setSearchValue}/>
            </div>
            {list.map((item, index) =>{
                if(item.title.indexOf(searchValue) != -1 || searchValue == ''){
                    if(filterValue == "all" || filterValue == "done" && item.isDone || filterValue == "notDone" && !item.isDone){
                    return <ItemList key={index} 
                                    title={item.title} 
                                    description={item.description}
                                    isDone={item.isDone}
                                    onRemoveItem={() => onRemoveItem(index)} 
                                    onEditItem={() => onEditItem(item, index)}
                                    onDoneItem={() => onDoneItem(index)}/> 
                    }
                }
            })}

            <AddItem isAddActive = {isAddActive}
                    setIsAddActive = {setIsAddActive}
                    newTitle = {newTitle}
                    setNewTitle = {setNewTitle}
                    newDescription = {newDescription}
                    setNewDescription = {setNewDescription}
                    onCancelAddItem = {onCancelAddItem}
                    onSaveNewItem = {onSaveNewItem}/>

            <EditItem isEditActive = {isEditActive}
                    newTitle = {newTitle}
                    setNewTitle = {setNewTitle}
                    newDescription = {newDescription}
                    setNewDescription = {setNewDescription}
                    list = {list}
                    setList = {setList}
                    setIsEditActive = {setIsEditActive}
                    setCurrentIndex = {setCurrentIndex}
                    currentIndex = {currentIndex}                  
            />
                         
        </div>
    )
}

export default List