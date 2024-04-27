import LeftSideLogin from "./LeftSideLogin/LeftSideLogin.jsx"
import RightSideLogin from "./RightSideLogin/RightSideLogin.jsx"

import "./app.css"

export default function LoginPage(){
   return(
      <div className="aut">
         <LeftSideLogin/>
         <RightSideLogin/>
      </div>
   )
}