import React from "react";

export default function EmailForm() {

    const email_to = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const submit = document.querySelector('.submit');
const mail_data = document.querySelector('.mail-data');
// mail_data.innerHTML = '';

const submitbtn = async () => {

    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'button';

        await fetch('https://movers-san-francisco.com/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': email_to.value,
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${data.email_to}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        })
    }
}


    return (
        
    
    <div>
        <br />
        <br />
        <br />

            <attention>
            If there were more than one email address then  you may enter the email addresses with ',' inbetween the email addresses.
            <br/>
            The subject and message are same for all the email address that you may enter on the input field.
            <br/>
            </attention>

        <form>
            <br />
            <br />
            <label htmlFor="email">Email To:</label>
            <input type="email" placeholder="You man enter email address on here" style={{width: "550px"}} id="email" required />
            <br />
            <br />
            <label for="subject">Subject:</label>
            <input type="text" placeholder="You may enter subject on here." style={{width: "550px"}} id="subject" required />
            <br />
            <br />
            <label htmlfor="message">Message:</label>
            <textarea placeholder="You may enter the message on here" id="message" style={{width: "550px"}} rows="7" required></textarea>
            <br />
            <br />
            <input type="submit" onClick={submitbtn} className="submit" value={"Send"}/>
        </form>
        <div className="mail-data">
        </div>
    </div>
    
    )
}