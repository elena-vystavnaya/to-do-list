import React from 'react';

function ItemList(props){
    return(
        <div 
            className={`list-item  ${!props.isDone ? 'not-done': 'done'}`}>
            <h4 className="list-item-title">{props.title}</h4>
            <p>{props.description}</p>
            <button onClick={props.onEditItem}>Edit</button>
            <button onClick={props.onRemoveItem}>Remove</button>
            <button onClick={props.onDoneItem}>Done</button>
        </div>  
    )
}

export default ItemList;