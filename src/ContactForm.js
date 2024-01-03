import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from "sonner";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// const ContactUs = () => {
//     const form = useRef();
    
//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_l4qjbbp', 'template_8a3wnpq', form.current, '7pv9pX151yuqzmEkB')
//         .then((result) => {
//             console.log("SUCCESS", result.text);
//             form.current.reset();
//         }, (error) => {
//             console.log("ERROR", error.text);
//         });
//     };

//     return (
//     <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', width: "27%" }}>
//         <label>Name</label>
//         <input type="text" name="from_name" placeholder='Name'/>
//         <label>Email</label>
//         <input type="email" name="from_email" placeholder='Email' />
//         <label>Message</label>
//         <textarea name="message" placeholder='Please type a message'/>
//         <input type="submit" value="Send" />
//     </form>
//     );
// };

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Please enter your first name')
        .max(50, 'First name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    message: Yup.string()
        .min(10, 'Please enter a longer message')
        .required('Message is required'),
});

const ContactUs = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4qjbbp', 'template_8a3wnpq', form.current, '7pv9pX151yuqzmEkB')
        .then((result) => {
            console.log("SUCCESS", result.text);
            form.current.reset();
            toast.success("Message sent sucessfully!");
        }, (error) => {
            console.log("ERROR", error.text);
            toast.error("Message failed to send, please try again.");
        });
    };
    return(
        <div style={{color:"white", marginLeft:"-8.5em"}}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={FormSchema}
            >
                {({ errors, touched, isValid }) => (
                    <Form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', width: '175%'}}>
                        <label style={{ marginBottom: '0.5rem' }}>Name</label>
                        <Field
                            name="name"
                            placeholder="Name"
                            style={{ marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '4px'}}
                        />
                        {errors.name && touched.name ? (
                            <div style={{ color: '#db4a4a', marginBottom: '0.5rem' }}>{errors.name}</div>
                        ) : null}
                        <label style={{ marginBottom: '0.5rem' }}>Email</label>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            style={{ marginBottom: '0.5rem', padding: '0.5rem', borderRadius: '4px'}}
                        />
                        {errors.email && touched.email ? (
                            <div style={{ color: '#db4a4a', marginBottom: '0.5rem' }}>{errors.email}</div>
                        ) : null}
                        <label style={{ marginBottom: '0.5rem' }}>Message</label>
                        <Field
                            name="message"
                            placeholder="Please type a message"
                            style={{ marginBottom: '0.5rem', padding: '0.5rem', height: '10rem', borderRadius: '4px' }}
                            component="textarea"
                        />
                        {errors.message && touched.message ? (
                            <div style={{ color: '#db4a4a', marginBottom: '0.5rem'}}>{errors.message}</div>
                        ) : null}
                        <button
                            type="submit"
                            value="Send"
                            disabled={!isValid}
                            style={{
                                backgroundColor: '#4caf50',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                marginTop: '1rem',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
        );
}



export default ContactUs;