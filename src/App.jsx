import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import './app.css'
export default function App() {
  return (
    <>
      <div className="aut">
        <LeftSide />
        <RightSide/>
      </div>
    </>
  );
}
