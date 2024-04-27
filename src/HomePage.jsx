import LeftSide from "./LeftSide/LeftSide.jsx";
import RightSide from "./RightSide/RightSide.jsx";

import "./app.css"

export default function HomePage(){
   return(
      <div className="aut">
         <LeftSide/>
         <RightSide/>
      </div>
   )
}