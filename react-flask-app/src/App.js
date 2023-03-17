import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data')
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  function addStudent() {
    // fetch('/add', {'method':'POST', body:JSON.stringify(student)})
    // .then(res => res.json())
    // .catch(error => console.log(error))
  }

  function delStudent() {
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Registered Students:</h1>

        <div>
          <form method="post" id="addform">
            <label for="name">New Name:</label>
            <input type="text" id="name" name="name"></input>
            
            <label for="id">New Id:</label>
            <input type="text" id="id" name="id"></input>

            <label for="score">New Score:</label>
            <input type="text" id="score" name="score"></input>
          </form>

          <button onClick={addStudent} style={{
            textAlign: 'center',
            width: '75px',
            border: '1px solid black',
            borderRadius: '5px'
          }}>Add Student To Database</button>
        </div>

        <div>
          <form>
            <label for="id">Delete Id:</label>
            <input type="text" id="id" name="id"></input>
          </form>

          <button onClick={delStudent} style={{
            textAlign: 'center',
            width: '75px',
            border: '1px solid black',
            borderRadius: '5px'
          }}>Delte Student From Database</button>
        </div>

        <div>
          <table style={{border:"1px solid black"}}>
            <tr>
              <th style={{width:"10em",border:"1px solid black"}}>Name</th>
              <th style={{width:"3em", border:"1px solid black"}}>Id</th>
              <th style={{width:"5em", border:"1px solid black"}}>Points</th>
            </tr>
        
            {data.map((user) => (
              <tr>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.name}</td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.school_id}</td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.points}</td>
              </tr>
            ))}
        
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
