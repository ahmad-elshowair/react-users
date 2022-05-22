export const EditRow = ({handleEditChange, user, cancel})=>{
    return (
        <tr>
            <td>
                <input
                    type="text"
                    placeholder="type your fist name" 
                    name="userFirstName"
                    required="required"
                    value={user.userFirstName}
                    onChange={handleEditChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="type your last name" 
                    name="userLastName"
                    required="required"
                    onChange={handleEditChange}
                    value={user.userLastName}
                />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="type your phone" 
                    name="userPhone"
                    required="required"
                    onChange={handleEditChange}
                    value={user.userPhone}
                />
            </td>
          <td className="btn--holder">
              <button 
                className="btn save--btn"
              >
                  Save
              </button>
              <button 
                className="btn cancel--btn"
                onClick={(event) => cancel(event)}
              >
                  Cancel
              </button>
          </td>
        </tr>
    );
};