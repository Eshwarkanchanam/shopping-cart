import React,{useCallback, useState} from "react";
import { Form } from "react-router-dom";
import InputForm from "./InputForm";

const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Username",
    pattern:"^[a-zA-Z]+[0-9a-zA-Z]*$",
    errorMsg:"username must start with character and cannot contain special character",
    label:"Username",
   
  },
  {
    id: 2,
    name: "mobileNumber",
    type: "tel",
    placeholder: "Mobile Number",
    errorMsg: "mobile number must contain 10 digits",
    maxlength:10,
    pattern: "[0-9]{10}",
    label:"Mobile Number",
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email Address",
    label:"Email Address",
    pattern:"^[a-zA-Z]{1}[a-zA-Z0-9]*@[a-zA-Z]+\\.[a-zA-Z]{2,3}$",
    errorMsg:"enter a valid email address",

  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMsg:
      "password must contain 8-20 characters and at least 1 number,1 uppercase letter,1 lowercase letter,1 special character",
    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$",
    label:"Password",
    visibility:false,    
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMsg:"password don't match!",
    label:"Confirm Password",
    visibility:false,

  },
 
];

const data = {
  name:"",
  mobileNumber:"",
  email:"",
  password: "",
  confirmPassword: ""
}

export const RegisterForm = () => {


  const [user,setUser] = useState(data);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    if(user.password === user.confirmPassword){
      console.log("submitted");
    }    
  }

  return (
    <div className=" flex justify-center flex-col items-center ">
      <h1 className="font-semibold text-2xl mt-2 mb-4">Register form</h1>
      <Form method="POST" autoComplete="false" onSubmit={handleSubmit} className="border-2 p-4 flex flex-col min-w-[300px] max-w-[300px] rounded-xl">
        {inputs.map((input) => {
          return <InputForm {...input} key={input.id} user={user} setUser={setUser} />;
        })}

        <input type="submit" value="Submit" className="border-2 p-2 mt-4 mb-6 bg-[#0b5e66] text-white rounded-md hover:opacity-80"/>
      </Form>
    </div>
  );
};
