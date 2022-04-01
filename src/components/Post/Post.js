import React ,{useState ,Fragment} from  'react';
import './Table.css'
import data from './data.json';
import { nanoid } from 'nanoid';
import EditableRow from './EditableRow';
 
const Post =() =>{

  const[contacts ,setContacts] =useState(data);
  const[addFormData ,setAddFormData] =useState({
    name:"",
    phonenumber:"",
    email:"",
    Date:"",

});
const[editFormData ,setEditFormData]=useState({
    name:"",
    phonenumber:"",
    email:"",
    Date:"",
});
const handleEditFormChange =(event) =>{
    event.preventDefault();
    const fieldName =event.target.getAttribute("name");
    const fieldValue =event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
}


const[editContactId ,setEditContactId] =useState(null);
const handleChange =( event)=>{
    event.preventDefault();
    const fieldName =event.target.getAttribute("name");
    const fieldValue =event.target.value;

    const newFormData ={...addFormData};
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
};
const handleSubmit = (event) =>{
    event.preventDefault();

    const newContact ={
        id :nanoid(),
        name: addFormData.name,
        phonenumber: addFormData.phonenumber,
        email :addFormData.email,
        Date : addFormData.Date,
    };
    const newContacts= [...contacts ,newContact];
    setContacts (newContacts);
};

const handleEditFormSubmit =(event) =>{
    event.preventDefault();

    const editedContact = {
        id:editContactId,
        name:editFormData.name,
        phonenumber:editFormData.phonenumber,
        email:editFormData.email,
        Date:editFormData.Date
    }
    const newContacts =[...contacts];
const index =contacts.findIndex((contact) =>contact.id ===editContactId)
newContacts[index]=editedContact;
 setContacts(newContacts);
 setEditContactId(null);
}
const handleEditClick= (event,contact) =>{
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues ={
        name:contact.name,
        phonenumber:contact.phonenumber,
        email:contact.email,
        Date:contact.Date,
    };
    setEditFormData(formValues);

}
 const handleCancelClick =() =>{
     setEditContactId(null); 
 }

    return(
        <div>
            
        <div className="input-form">
          
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" required ="required" placeholder='Full Name' onChange={handleChange}/>
                <label>Contact :</label>
                <input type="number" name="phonenumber" required ="required" placeholder='' onChange={handleChange}/>
                <br></br>
                <label>Email id :</label>
                <input type="email" name="email" required ="required" placeholder='abc@ok.com' onChange={handleChange}/>
                <label>Date :</label>
                <input type="Date" name="Date" required ="required" placeholder='' onChange={handleChange}/>
                <br></br>
                <button type="submit">Add</button>
            </form>

        </div>
        <div className ="table-data">
            <form onSubmit ={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Edit</th>
                        </tr>
                </thead>
                <tbody>
                    {contacts.map((object) =>(
                        <Fragment>

                       {editContactId === object.id ? (
                           <EditableRow 
                           editFormData={editFormData}
                           handleEditFormChange ={handleEditFormChange}
                           handleCancelClick ={handleCancelClick} />):(
                       
                    <tr>
                        <td>{object.name}</td>
                        <td>{object.phonenumber}</td>
                        <td>{object.email}</td>
                        <td>{object.Date}</td>
                        <td><button type="button" onClick={(event)=>handleEditClick(event ,object)}>Edit</button></td>
                    </tr>)}
                    </Fragment>
                    ))}
                </tbody>
            </table>
            </form>     
        </div>
        </div>
    ); 
 };
 export default Post;