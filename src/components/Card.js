const Card = ({fex_style, children}) => {
    let card = {
        boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
        paddingLeft : '10px',
        paddingRight : '10px',
        backgroundColor : 'white',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : fex_style,
        borderColor : '#c4e0d6',
        alignItems : 'center'
    }
    
    return(
        <div style = {card}>
            {children}
        </div>
    )
}

export default Card