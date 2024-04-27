import { useState } from "react";
import "./inputs.css"


import { Link } from "react-router-dom";

import { IoEyeOutline } from "react-icons/io5";


export default function Inputs (){
   
   const [on, setOff] = useState(false)
   const [clickedCheckBox, setClickedCheckBox] = useState(false)
   
   const sw = () => setOff(prev => !prev);

   const handleClickCheckBox = () => {
      if (clickedCheckBox === false) {
         alert("нажми на кнопку!!!")
      }
   }
   
   const changeCheckBox = () => setClickedCheckBox(prev => !prev);

   return (
      <>
         <div className="inputs">
            <div className="TI">
               <p className="textName text">Имя</p>
               <input type="text" className="inputName input"/>
            </div>
            <div className="TI">
               <p className="textEmail text">Email</p>
               <input type="text"  className="inputEmail input"/>
            </div>
            <div className="TI">
               <p className="textPassword text">Пароль</p>
               <input type={on ? `text` : `password`} className="inputPassword input" />
               <IoEyeOutline onClick={sw} size={20} className="iconEye"/>
            </div>



            <div className="CHB">
               <div className="divCheckbox">
                  <input type="checkbox"
                  value={clickedCheckBox} 
                  onChange={changeCheckBox} 
                  name="" 
                  id="" 
                  className="checkbox"/>
                  <p className="condition">Я принимаю условие соглашение </p>
               </div>
               <div className="enter" onClick={handleClickCheckBox}>Войти</div>
            </div>
               <p className="linkOfLogin">у вас есть аккаунт?<Link to="/login" className="link">ПЕРЕХОДИТЕ ПРЯМО СЕЙЧАС</Link></p>
         </div>
      </>
   )
}
