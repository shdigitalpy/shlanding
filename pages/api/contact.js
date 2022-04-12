import nodemailer from 'nodemailer'

export default async (req, res) => {
	const { name, email, phone, msg } = req.body;

	const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: false,
    ssl: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

	try {
		const emailResponse = await transporter.sendMail({

			from : email,
			to: 'sandro@sh-digital.ch',
			subject : `Anfrage sandrohuber.website von ${name}`,
			html: `
			<p>Es hat jemand das Kontaktformular auf der Freelancer Seite ausgefüllt. </p>
			<br> 

			<h3>Kontaktdaten:</h3>
			<br>
			<p>${name}<br>
			${email}<br>
			${phone} <br><br>
			${msg} </p>
			`,

		});

		console.log("Message sent", emailResponse.messageId,);


	} catch (err) {

		console.log(err)

	}

	console.log(req.body)
	res.status(200).json(req.body);
}