import Sammy from "../img/sammy.jpeg";
import "../css/main.css";

export default function Welcome(): JSX.Element {
  return (
    <div className="h-screen/3">
      <h1 className="font-black">Welcome to my App</h1>
      <p>This is going to be good</p>
      <img src={Sammy} alt="Sammy Image" width={200} height={200}></img>
    </div>
  );
}
