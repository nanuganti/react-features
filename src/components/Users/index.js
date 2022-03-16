import { React, useState } from "react";
import axios from "axios";
const Users = () => {
    const [userData, setUserData] = useState()
    const fetchUsers = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api");
            setUserData(JSON.stringify(res));
        } catch (err) {
            console.log("thereis an error", err);
        }
    };
    // useEffect(async () => {
    //   try {
    //     const res = await axios.get("https://randomuser.me/api");
    //     setUserData(JSON.stringify(res));
    //   } catch (err) {
    //     console.log("thereis an error", err);
    //   }
    // }, [])
    return (
        //https://randomuser.me/api
        <div>
            <p>This is User Information Page</p>

            <button onClick={() => { fetchUsers() }}>getUsers</button>
            <div>
                <p>results</p>
                <div>{userData}</div>
            </div>
        </div>
    );
};

export default Users;