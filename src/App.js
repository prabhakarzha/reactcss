import React from "react";
import { Field ,Form } from "react-final-form";

import "./App.css";

const App =()=>(
  <Form onSubmit ={()=>{}}
  render ={({handleSubmit,values}) =>(
    <form>
      <div>
        <label htmlFor="firstname">First Name</label>
        <Field
              name ="firstName"
              component ="input"
              type="text"
              placeholder ="First Name"/>
              
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <Field
              name ="lastName"
              component ="input"
              type="text"
              placeholder ="Last Name"/>
              
      </div>

      
      <div >
        <label htmlFor="email">Email</label>
        <Field
              name ="email"
              component ="input"
              type="email"
              placeholder ="Email"/>
              
      </div>

      <div >
        <label htmlFor="password">Password</label>
        <Field
              name ="password"
              component ="input"
              type="password"
              placeholder ="Password"/>
              
      </div>
     
      <div >
        <label htmlFor="contact">Contact</label>
        <Field
              name ="contact"
              component ="input"
              type="text"
              placeholder ="Contact"/>
              
      </div>
              <button type="submit">Submit</button>
            
      
     
    </form>
  )}
  />
)
export default App;
