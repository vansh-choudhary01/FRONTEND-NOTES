import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

function LikeButton() {
    let [like, setLike] = useState(false);
    let [count, setCount] = useState(init);
    console.log("likeButton is rendered");

    let toggle = () => {
        setLike(!like);
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        /* component is not rerender continuesly because react detected that count value is not change every time */
        // setCount(25);
        // console.log("inside toggle like value is : " , like);
    }
 
    let likeStyle = {color : "red"};
    return (
        <div>
            <h5>Count is : {count}</h5>
            <p>LIke button</p>
            <p onClick={toggle}>{like == true ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>}</p>
        </div>
    )
}

export default LikeButton;