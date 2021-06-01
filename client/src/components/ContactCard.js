import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContacts } from '../redux/action/action'



const ContactCard = ({contact,getInformation}) => {
    const dispatch = useDispatch()
    const del=()=>{
        dispatch(deleteContacts(contact._id))
    }
    return (
        <div style={{border:"solid blue", width:"400px",flexDirection:"column"}}>
            <p>NAME:{contact.name}</p>
            <p>PHONE:{contact.phone}</p>
            <p>EMAIL:{contact.email}</p>
           <Link to='/edit-contact'><button onClick={()=>getInformation(contact)}>edit</button></Link> 
            <button onClick={del}>delete</button>
        </div>
    )
}

export default ContactCard
