import React from "react";
//https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb
//Keys help React identify which items have changed (added/removed/re-ordered)
//React recommends that you do not use indexes as keys, 
//since it could impact performance negatively and could lead to some unstable component behaviour.
const ListKeys = () => {
    //const myList = ["apple", "orange", "strawberry", "blueberry", "avocado"];
    const myList = [{ id: 'a', value: 'apple' },
    { id: 'b', value: 'orange' },
    { id: 'c', value: 'strawberry' },
    { id: 'd', value: 'blueberry' },
    { id: 'e', value: 'avocado' }];
    const ListComponent = () => {
        const listItems = myList.map((item) =>
            <li key={item.id}>{item.value}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
    return (
        <div>
            <p>List Keys example</p>
            <br />
            <ListComponent />
        </div>
    )
};

export default ListKeys;