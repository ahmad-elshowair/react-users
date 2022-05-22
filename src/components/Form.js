function PhoneBookForm(props) {
    return (
      <form onSubmit={props.handleSubmit} className="form">
        <input
          className='form--control'
          name='userFirstName' 
          type='text'
          required="required"
          onChange={props.handleChange}
          value={props.firstName}
          placeholder="Type your First Name..."
        />
       
        <input 
          className='form--control'
          name='userLastName' 
          type='text' 
          required="required"
          onChange={props.handleChange}
          value={props.lastName}
          placeholder="Type your Last Name..."
        />
      
        <input
          className='form--control' 
          name='userPhone' 
          type='text'
          required="required"
          onChange={props.handleChange}
          value={props.phone}
          placeholder="Type your Phone..."
        />
        <button className="submit-btn">Add User</button>
      </form>
    )
  }

  export default PhoneBookForm;