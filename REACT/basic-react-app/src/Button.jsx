function handleClick(event) {
    console.log("hellow world");
    console.log(event);
}

function handleMouseOver() {
    console.log("Byy!");
}

function handleDoubleClick() {
    console.log("YOu double clicked");
}

function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>this para is for event demo</p>
            <button onDoubleClick={handleDoubleClick}>Ise Dba</button>
        </div>
    )
}

export default Button;