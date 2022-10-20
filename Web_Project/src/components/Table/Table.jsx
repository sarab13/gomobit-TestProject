import './table.css'
import React from 'react'

export default function Table({users}) {
  return (
    <>
     <table>
            <thead>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Cell No.</th>
                <th>Created At</th>
                <th>Is Deleted</th>
             </tr>
             </thead>
             <tbody>
                {users.length>0 && users.map((user)=>(
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.cell}</td>
                        <td>{user.createdAt}</td>
                        <td>{String(user.isDeleted)}</td>
                    </tr>
                ))}
                </tbody>
    
         </table>

    </>
  )
}
