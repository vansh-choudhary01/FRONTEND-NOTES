function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
}

function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your goods"/>
            <button>Submit</button>
        </form>
    )
}

export default Form;