const Notification = ({ message }) => {
    if (!message) {
        return null
    }

    const style = {
        color: message.toLowerCase().includes('error') ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification
