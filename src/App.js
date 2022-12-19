import "./App.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const OnSubmitClick = (e) => {
    console.log("The user Input is :", firstName)
  }

  return (
    <div className="App">
      <div className="header">
        <h1> Create User </h1>
      </div>
      <div className="textbox">
      <TextField fullWidth margin = "dense" id = "outlined-basic" type = "text" label="First Name"  onChange={(e) => {setFirstName(e.target.value);}} value={firstName} variant="outlined" />
      <TextField fullWidth margin = "dense" id="outlined-basic" type = "text" label="Last Name" onChange={(e) => {setLastName(e.target.value);}} value={lastName} variant="outlined" />
      <TextField fullWidth margin = "dense" id="outlined-password-input" type="password" label="Password" onChange={(e) => {setPassword(e.target.value);}} value={password} variant="outlined"/>
      <TextField fullWidth margin = "dense" id="outlined-password-input" type="password" label="Confirm Password" onChange={(e) => {setConfirmPassword(e.target.value);}} value={confirmPassword} variant="outlined"/>
      </div>
      <div className="header">
      <Button variant="contained" onClick={(e) => {OnSubmitClick(e.target.value); }}>CreateUser</Button>
      </div>
    </div>
  );
}

export default App;
