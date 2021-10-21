const FocusEmailRow = (props) => {
    return (
        <div onClick={() => props.setFocusEmail(undefined)}>
            <div>{props.email.sender}</div>
            <div>{props.email.receiver}</div>
            <div>{props.email.date}</div>
            <div>{props.email.subject}</div>
            <div>{props.email.message}</div>
        </div>
    )

}

export default FocusEmailRow;