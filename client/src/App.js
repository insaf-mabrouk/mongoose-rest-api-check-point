
import './App.css'
import {useEffect,useState} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ContactCard from './components/ContactCard'
import {useDispatch, useSelector} from 'react-redux'
import {addContacts, getContacts} from './redux/action/action'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'

function App() {
  const dispatch = useDispatch()
  const contact = useSelector(state=>state.contacts)


  useEffect(()=>{
    dispatch(getContacts())
  },[])

  const [_id, set_Id] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

 const getInformation=(contact)=>{
   setName(contact.name)
   setEmail(contact.email)
   setPhone(contact.phone)
   set_Id(contact._id)
  }
  return (
    <Router>
    <div className="App">
     
      <Link to="/contact-list">
      <button>contact-list</button>
      </Link>
      <Link to="/add-contact">
      <button>add-contact</button>
      </Link>

      <Route path="/contact-list" render={()=><div style={{display:"flex"}}>
        {contact.map(contact=> <ContactCard contact={contact}
        getInformation={getInformation} />)}
        </div>}/>
      <Route path="/add-contact" render={()=> <div><AddContact/></div>}/>
      <Route path="/edit-contact" render={()=> <div><EditContact 
      getInformation={getInformation}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
      _id={_id}
      
      /></div>}/>
     
        
    </div>
    </Router>
  );
}

export default App;
