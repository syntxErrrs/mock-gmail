import EmailHeaderRow from "./EmailHeaderRow";
import {useEffect, useState} from "react";
import axios from "axios";
import FocusEmailRow from "./FocusEmailRow";

const EmailHeaderRows = (props) => {
    const [emails, setEmails] = useState();

    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('http://localhost:3001/emails');
            setEmails(response.data);
            console.log(response.data);
        }
        getResponse().then(() => {});
    }, [])

    const emailHeaderRows = !!emails ?
        emails?.map((email, index) => <EmailHeaderRow key={index} email={email} setFocusEmail={props.setFocusEmail}/>) :
        <></>;

    return (
        <div className="EmailHeaderContainer">
            {
                !!props.focusEmail ?
                    (<FocusEmailRow email={props.focusEmail} setFocusEmail={props.setFocusEmail} />) :
                    emailHeaderRows
            }
        </div>
    );
}

export default EmailHeaderRows;
