// const email_to = document.querySelector('#email-to').value;
// const subject = document.querySelector('#subject').value;
// const message = document.querySelector('#message').value;
// // const submit = document.querySelector('.submitted');
// const mail_data = document.querySelector('.mail-data');
// var to = email_to;

// to = to.split(',');



// var test={
//     sendEmail(subject,to,body){
        
//         /* SmtpJS.com - v3.0.0 */
//         let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    
//         Email.send({
//             SecureToken : '84212099-eb72-4b67-8505-94603fe2b0d6', // write your secure token
//             To : to, // to include multiple emails you need to mention an array
//             From : 'jk2743@srmist.edu.in',
//             Subject : subject,
//             Body : message
//         })
//         .then(message=>{
//             // alert(message);
//             mail_data.innerHTML = `Email was successfully sent to ${to}<br>` + mail_data.innerHTML;
//         }).catch(err=>{
//             mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;
//         });
        
//     }
//     }
    
//      export default test;