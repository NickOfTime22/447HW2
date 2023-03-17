import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  // const [data, setdata] = useState({
  //   name: "",
  //   school_id: 0,
  //   points: 0
  // });

  // useEffect(() => {
  //   fetch("/data").then((res) =>
  //     res.json().then((data) => {
  //       setdata({
  //         name: data.name,
  //         school_id: data.school_id,
  //         points: data.points,
  //       });
  //     })
  //   );
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data')
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  // getFetchUsers() {
  //   this.setState({
  //       loading: true
  //   }, () => {
  //       fetch("http://localhost:3000/data").then(res => res.json()).then(result => this.setState({
  //           loading: false,
  //           users: result
  //       })).catch(console.log);
  //   });
  // }
  // componentDidMount() {
  //     this.getFetchUsers();
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Registered Students:</h1>
        
        {data.map((user) => (
          <div>
            <table style={{border:"1px solid black"}}>
              <tr>
                <th style={{width:"10em",border:"1px solid black"}}>Name</th>
                <th style={{width:"3em", border:"1px solid black"}}>Id</th>
                <th style={{width:"5em", border:"1px solid black"}}>Points</th>
              </tr>

              <tr>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.name}</td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.school_id}</td>
                <td style={{textAlign:"center", border:"1px solid black"}}>{user.points}</td>
              </tr>
            </table>
          </div>
        ))}
        
      </header>
    </div>
  );
}

export default App;
