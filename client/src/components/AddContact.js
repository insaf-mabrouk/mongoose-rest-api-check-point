import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContacts } from '../redux/action/action'




const AddContact = (e) => {
    const dispatch = useDispatch()
    const addCon =()=>{
        dispatch(addContacts({name,email,phone}))
    }
    const [name, setName] =useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    return (
        <div>
            <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" placeholder="enter your phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <Link to="/contact-list"><button onClick={addCon}>submit</button></Link>
        </div>
    )
}

export default AddContact
