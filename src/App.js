import React from "react";
import { Field ,Form } from "react-final-form";

import "./App.css";
const onSubmit =values => window.alert(JSON.stringify(values,0,2));


const App =()=>(
  <Form 
  onSubmit ={onSubmit}
  validate ={values=>{
    const errors={};

    if (!values.password){
      errors.password ='password is empty';

    }
    else if(values.password.length < 8){
      errors.password ='Password is too short'
    }
    if (!values.lastname){
      errors.lastname ='lastname is empty';

    }

    else if(values.lastname.length < 5){
      errors.lastname ='lastname is too short'
    }
    if (!values.firstname){
      errors.firstname ='firstname is empty';

    }

    else if(values.firstname.length < 5){
      errors.firstname ='firstname is too short'
    }
   
    if (!values.contact){
      errors.contact ='Contact is empty';

    }

    else if(values.contact.length < 10){
      errors.contact ='contact is too short'
    }
  
    console.log(errors);
    return errors;

  }}
  render ={({handleSubmit,values,submitting}) =>(
    <div className="contact">
    <form onSubmit ={handleSubmit}>
      < div className="wrapper" >


        
      <Field name ='firstname'>
                {({input,meta}) =>{
                  return( 
                  <div>
                    <div>
                      <label htmlFor ='firstname'>First Name</label>
                      <input {...input} type='text' placeholder ='First Name'/>
                    </div>
                    <div className ='error'>
                    {meta.error && meta.touched &&(
                      <span>{meta.error}</span>
                    )}
                    </div>
                  </div>
                  )
                }}
              </Field>

     
       

              <Field name ='password'>
                {({input,meta}) =>{
                  return( 
                  <div>
                    <div>
                      <label htmlFor ='password'>Password</label>
                      <input {...input} type='text' placeholder ='Password'/>
                    </div>
                    <div className ='error'>
                    {meta.error && meta.touched &&(
                      <span>{meta.error}</span>
                    )}
                    </div>
                  </div>
                  )
                }}
              </Field>
               
              
     

     
        
        <Field name ='lastname'>
                {({input,meta}) =>{
                  return( 
                  <div>
                    <div>
                      <label htmlFor ='lastname'>Last Name</label>
                      <input {...input} type='text' placeholder ='lastname'/>
                    </div>
                    <div className ='error'>
                    {meta.error && meta.touched &&(
                      <span>{meta.error}</span>
                    )}
                    </div>
                  </div>
                  )
                }}
              </Field>
             
              
      
      

      
      
       
        <Field name ='email'>
                {({input,meta}) =>{
                  return( 
                  <div>
                    <div>
                      <label htmlFor ='email'>Email</label>
                      <input {...input} type='text' placeholder ='email'  />
                    </div>
                    <div className ='error'>
                    {meta.error && meta.touched &&(
                      <span>{meta.error}</span>
                    )}
                    </div>
                  </div>
                  )
                }}
              </Field>
             
              
              
      

   
        
        
        <label htmlFor="password">Password</label>
        <Field
              name ="password"
              component ="input"
              type="password"
              placeholder ="Password"/>
              
     
     
      
      
     
        <Field name ='contact'>
                {({input,meta}) =>{
                  return( 
                  <div>
                    <div>
                      <label htmlFor ='contact'>Contact</label>
                      <input {...input} type='text' placeholder ='contact'/>
                    </div>
                    <div className ='error'>
                    {meta.error && meta.touched &&(
                      <span>{meta.error}</span>
                    )}
                    </div>
                  </div>
                  )
                }}
              </Field>
              
              
      
      <div className="full">
              <button type="submit">Submit</button>
              </div>
              </div> 
             
            
      
               
    </form>
    
    </div>
  )}
  />
)
export default App;
