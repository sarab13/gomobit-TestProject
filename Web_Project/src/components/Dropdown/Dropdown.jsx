import React from 'react'

export default function Dropdown({dropdownList,fetchUsers}) {
    const handleUser=(e)=>{
        fetchUsers(e.target.value)
     }
    
  return (
    <>
    <label htmlFor="users">Search User:</label>
         <select name="users" id="users" onChange={handleUser}>
            <option value="ALL">ALL</option>
            {dropdownList.length>0 && dropdownList.map((user)=>(
            <option key={user._id} value={user.name}>{user.name}</option>
            ))}
         </select>
    </>
  )
}
