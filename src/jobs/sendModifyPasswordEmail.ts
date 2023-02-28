import { sendMail } from "../utils/email.js";

export const sendRegisterEmail = async (data: { subject: string, to: string, text: string }) => {
  const subject = data.subject;
  const to = data.to;
  const text = data.text;

  return await sendMail(subject, to, text);
}