import { useEffect, useState } from "react"

export default function Users(){
// Declare a state to hold the data
//useEffect with Callback & deoendency function
// useEffect perameter ney duita 1st call back function
//second dependancy
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))

    },[])
    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}