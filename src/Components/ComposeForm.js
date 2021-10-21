import {useState} from 'react';
import axios from 'axios';

const ComposeForm = () => {
    const [values, setValues] = useState({
        sender: '',
        recipient: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (value, prop) => {
        switch (prop) {
            case 'sender':
                setValues({...values, sender: value});
                return;
            case 'recipient':
                setValues({...values, recipient: value});
                return;
            case 'subject':
                setValues({...values, subject: value});
                return;
            case 'message':
                setValues({...values, message: value});
                return;
            default:
                return;
        }
    }

    const postNewEmail = () => {
        axios.post('http://localhost:3001/send', values)
            .then(() => setValues({
                sender: '',
                recipient: '',
                subject: '',
                message: ''
            }));
    }

    return (
        <form>
            <label>
                Sender:
                <input
                    name="sender"
                    placeholder="enter sender..."
                    type="string"
                    value={values.sender}
                    onChange={(e) => handleInputChange(e.target.value, 'sender')}
                />
            </label>
            <label>
                Recipient:
                <input
                    name="recipient"
                    placeholder="enter recipient..."
                    type="string"
                    value={values.recipient}
                    onChange={(e) => handleInputChange(e.target.value, 'recipient')}
                />
            </label>
            <label>
                Subject:
                <input
                    name="subject"
                    placeholder="enter subject..."
                    type="string"
                    value={values.subject}
                    onChange={(e) => handleInputChange(e.target.value, 'subject')}
                />
            </label>
            <label>
                Message:
                <input
                    name="message"
                    placeholder="enter message..."
                    type="string"
                    value={values.message}
                    onChange={(e) => handleInputChange(e.target.value, 'message')}
                />
            </label>
            <label>
                Send Email
                <input type="submit" onClick={() => postNewEmail()}/>
            </label>
        </form>
    )
}

export default ComposeForm;
