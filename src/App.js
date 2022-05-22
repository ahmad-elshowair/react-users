import PhoneBookForm from './components/Form';
import InformationTable from './components/Table'
import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';
import "./App.css";
// import data from './users.data.json';
import { ReadRow } from './components/ReadRow';
import { EditRow } from './components/EditRow';

function App() {

  const [usersData, setUsersData] = React.useState([]);
  const [formData, setFormData] = React.useState({
    id: nanoid(),
    userFirstName: "",
    userLastName: "",
    userPhone: ""
  });

  const [editUserId, setEditUserId] = React.useState(null);
  const [editFormData, setEditFormData] = React.useState({
    userFirstName: "",
    userLastName: "",
    userPhone: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((oldData) => {
      return {
        ...oldData,
        [name]: value
      }
    });
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newUser = {
      id: nanoid(),
      userFirstName: formData.userFirstName,
      userLastName: formData.userLastName,
      userPhone: formData.userPhone
    }
    setUsersData(oldData => [...oldData, newUser]);
  }

  const editClick = (event, user) =>{
    event.preventDefault();

    setEditUserId(user.id);

    const userInfo = {
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userPhone: user.userPhone
    };

    setEditFormData(userInfo);
  };

  const handleEditFormChange = (event) =>{
    event.preventDefault();
    const {name, value} = event.target;
    const editedUser = {...editFormData, [name] : value};
    setEditFormData(editedUser);
  };

  const handleSaveClick = (event) =>{
    event.preventDefault();
    const editedUser = {
      id: editUserId,
      userFirstName: editFormData.userFirstName,
      userLastName: editFormData.userLastName,
      userPhone: editFormData.userPhone
    };

    const index = usersData.findIndex((user)=> user.id === editUserId);
    const users = [...usersData];
    users[index] = editedUser;
    setUsersData(users);
    setEditUserId(null);
  };

  const handleCancelClick = (event)=>{
    event.preventDefault();
    setEditUserId(null);
  }

  const deleteClick = (event, id) =>{
    event.preventDefault();
    const userId = usersData.findIndex(user=> user.id === id);
    const users = [...usersData];
    users.splice(userId, 1);
    setUsersData(users);
  };

  const rowElements = usersData.map((user)=> (
      <Fragment key={user.id} >
        {editUserId === user.id ?
          (
            <EditRow 
              user={editFormData}
              handleEditChange={handleEditFormChange}
              cancel={handleCancelClick}
            />
          ) : (
            <ReadRow
              user={user} 
              editClick={editClick}
              deleteClick={deleteClick}
            />
          )
        }
      </Fragment>
    )
  );

  return (
    <section className='main'>
      <PhoneBookForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        firstName={formData.userFirstName}
        lastName={formData.userLastName}
        phone={formData.userPhone}
      />
      <InformationTable 
        saveData={handleSaveClick}
        rows={rowElements}
      />
    </section>
  );
}

export default App;

