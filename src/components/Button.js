const Button = ({handleName, fullname}) => {
    let buttonStyle = {
        backgroundColor : '#006dcb',
        color : 'white',
        border: 'none',
        padding : '10px',
        width : '100%',
        cursor: 'pointer',
        outline: 'inherit'
    }
    return(
        <button onClick = {() => handleName(fullname)} style = {buttonStyle}> click me </button>
    )
}

export default Button;