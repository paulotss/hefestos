import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

class EmailSender {
  private mailerSend: MailerSend;
  private sender: Sender;
  private name: string;
  private email: string;
  private recipients: Recipient[];

  constructor(email: string, name: string) {
    this.mailerSend = new MailerSend({
      apiKey: process.env.MAILER_SEND_KEY || "xyz",
    });
    this.sender = new Sender("suporte@tebas.store", "Tebas Suporte");
    this.name = name;
    this.email = email;
    this.recipients = [new Recipient(email, name)];
  }

  public async sendWelcome() {
    const templateKey = process.env.MAILER_TEMPLATE_WELCOME || "xyz";
    const variables = [
      {
        email: this.email,
        substitutions: [
          {
            var: "name",
            value: this.name,
          },
        ],
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(this.sender)
      .setTo(this.recipients)
      .setSubject("Bem vindo!")
      .setTemplateId(templateKey)
      .setVariables(variables);

    try {
      const response = await this.mailerSend.email.send(emailParams);
      return response;
    } catch (error) {
      return error;
    }
  }

  public async sendReceipt(description: string, amount: string, total: string) {
    const templateKey = process.env.MAILER_TEMPLATE_RECEIPT || "xyz";
    const variables = [
      {
        email: this.email,
        substitutions: [
          {
            var: "name",
            value: this.name,
          },
          {
            var: "description",
            value: description,
          },
          {
            var: "amount",
            value: amount,
          },
          {
            var: "total",
            value: total,
          },
        ],
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(this.sender)
      .setTo(this.recipients)
      .setSubject("Recibo")
      .setTemplateId(templateKey)
      .setVariables(variables);

    try {
      const response = await this.mailerSend.email.send(emailParams);
      return response;
    } catch (error) {
      return error;
    }
  }

  public async sendNotification(
    description: string,
    amount: string,
    total: string
  ) {
    const templateKey = process.env.MAILER_TEMPLATE_NOTIFICATION || "xyz";
    const variables = [
      {
        email: this.email,
        substitutions: [
          {
            var: "name",
            value: this.name,
          },
          {
            var: "description",
            value: description,
          },
          {
            var: "amount",
            value: amount,
          },
          {
            var: "total",
            value: total,
          },
        ],
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(this.sender)
      .setTo(this.recipients)
      .setSubject("Recibo")
      .setTemplateId(templateKey)
      .setVariables(variables);

    try {
      const response = await this.mailerSend.email.send(emailParams);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default EmailSender;
