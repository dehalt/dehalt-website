import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {

        const body = await request.json();
        const { yourname, email, website,message } = body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "siddukarthik2005@gmail.com",
                pass: "kffm hyus svzq jdpp"
            }
        });

        const mailOptions = {
            from: "siddukarthik2005@gmail.com",
            to: "vgv38634@gmail.com",
            subject: "New Signup",
            html: `
                <h2>New User Signup</h2>
                <p><b>Username:</b> ${yourname}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Website:</b> ${website}</p>
                <p><b>Message:</b> ${message}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Mail sent:", info.response);

        return NextResponse.json({
            message: "Signup successful!",
            success: true
        });

    } catch (err) {

        console.error("Send mail error:", err);

        return NextResponse.json(
            { message: err.message || "Signup failed!" },
            { status: 500 }
        );
    }
}