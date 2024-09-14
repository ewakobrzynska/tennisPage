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

            <form className="contact_form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWU000007vYzZ" method="POST">
            <input type="hidden" name="oid" value="00DWU000007vYzZ"/>
            <input type="hidden" name="retURL" value="https://britenet-15f-dev-ed--c.develop.vf.force.com/apex/TennisPage"/>
                <div className="form_name">
                    <input id="first_name" type="text" name="first_name" placeholder="Imię" required />
                    <input id="last_name" type="text" name="last_name" placeholder="Nazwisko" required />
                </div>
                <input type="tel" id="phone" name="phone" placeholder="Numer telefonu" required/>
                <input id="email" type="email" name="E-mail" placeholder="E-mail" required />
                <textarea name="description" rows="7" placeholder="Wiadomość" required></textarea>
                <button type="submit" name="submit" className="btn btn-primary">Wyślij</button>
            </form>
        </div>
    </section>
);

export default Contact;
