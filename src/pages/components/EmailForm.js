import React from "react";


export default function EmailForm() {
  const submitbtn = async (e) => {
    e.preventDefault();
    const email_to = document.querySelector('#email-to');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const submit = document.querySelector('.submitted');
    const mail_data = document.querySelector('.mail-data');
    var to = email_to.value;
    to = to.split(',');
    console.log(to);
    if(to.length==1){
    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        await fetch('https://movers-san-francisco.com/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': to[0],
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${to[0]}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        })
        }       
    }
    else if (to.length!=1){
        for(let i = 0; i<to.length;i++){
       
    
    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'submit';

        await fetch('https://movers-san-francisco.com/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': to[i],
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${to[i]}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        });
        }
        }
    }
  }
    return (
        
    
    <div>
        <br />
        <br />
        <br />

            <p>
            If there were more than one email address then  you may enter the email addresses with ',' inbetween the email addresses.
            <br/>
            </p>
            <p>
            The subject and message are same for all the email address that you may enter on the input field.
            <br/>
            </p>
            <p>
            Don't refresh this page or close this tab until the sending process is completed.
            <br/>
            </p>

        <form>
            <br />
            <br />
            <label htmlFor="email">Email To:</label>
            <input type="email" placeholder="You man enter email address on here. For example : hufutogaloge@gotgel.org,jagadeesh_2k17@proton.me" id="email-to" required />
            <br />
            <br />
            <label for="subject">Subject:</label>
            <input type="text" placeholder="You may enter subject on here." id="subject" required />
            <br />
            <br />
            <label htmlfor="message">Message:</label>
            <textarea placeholder="You may enter the message on here." id="message" rows="7" required></textarea>
            <br />
            <br />
            <input type="submit" onClick={submitbtn} className="submitted" value={"Send"}/>
        </form>
        <div className="mail-data"></div>
    </div>
    
    )
}