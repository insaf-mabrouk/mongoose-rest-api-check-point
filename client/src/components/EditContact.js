import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { putContacts } from '../redux/action/action'




const EditContact = ({name,email,phone,setPhone,setEmail,setName, _id}) => {
    const dispatch = useDispatch()
    const editCont =()=>{
        dispatch(putContacts(_id,{name,email,phone}))
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <Link to="/contact-list"><button onClick={editCont}>edit</button></Link>
        </div>
    )
}

export default EditContact
