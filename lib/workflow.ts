import { Client as WorkflowClient } from "@upstash/workflow";
import config from "@/lib/config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

import emailjs from "emailjs-com";

// Function to send an email
export const sendEmail = async ({
    email,
    subject,
    message,
  }: {
    email: string;
    subject: string;
    message: string;
  }) => {
    emailjs
      .send(
        config.env.emailjs.ServiceId, // Replace with your EmailJS service ID
        config.env.emailjs.TemplateId, // Replace with your EmailJS template ID
        {
          email: email, // Recipient email
          subject: subject, // Email subject
          message: message, // Email message body
        },
        config.env.emailjs.UserId // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("✅ Email sent successfully!", response.status, response.text);
      })
      .catch((error) => {
        console.error("❌ Failed to send email:", error);
      });
  };
