import "./App.css";
import "./index.css"
import Title from "./Title";
import { Discription } from "./Discription";
import ProductTab from "./ProductTab";
import { Activity } from "./Act";
import Amazon from "./Amazonsc";
import Button from "./Button"
import Form from "./Form";
import Counter from "./Counter"
import LikeButton from "./LIkeButton";

function App() {
  return <div className="body">
    <LikeButton/>
    {/* <Counter/> */}
    {/* <Form/> */}
    {/* <Button/> */}
    {/* <h3>Blockbuster Deals on Computer Accessories | Shop Now</h3>
    <div>
      <Amazon heading="Logitech MX Master 35" features={["8000 DPI", "5 Programmable Buttons"]} oldPrice={12495} amount={8999} />
      <Amazon heading="Logitech MX Master 35" features={["8000 DPI", "5 Programmable Buttons"]} oldPrice={12495} amount={8999} />
      <Amazon heading="Logitech MX Master 35" features={["8000 DPI", "5 Programmable Buttons"]} oldPrice={12495} amount={8999} />
    </div> */}
    {
    /* <Activity userName="Vansh" textColor="yellow"/>
    <Activity userName="Raghu" textColor="pink"/>
    <ProductTab/>
    <Title/>
    <Discription/>
    <button>Buddy aapke father aaye han</button> */}
  </div>
}

export default App
