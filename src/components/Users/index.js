import { React, useState } from "react";
import axios from "axios";
const Users = () => {
    const [rawUserData, setRawUserData] = useState();
    const [userInfo, setUserInfo] = useState([])
    const fetchUsers = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api");
            setRawUserData(JSON.stringify(res, null, 2));
            setUserInfo(res.data.results.map((r) => { return { name: `${r.name.first}  ${r.name.last}`, pic: r.picture.large } }))
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
                <p><b>Raw Results</b></p>
                <div>{rawUserData}</div>
            </div>
            <div>
                <p><b>User InfoResults</b></p>
                {
                    JSON.stringify(userInfo)
                }
            </div>
        </div>
    );
};

export default Users;