import './App.css';
import { useState } from "react";
import FormInput from "./components/FormInputs";

const App = () => {
  const [values,setvalues] = useState({
    firstname:"",
    lastname:"",
    DOB:"",
    Age:"",
    Email:""
  });

  const inputs =[
    {
      id:1,
      name: "firstname",
      type: "text",
      placeholder:"Firstname",
      label:"Firstname"
    },
    {
      id:2,
      name: "lastname",
      type: "text",
      placeholder:"Lastname",
      label:"Lastname"
    },
    {
      id:3,
      name: "DOB",
      type: "text",
      placeholder:"dd-mm-yyyy",
      label:"DOB"
    }, {
      id:4,
      name: "age",
      type: "text",
      placeholder:"Age",
      label:"Age"
    }, 
      
    {
      id:5,
      name: "e-mail",
      type: "text",
      placeholder:"E-Mail",
      label:"E-Mail"
    },
  ]

   console.log("re-rendered");

  const handleSubmit = (e)=> {
    e.preventDefault();
  };
  const onChange = (e) => {
    setvalues({...values, [e.target.name]: e.target.value});
  };
  
  console.log(values);


  return <div className="app">
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange ={onChange} />
        
      ))}
      <button>Submit</button>
    </form>
    </div>;
  
};

export default App;
