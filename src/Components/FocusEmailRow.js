const FocusEmailRow = (props) => {
    return (
        <div className="FocusEmailContainer">
            <div className="FocusEmail">{props.email.sender}</div>
            <div className="FocusEmail">{props.email.recipient}</div>
            <div className="FocusEmail">{props.email.date}</div>
            <div className="FocusEmail">{props.email.subject}</div>
            <div className="FocusEmail">{props.email.message}</div>
            <button id={"getOuttaHere"} onClick={() => props.setFocusEmail(undefined)}>
                GET OUTTA HERE
            </button>
        </div>
    )
}

export default FocusEmailRow;