import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Form.css';
import toast, { Toaster } from 'react-hot-toast';

// add Proftion

// useEffect(() => {
//   const scriptURL =
//     'https://script.google.com/macros/s/AKfycbwZuqgnRZgxrWJxosgPZt591zIodi3m0dmmPT8wlU-XWm_KP0iwoOd9cCsDxUTER3eu/exec';
//   const form = document.forms['submit-to-google-sheet'];

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then((response) => {
//         if (response.ok) {
//           closeModal();
//           toast.success('Form submitted successfully');
//           console.log('Form submitted successfully');
//           // You can redirect or show a success message here if needed.
//         } else {
//           toast.error('Error submitting the form');
//           console.error('Error submitting the form');
//         }
//       })
//       .catch((error) => console.error('Error!', error.message));
//   });
// }, []);

//  username: 'contact@ypsilon.co.in',
// password: '5E008386DCCC76D033FA44824D16FC16FBA7',
// host: 2525,
// if (window.Email) {
//   const config = {
//     Host: 'smtp.elasticemail.com', // Replace with your SMTP server host
//     Port: 2525, // Replace with your SMTP server port (usually 465 or 587)
//     // secure: true, // Use TLS encryption
//     // Username: 'contact@ypsilon.co.in', // Replace with your email address
//     // Password: '7FD1E10F922CF99984C9DD98FF6F72375346', // Replace with your email password
//     SecureToken: '3c0f1a72-ee71-493f-8d3d-0c6a4886680e',
//     To: 'contact@ypsilon.co.in', // Replace with recipient email address
//     From: formState.email,
//     Subject: 'This is the subject',
//     Body: `${formState.firstname || 'someone'} ${
//       formState.lastname
//     } connected to you over Email. Message: ${
//       formState.message || 'message is blank'
//     }`,
//   };

//   window.Email.send(config)
//     .then(() => {
//       closeModal();
//       toast.success('Form submitted successfully');
//       console.log(config);
//     })
//     .catch((error) => {
//       console.error('Error sending email:', error);
//       toast.error('Error submitting the form. Please try again later.');
//     });
// } else {
//   console.error('Email library (smtpjs.com) not loaded.');
// }
const ContactForm = ({ closeModal }) => {
  const form = useRef();
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    email: '',
    phone: '',
    message: '',
    services: '', // Array to store selected checkbox values
  });

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormState((prevState) => ({
        ...prevState,
        services: {
          ...prevState.services,
          [value]: checked, // Update value based on checked state
        },
      }));
    } else {
      // Update other input fields
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const radioChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm('service_0lhy86g', 'template_icl8yjl', form.current, {
        publicKey: '8Mw-vWwIkrdzkplVS',
      })
      .then(
        () => {
          toast.success(
            'Form sent successfully! The Ypsilon Team will be in touch with you shortly!'
          );
          console.log('SUCCESS!');
          closeModal();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(
            'Form submission failed. Please try again later or contact support for assistance'
          );
        }
      );
  };

  return (
    <>
      <div className="formbold-main-wrapper z-50">
        <div
          className="formbold-form-wrapper  z-20
        relative"
        >
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          <h1>Schedule A Free Consultation</h1>

          <form
            ref={form}
            method="POST"
            name="submit-to-google-sheet"
            onSubmit={submitHandler}
          >
            <div className="formbold-input-flex  z-20">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  onChange={changeHandler}
                  id="firstname"
                  value={formState.name}
                  placeholder="First Name"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  onChange={changeHandler}
                  id="lastname"
                  value={formState.lastName}
                  placeholder="Last Name"
                  className="formbold-form-input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="formbold-form-label">
                {' '}
                Profession{' '}
              </label>
              <input
                type="text"
                name="profession"
                onChange={changeHandler}
                id="Profession"
                value={formState.profession}
                placeholder="Profession"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label">
                  {' '}
                  Mail{' '}
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  id="email"
                  value={formState.email}
                  placeholder="User@mail.com"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  {' '}
                  Phone{' '}
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={changeHandler}
                  id="phone"
                  value={formState.phone}
                  placeholder="+91 00000 00000"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-radio-wrapper">
              <label htmlFor="service" className="formbold-form-label">
                What are you looking for?
              </label>

              {/* formbold-radio-flex */}
              <div className="flex flex-col gap-4 justify-start items-start">
                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="checkbox"
                      name="services"
                      onChange={radioChangeHandler}
                      id="service"
                      value="Course-Information"
                      checked={formState.services.includes(
                        'Course-Information'
                      )}
                    />
                    Course Information
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="checkbox"
                      name="services"
                      onChange={radioChangeHandler}
                      id="service"
                      checked={formState.services.includes(
                        'Enrollment-Assistance'
                      )}
                      value="Enrollment-Assistance"
                    />
                    Enrollment Assistance
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="checkbox"
                      name="services"
                      onChange={radioChangeHandler}
                      checked={formState.services.includes('Academic-Support')}
                      value="Academic-Support"
                    />
                    Academic-Support
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="checkbox"
                      name="services"
                      onChange={radioChangeHandler}
                      checked={formState.services.includes('Career-Guidance')}
                      id="service"
                      value="Career-Guidance"
                    />
                    Career Guidance
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="checkbox"
                      name="services"
                      onChange={radioChangeHandler}
                      checked={formState.services.includes('Others')}
                      id="service"
                      value="Others"
                    />
                    Others
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="formbold-form-label">
                {' '}
                Message{' '}
              </label>
              <textarea
                rows="6"
                name="message"
                onChange={changeHandler}
                id="message"
                value={formState.message}
                placeholder="Type your requirements"
                className="formbold-form-input"
              ></textarea>
            </div>

            <button
              type="submit"
              name="submit"
              className="formbold-btn outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ContactForm;
