import React from 'react'

 const EditableRow =({editFormData ,handleEditFormChange,handleCancelClick}) =>{
     return(
         <tr>
             <td><input type="text" required  name="name"  value={editFormData.name} onChange={handleEditFormChange}/></td>
             <td><input type="number" required  name="phonenumber"  value={editFormData.phonenumber} onChange={handleEditFormChange}/></td>
             <td><input type="email" required  name="email"  value={editFormData.email} onChange={handleEditFormChange}/></td>
             <td><input type="date" required  name="Date" 
             value={editFormData.Date} onChange={handleEditFormChange}/></td>
             <td>
                
             <button type="submit">Save</button>
             <button type="submit" onClick={handleCancelClick}>Cancel</button>
             </td>
         </tr>
     )
 };
 export default EditableRow;