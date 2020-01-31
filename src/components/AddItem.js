import React from 'react'

function AddItem(props) {
        if(props.isAddActive){
            return ( <div  className="list-add-item-info">
                <label htmlFor="title">Title</label>
                <input type="text" value={props.newTitle} onChange={e => props.setNewTitle(e.target.value)} name="title" id="title"/>
                <label htmlFor="description">Description</label>
                <input type="text" value={props.newDescription} onChange={e => props.setNewDescription(e.target.value)} name="description" id="description"/>
                <button onClick={props.onCancelAddItem}>Cancel</button>
                <button onClick={props.onSaveNewItem}>Save</button>
            </div>  ) 
        }
        else{
            return ( <button className="btn-action" onClick={() => props.setIsAddActive(!props.isAddActive)}>Add to do item</button>)
        }
}

export default AddItem
