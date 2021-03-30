import React from "react";
// import React, { useState } from "react";
// import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export const Contact = () => {
    // const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
        
        // const serviceID = "service_ID";
        // const templateID = "template_ID";
        // const userID = "user_W1EIKKTYeAwPUfSEjAkac";

        const onSubmit = (data, reset) => {
            console.log("form submitted");
            // sendEmail(
            //     serviceID,
            //     templateID,
            //     {
            //         name: data.name,
            //         phone: data.phone,
            //         email: data.email,
            //         subject: data.subject,
            //         message: data.message
            //     },
            //     userID
            // )
            reset.target.reset();
        }

    //     const sendEmail = (serviceID, templateID, variables, userID) => {
    //     emailjs.send(serviceID, templateID, variables, userID)
    //       .then(() => {
    //         setSuccessMessage("Your message has been sent!");
    //       }).catch(err => console.error(`Something went wrong ${err}`));
    //   }


    return (
        <div className="contactPage">
                {/* <div className="success-message text-muted font-italic">{successMessage}</div> */}
                <div className="left-row">
                    <div id="name"> Eric Kruk </div>
                    <div id="email">erickrukphoto@gmail.com </div>
                    <div className="row" id="instagram">
                        <div>Instagram</div>
                        <a href="https://www.instagram.com/erickrukphoto/" target="_blank" rel="noreferrer" >
                            <i className="fab fa-instagram fa-2x icon"></i>
                        </a>
                    </div>
                </div>
                <div className="contactTitle">Contact Form</div>
                <br/>
            <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="contactRow">
                    {/* NAME INPUT  */}
                    {/* <span className="error-message"> 
                     {errors.name && errors.name.message} 
                    </span> */}

                    <label htmlFor="name" className="nameLabel">Name</label>
                    <br/>
                    <input
                    type="text"
                    className="form-control"
                    name="name"
                    ref={
                        register({
                            required: " - Please enter your name - ",
                            maxLength: {
                                value: 50,
                                message: " - Please enter a name with fewer than 50 characters - "
                            }
                        })
                    }
                    />
                    {/* PHONE INPUT  */}
                    <br/>
                    <label htmlFor="phone" className="phone-label">Phone</label>
                    <br />
                    {/* <span className="error-message py-1">
                     {errors.phone && errors.phone.message} 
                    </span> */}
                    <input 
                    type="text"
                    className="form-control"
                    name="phone"
                    ref={
                        register({
                            required: " - Please enter your phone number - ",
                        })
                    }
                    />
                    <br/>
                    {/* EMAIL INPUT  */}
                    <span className="error-message py-1">
                     {errors.email && errors.email.message} 
                    </span>
                    <label htmlFor="email" className="email-label">Email</label>
                    <br/>
                    <input 
                    type="email"
                    className="form-control"
                    name="email"
                    ref={
                        register({
                            required: "- Please enter a valid email address -",
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

                            }
                        })
                    }
                    />
                    <br/>
                    {/* SUBJECT  */}
                    <span className="error-message py-1">
                     {errors.subject && errors.subject.message} 
                    </span>
                    <label htmlFor="subject" className="subject-label">Subject</label>
                    <br/>
                    <input 
                    type="text"
                    className="form-control"
                    name="subject"
                    ref={
                        register({
                            required: " - Please enter a subject - ",
                        })
                    }
                    />
                    <br/>
                    {/* MESSAGE  */}
                    <span className="error-message">
                    {errors.message && errors.message.message}
                    </span>
                    <label htmlFor="message" className="message-label">Message</label>
                    <br/>
                    <textarea 
                    type="text"
                    className="form-control message-area"
                    name="message"
                    ref={
                        register({
                            required: " - Please enter your message here - ",
                        })
                    }
                    />
                    <br/>
                    <button className="btn-main-offer contact-btn" type="submit" value="send">Submit</button>
                    </div>
        </form>
        <div className="contact-copyright">
            <div className="row">
                All images property of Eric Kruk | Copyright &copy;{new Date().getFullYear()} | All Rights Reserved
            </div>
            <div className="propertyof row">
                Use of any images without the photographer's explicit permission is strictly prohibited.
            </div>
        </div>
    </div> // end .contactPage

    )
}

