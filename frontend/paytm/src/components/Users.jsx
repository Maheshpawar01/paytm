import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [focused, setFocused] = useState(false)

  useEffect(()=>{
    axios.get("https://paytm-backend-g7eh.onrender.com/api/v1/user/bulk?filter=" + filter)
    // axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
    .then(response=>{
      setUsers(response.data.user)
    })
  }, [filter])

  const handleFocus =()=>{
    setFocused(true)
  }

  return (
    <>
      <div className="inline-block mt-4 bg-gray-500 text-white font-bold rounded-md py-2 px-4 hover:bg-gray-800 cursor-pointer">Send Money</div>
      <div className="my-2">
        <input onChange={e=>{
          setFilter(e.target.value)
        }} 
        onFocus={handleFocus}
        type="text" placeholder="Search Users..." className="w-full px-2 py-1 border rounded border-slate-400" />
      </div>
      <div>
        {/* {
          focused && (            
              users.map(user=><User  user={user}/>)
          )
        } */}

        {/* add height to user coponet  */}
      <div className="h-[200px] overflow-auto" >
        {focused &&
          users.map((user) => <User key={user._id} user={user} />)}
      </div>
      </div>
    </>
  );
}

function User({user}){
  const navigate = useNavigate()
    return (
    <div className="flex justify-between w-[98%]">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-400 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        
        <div className="felx flex-col justify-center h-full">
            <Button onClick={(e)=>
              navigate("/send?id=" + user._id + "&name=" + user.firstName)
            } label={"Send Mondy"}/>
        </div>
    </div>
    );
}
export default Users;
