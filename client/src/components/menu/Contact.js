import React from 'react';
import './../../styles/style.css';
import './../../styles/contact.css';

const Contact = () => (
    <section className="contact">
        <div className="container contact_container">
            <aside className="aside_image">
                <div className="aside_image">
                    <img src="https://finitomobile.co.uk/image/contact-banner.png" alt="Contact Banner" />
                </div>
                <h2>Skontaktuj się z Nami!</h2>
                <p>
                    Masz pytania? Chcesz dowiedzieć się więcej?
                    Wypełnij formularz.
                </p>
            </aside>

            <form className="contact_form">
                <div className="form_name">
                    <input type="text" name="Imię" placeholder="Imię" required />
                    <input type="text" name="Nazwisko" placeholder="Nazwisko" required />
                </div>
                <input type="email" name="E-mail" placeholder="E-mail" required />
                <textarea name="Wiadomość" rows="7" placeholder="Wiadomość" required></textarea>
                <button type="submit" className="btn btn-primary">Wyślij</button>
            </form>
        </div>
    </section>
);

export default Contact;
