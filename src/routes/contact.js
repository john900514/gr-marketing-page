import Mailgun from "mailgun.js";
import formData from "form-data";
import dotenv from 'dotenv';

dotenv.config();

// import { getFormBody } from "./__utils";

const SEND_TO = process.env.SEND_TO;
if(!SEND_TO){
  throw new Error("SEND_TO ENV VAR NOT SET!");
}
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
if(!MAILGUN_API_KEY){
  throw new Error("MAILGUN_API_KEY ENV VAR NOT SET!");
}
const SEND_FROM = process.env.SEND_FROM;
if(!SEND_FROM){
  throw new Error("SEND_FROM ENV VAR NOT SET!");
}
const MAIL_DOMAIN = process.env.MAIL_DOMAIN;
if(!MAIL_DOMAIN){
  throw new Error("MAIL_DOMAIN ENV VAR NOT SET!");
}
const MAIL_SUBJECT = process.env.MAIL_SUBJECT;
if(!MAIL_SUBJECT){
  throw new Error("MAIL_SUBJECT ENV VAR NOT SET!");
}

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

export const post = async ({request}) => {
    const data = await request.json()
    // const body = await request.json();
    // const body = await request.text();
  let msg =
    "You have a new form submission from the gymrevenue.com landing page:\r\n\r\n";


    Object.entries(data).forEach(([key, val])=>{
        msg += `${key}: ${val} \r\n`;
    });

    console.log('Attemping to sendMail...');
    console.log({msg});
    console.log({SEND_FROM, SEND_TO, MAIL_SUBJECT, MAIL_DOMAIN, MAILGUN_API_KEY})

  try {
    sendMail(SEND_FROM, SEND_TO, MAIL_SUBJECT, msg);
  } catch (e) {
    return {
      status: 500,
    };
  }

  return {
    status: 200,
  };
};

const sendMail = async (
  sender_email,
  receiver_email,
  email_subject,
  email_body
) => {
  const messageData = {
    from: sender_email,
    to: receiver_email,
    subject: email_subject,
    text: email_body,
  };

  client.messages
    .create(MAIL_DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
