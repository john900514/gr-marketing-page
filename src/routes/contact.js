import Mailgun from "mailgun.js";
import formData from "form-data";
// import { getFormBody } from "./__utils";

const API_KEY = "450a0212c7352bcc84d8feb5b05205d2-2b0eef4c-99b3599c";
const DOMAIN = "crm.gymrevenue.com";
const SEND_FROM = "noreply@gymrevenue.com";
const SEND_TO = "info@gymrevenue.com";
// const SEND_TO = "philip@capeandbay.com";
const SUBJECT = "[gymrevenue.com] - New Contact Form Submission!";

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

export const post = async ({request}) => {
    const data = await request.json()
    // const body = await request.json();
    // const body = await request.text();
  let msg =
    "You have a new form submission from the gymrevenue.com landing page:\r\n\r\n";


    Object.entries(data).forEach(([key, val])=>{
        msg += `${key}: ${val} \r\n`;
    });

  try {
    sendMail(SEND_FROM, SEND_TO, SUBJECT, msg);
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
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
