import './rightSideLogin.css'

import { FcGoogle } from "react-icons/fc";
import { SlSocialVkontakte } from "react-icons/sl";


import InputsLogin from '../InputLogin/InputsLogin';



export default function RightSideLogin(){
   return(
      <>
         <div>
            <p className="headerInRightSide">
               <p className='one'>Присоединяйтесь к самому</p>
               <p className='two'>быстрорастущему онлайн-сообществу и</p>
               <p className='three'>подключайтесь к нему</p>
            </p>
            <div className='accountlogin'>
               <div className='google'>
                  <FcGoogle className='iconGoogle' size={28}/>
                  <p>Войти через Google</p>
               </div>
               <div className='vk'>
                  <SlSocialVkontakte className='VKIcon' size={28}/>
                  <p>Войти через VK</p>
               </div>
            </div>
            <div>
               <InputsLogin/>
            </div>
         </div>
      </>
   )
}