'use server';

import nodemailer from 'nodemailer';
import { ContactFormType } from '@/types/emailTypes';

export const SendEmail = async (data: ContactFormType) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER, // Send to your own email
			subject: `New Project Inquiry: ${data.nameAndOrg} (${data.requestType})`,
			text: `
New Inquiry Received

Request Type: ${data.requestType}
Name / Organization: ${data.nameAndOrg}
Email: ${data.email}
Disciplines: ${data.disciplines.join(', ')}
Budget: ${data.budget}
Timeline: ${data.timeline}

Project Brief:
${data.projectBrief}
            `,
			html: `
<div style="font-family: monospace, sans-serif; padding: 30px; background-color: #f9f9f9; color: #111;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e5e5;">
        <h2 style="font-size: 18px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
            New Project Inquiry
        </h2>

        <div style="margin-bottom: 20px;">
            <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Request Type</p>
            <p style="font-size: 14px; font-weight: bold; margin: 0;">${data.requestType}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Name & Organization</p>
            <p style="font-size: 14px; font-weight: bold; margin: 0;">${data.nameAndOrg}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Email Address</p>
            <p style="font-size: 14px; font-weight: bold; margin: 0;"><a href="mailto:${data.email}" style="color: #000;">${data.email}</a></p>
        </div>

        <div style="margin-bottom: 20px;">
            <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Disciplines & Scope</p>
            <p style="font-size: 14px; font-weight: bold; margin: 0;">${data.disciplines.join(', ') || 'None selected'}</p>
        </div>

        <div style="display: flex; gap: 20px; margin-bottom: 20px;">
            <div style="flex: 1;">
                <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Budget Allocation</p>
                <p style="font-size: 14px; font-weight: bold; margin: 0;">${data.budget}</p>
            </div>
            <div style="flex: 1;">
                <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 5px 0;">Target Timeline</p>
                <p style="font-size: 14px; font-weight: bold; margin: 0;">${data.timeline}</p>
            </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Project Brief & Problem Statement</p>
            <p style="font-size: 12px; line-height: 1.6; background: #f9f9f9; padding: 15px; border-radius: 4px; margin: 0; white-space: pre-wrap;">${data.projectBrief}</p>
        </div>
    </div>
</div>
            `,
		};

		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error('Failed to send email:', error);
		return { success: false, error: (error as Error).message };
	}
};
