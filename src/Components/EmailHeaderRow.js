const EmailHeaderRow = (props) => {
    return (
        <div className="EmailHeaderRowContainer" onClick={() => props.setFocusEmail(props.email)}>
            <div className="EmailHeaderRow">{props.email.sender}</div>
            <div className="EmailHeaderRow">{props.email.subject}</div>
        </div>
    );
}

export default EmailHeaderRow;
