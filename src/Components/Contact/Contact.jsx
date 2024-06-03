import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j608dw9', 'template_pe0smuk', form.current, 'SvKUSJoQc3Ri3jRn4')
            .then(() => {
                e.target.reset();
                toast.success('Message Successfully send')
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '+8801406644043';
        const encodedPhoneNumber = encodeURIComponent(phoneNumber);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;
        window.open(whatsappURL, '_blank');
    };

    const handleMessengerClick = () => {
        const userName = "adryanmehedi";
        const messengerURL = `https://m.me/${userName}`
        window.open(messengerURL, '_blank');
    }

    // const handleEmailClick = () => {
    //     const recipientEmail = 'mehedii.h03@gmail.com';
    //     const subject = 'Inquiry';
    //     const body = 'Hello, I have a question.';
    //     const encodedSubject = encodeURIComponent(subject);
    //     const encodedBody = encodeURIComponent(body);

    //     const emailURL = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    //     window.open(emailURL, "new");
    // };
    const handleEmailClick = () => {
        // Get the email address from the div.
        const emailAddress = 'mehedii.h03@gmail.com';
      
        // Open the mail client and compose an email to the specified address.
        window.open('mailto:' + emailAddress);
      }

    return (
        <section className="contact section" id="contact"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact me here.</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Hit me up</h3>
                    <div className="contact__info">
                        <div className="contact__card" onClick={handleEmailClick}>
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <span className="contact__card-data">mehedii.h03@gmail.com</span>
                        </div>

                        <div className="contact__card" onClick={handleWhatsAppClick}>
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <span className="contact__card-data">+880 140664 4043</span>
                        </div>

                        <div className="contact__card" onClick={handleMessengerClick}>
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <span className="contact__card-data">Adyran Mehedi</span>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Send me a message</h3>
                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div  contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" id="" cols="30" rows="10" className="contact__form-input" placeholder="your message"></textarea>
                        </div>
                        <div className="contact-btn">
                            <button type="submit" className="button btn-right button--flex">
                                Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;