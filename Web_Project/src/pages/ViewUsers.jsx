import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/Table'
import Dropdown from '../components/Dropdown/Dropdown'
import axios from 'axios'

export default function ViewUsers() {
 const [users,setUsers]=useState([])
 const [dropdownList,setDropdownList]=useState([{}])
 
 useEffect(()=>{
   fetchUsers();
 },[])

 const fetchUsers=async(search="ALL")=>{
      const result=await axios.get(`/getusers?search=${search}`)
      if(!result.data.error){
        setUsers(result.data.users)
        setDropdownList(result.data.dropdownList)
      }
 } 

 
 return (
    <div>
        <Navbar/>
        <Dropdown dropdownList={dropdownList} fetchUsers={fetchUsers}/>
        <Table users={users}/>      
        </div>
  )
}
