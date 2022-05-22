export const ReadRow = ({user, editClick, deleteClick}) => {
    return(
        <tr> 
          <td>{user.userFirstName}</td>
          <td>{user.userLastName}</td>
          <td>{user.userPhone}</td>
          <td className="btn--holder">
              <button 
                className="btn edit--btn"
                onClick={(event) => editClick(event, user)}
              >
                    Edit
              </button>
              <button 
                className="btn delete--btn"
                onClick={(event) => deleteClick(event, user.id)}
              >
                    Delete
              </button>
          </td>
      </tr>
    );
};