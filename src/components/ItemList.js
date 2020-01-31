import React from 'react';

function ItemList(props){
    return(
        <div 
            className={`list-item  ${!props.isDone ? 'not-done': 'done'}`}>
            <div className="list-info">
                <h4 className="list-item-title">{props.title}</h4>
                <p>{props.description}</p>
            </div>
            <div className="btn-group">
                <button onClick={props.onEditItem}>Edit</button>
                <button onClick={props.onRemoveItem}>Remove</button>
                <button onClick={props.onDoneItem}>Done</button>
                </div>
        </div>  
    )
}

export default ItemList;