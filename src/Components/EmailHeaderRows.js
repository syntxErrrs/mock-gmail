import EmailHeaderRow from "./EmailHeaderRow";
import {useEffect, useState} from "react";
import axios from "axios";
import FocusEmailRow from "./FocusEmailRow";
import ComposeForm from "./ComposeForm";

const EmailHeaderRows = (props) => {
    const [emails, setEmails] = useState();

    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('http://localhost:3001/emails');
            setEmails(response.data);
        }
        getResponse().then(() => {});
    }, [])

    const emailHeaderRows = !!emails ?
        emails?.map((email, index) => <EmailHeaderRow key={index} email={email} setFocusEmail={props.setFocusEmail}/>) :
        <></>;

    return props.compose ? (
        <div className="ComposeMessageContainer"><ComposeForm /></div>
    ) : (
        <div className="EmailHeaderContainer">
            {
                !!props.focusEmail ?
                    (<FocusEmailRow email={props.focusEmail} setFocusEmail={props.setFocusEmail} />) :
                    (
                        <>
                            <button id="composeEmail" className="ComposeButton" onClick={() => props.setCompose(true)}>Compose</button>
                            {emailHeaderRows}
                        </>
                    )
            }
        </div>
    );
}

export default EmailHeaderRows;
