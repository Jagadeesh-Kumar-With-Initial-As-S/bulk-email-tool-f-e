import React, {useState} from "react";
import Axios from "axios";
import Papa from "papaparse";
import {Modal, Spinner} from "react-bootstrap";

export default function EmailForm(props) {

    const email_to = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const submit = document.querySelector('.submit');
const mail_data = document.querySelector('.mail-data');
mail_data.innerHTML = '';

submit.onclick = () => {

    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'button';

        fetch('https://movers-san-francisco.com/email_sender.php', {
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
        <form>
            <label htmlFor="email">Email To:</label>
            <input type="email" id="email" required />
            <label for="subject">Subject:</label>
            <input type="text" id="subject" required />
            <label htmlfor="message">Message:</label>
            <textarea id="message" required></textarea>
            <input type="submit" className="submit" value={Send}/>
        </form>
        <div className="mail-data">
        </div>
    </div>
    
    )
}