import React from 'react'

const Menu = ({
    menuItems,
    changeName
    }) => {
    const listItems = menuItems.map(item =>
        <li key={item.id}>
            <button onClick={()=>changeName(item.name)}> {item.name} </button>
        </li>
    );

    return (
        <>
            <ul>{listItems}</ul>
        </>
    );
}

export default Menu;