function InformationTable({rows, saveData}) {

    return (
      <form onSubmit={saveData}>
        <table className='informationTable'>
          <thead> 
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead> 
          <tbody>
            {rows}
          </tbody>
        </table>
      </form>
    );
  }

  export default InformationTable;