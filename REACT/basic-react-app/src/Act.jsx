function Activity({userName, textColor}) {
    console.log(userName + " " + textColor);
    let style = {color : textColor};
    return (
        <>
            <h1 style={style}>hello {userName}</h1>
        </>
    )
}

export {Activity};