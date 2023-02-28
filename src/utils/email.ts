import nodemailer from "nodemailer";
import { EmailAccount } from "../project.config.js";

const transporter = nodemailer.createTransport({
  // host: 'smtp.qq.com',
  // port: 587,
  // secureConnection: true,
  service: EmailAccount.service,
  secure: true, //  安全的发送模式
  auth: {
    user: EmailAccount.user, //  发件人邮箱
    pass: EmailAccount.pass //  授权码
  }
});
export const sendMail = (subject: string, to: string, text: string) => {
  const message = {
    // 发件人邮箱
    from: `(Meetu)${EmailAccount.user}`,
    // 邮件标题
    subject,
    // 目标邮箱
    to,
    // 邮件内容
    text
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, data) => {
      // console.log("at sendMail...");
      if (err) {
        reject({ err });
      } else {
        resolve({ data });
      }
    });
  });
};
