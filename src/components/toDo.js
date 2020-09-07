import React, {useState, useEffect} from 'react';

function ToDo() {

    const [list, setList] = useState([]);

    useEffect(() => {
        if(list && list.length > 0) {
            toDoListItem = list.map((item) => (
                <li>{item.name}</li>
            ));
        }
    });

    const addItemList = () => {
        let newItem = {};
        newItem.name = "To Do Item";
        let newList = list;
        newList.push(newItem)
        setList(newList);
    }

    let toDoListItem = [];
    
    

    return (
        <>
            <div>
                ToDo List
            </div>
            <div className={`todoContainer`}>
                <div className={`actionBtn`}>
                    <button onClick={addItemList}>Add Item</button>
                </div>

                <div>
                    <ul>
                        {toDoListItem}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo;