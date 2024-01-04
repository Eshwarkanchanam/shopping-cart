import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputForm = ({
  name,
  type,
  placeholder,
  errorMsg,
  pattern,
  label,
  maxlength,
  visibility,
  setUser,user
  
}) => {
  const [showPass, setShowPass] = useState(visibility);
  const [valid,setValid] = useState(true);

  const handleInput= (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
    const regex = new RegExp(e.target.pattern);

    if(e.target.name === "confirmPassword"){
      if(e.target.value !== user.password){
        setValid(false);
      }else{
        setValid(true);
      }
    }else{
      if(!regex.test(e.target.value)){
        setValid(false);
      }else{
        setValid(true);
      }
    }

    
  }
  const toggle = () => {
    setShowPass(!showPass);
  };
  // console.log(user);
  return (
    <>
      <label htmlFor={name} className="capitalize mt-4">
        {label}
          </label>
        <div className={`relative w-full border-2 rounded-sm ${!valid && "border-red-700"}`}>
        <input
          type={!showPass ? type : "text"}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          maxLength={maxlength}
          className="rounded-sm p-2  outline-none bg-transparent w-full"
          value={name.value}
          onChange={(e)=>handleInput(e)}
          required
          
        />
        {showPass == false && <VisibilityOffIcon className="absolute right-0.5 top-0.5 p-2 bg-white cursor-pointer" onClick={() => toggle()} fontSize="large" />}
        {showPass == true && <VisibilityIcon className="absolute right-0.5 top-0.5 p-2 bg-white cursor-pointer" onClick={() => toggle()} fontSize="large" />}
        
        </div>
        {!valid && <span className="text-red-700 block mt-1 text-xs">
          {"*"+errorMsg}
        </span>}
    </>
  );
};

export default InputForm;
