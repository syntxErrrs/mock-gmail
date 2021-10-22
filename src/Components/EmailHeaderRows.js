import EmailHeaderRow from "./EmailHeaderRow";
import {useEffect, useState} from "react";
import axios from "axios";
import FocusEmailRow from "./FocusEmailRow";
import ComposeForm from "./ComposeForm";

const EmailHeaderRows = (props) => {
    const [emails, setEmails] = useState();
    const [filteredEmails, setFilteredEmails] = useState();
    const [value, setValue] = useState('');

    useEffect(() => {
        const getResponse = async () => {
            const response = await axios.get('http://localhost:3001/emails');
            setEmails(response.data);
            setFilteredEmails(response.data);
        }
        getResponse().then(() => {
        });
    }, [])

    const emailHeaderRows = !!filteredEmails ?
        filteredEmails?.map((email, index) => <EmailHeaderRow key={index} email={email} setFocusEmail={props.setFocusEmail}/>) :
        <></>;

    const searchForFocusEmail = (targetValue) => {
        const newEmails = emails?.filter(email => email.subject.startsWith(targetValue));
        setFilteredEmails(newEmails);
    }

    return props.compose ? (
        <div className="ComposeMessageContainer"><ComposeForm/></div>
    ) : (
        <div className="EmailHeaderContainer">
            {
                !!props.focusEmail ?
                    (<FocusEmailRow email={props.focusEmail} setFocusEmail={props.setFocusEmail}/>) :
                    (
                        <>
                            <button id="composeEmail" className="ComposeButton" onClick={() => props.setCompose(true)}>
                                Compose
                            </button>
                            <label>
                                Search By Subject
                                <input
                                    name="search"
                                    placeholder="Search by subject..."
                                    type="string"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                        searchForFocusEmail(e.target.value);
                                    }}
                                />
                            </label>
                            {emailHeaderRows}
                        </>
                    )
            }
        </div>
    );
}

export default EmailHeaderRows;
