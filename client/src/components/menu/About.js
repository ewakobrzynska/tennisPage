import React, { useState } from 'react';
import './../../styles/style.css';
import './../../styles/about.css';
import './../../styles/purchase.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ebookCover from './../../assets/ebookCover.png';
import Wilson from './../../assets/wilson.png';

const stripePromise = loadStripe('pk_test_51PlbVIP36u46iKgkQNcCBljQlg0Ea9yGvTyTfmLPxMq2Rf9YKJncDUjKqQmUwCRTAAFVT31Xh8hqF61NAbAa3IQ200jfKJ7aQ1'); 

const About = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
    <section className="about_achievements">
        <div className="container about_achievements-container">
            <div className="about_achievements-left">
                <img src="https://cdn.dribbble.com/users/15891/screenshots/4017266/federer.jpg" alt="Roger Federer" style={{ border: '0.6rem solid white' }} />
                <h2>Styl gry</h2>
                <p>
                    Federer jest uważany za jednego z najbardziej wszechstronnych graczy w historii tenisa. Jego technika, styl gry oraz umiejętność wygrywania na każdej nawierzchni została podsumowana przez Jimmy’ego Connorsa: „W erze specjalistów jesteś albo ekspertem od mączki, albo od trawy, lub od nawierzchni twardych, chyba że jesteś Rogerem Federerem”. Sue Mott, dziennikarka gazety The Daily Telegraph stwierdziła, że jedynie deszcz może powstrzymać Federera od wygrywania.
                    Federer wykonywał forehand prawą ręką. Uderzenie to Szwajcar mógł zagrywać płasko, a także z dużą rotacją, w zależności od nawierzchni na jakiej rozgrywał pojedynek. John McEnroe uznał forehand Federera za „najlepsze uderzenie w historii dyscypliny”, natomiast David Foster Wallace przyrównał to zagranie Federera do „płynnego uderzenia biczem”.
                    Federer dysponował również klasycznym, jednoręcznym backhandem, którym zagrywał piłkę topspinem bądź trudnym do odbioru slajsem. Pomimo tego, że to zagranie Federera uważa się za słabsze niż forehand, niejednokrotnie wygrywał ważne w pojedynkach wymiany, a także mijał przeciwników będących przy siatce.
                    Serwis Szwajcara nie był zbyt silny, jednak był dobrze plasowany. John McEnroe przyznał, że kluczem do wygrywania przez Federera było jego podanie, a także nie siła, lecz precyzja z jaką piłka w kort była zagrywana.
                    Na początku kariery Federer był graczem atakującym, który na kortach trawiastych oraz szybkim betonie często grał stylem serw-wolej. Szwajcar uważany był za jednego z najlepszych technicznie wyszkolonych przy siatce tenisistów obok Michaëla Llodry, Pete’a Samprasa lub Tima Henmana. Po triumfie na Wimbledonie z 2003 roku Federer zaczął częściej grać z tyłu kortu, zza linii końcowej. Po rozpoczęciu współpracy ze Stefanem Edbergiem, przedstawicielem stylu serw-wolej, Szwajcar zapowiedział, że zamierza jak najczęściej powracać do gry ofensywnej przy siatce.
                    Federer słynął również z wielu sztuczek technicznych, m.in. „hot dogów” (uderzenie piłki między nogami stojąc plecami do siatki). Zagrania takie z udziałem Szwajcara miały miejsce m.in. podczas półfinałowego meczu na US Open z 2009 roku przeciwko Novakowi Đokoviciowi oraz I rundzie tych samych rozgrywek z 2010 roku, tym razem przeciwko Brianowi Dabulowi.
                </p>
            </div>

            <div className="about_achievements-right">
                <h1>ROGER FEDERER</h1>
                <p>Szwajcarski tenisista i wieloletni lider rankingu ATP.
                    W 2008 roku zdobył złoty medal w grze podwójnej na Igrzyskach Olimpijskich w Pekinie, a w 2012 roku srebrny medal w grze pojedynczej na Igrzyskach Olimpijskich w Londynie.
                    W 2014 roku wywalczył Puchar Davisa. Uważany jest za jednego z najwybitniejszych zawodników w historii tenisa.</p>
                <button className="buy-ebook-button" onClick={handleOpenModal} >
                    KUP EBOOKA! <br></br>ROGER FEDERER - BIOGRAFIA
                </button>
                <div className="achievements_cards">
                    <article className="achievement_card">
                        <span className="achievement_icon">
                            <i className="uil uil-video"></i>
                            <h3>103</h3><p>Wygrane turnieje</p>
                        </span>
                    </article>
                    <article className="achievement_card">
                        <span className="achievement_icon">
                            <i className="uil uil-video"></i>
                            <h3>20</h3><p>Wygranych turnieji wielkoszlemowych</p>
                        </span>
                    </article>
                    <article className="achievement_card">
                        <span className="achievement_icon">
                            <i className="uil uil-video"></i>
                            <h3>8</h3><p>Wygranych Wimbledon</p>
                        </span>
                    </article>
                </div>
                <h2>Rakieta</h2>
                <p>Rakieta tenisowa Rogera Federera nie jest niczym magicznym, ale jego styl gry i wyniki łatwo każą myśleć, że jest. Federer używa swojej własnej rakiety Wilson Pro Staff RF 97 Autograph, którą można kupić w sklepie. Używa strun Champions Choice.
                    Przez wiele lat Roger Federer grał rakietą Wilson Pro Staff 90, 90-calową rakietą z małym, ale wydajnym sweet -spotem. Po słabych wynikach i kontuzji w 2013 roku, zdecydował, że czas zmienić dotychczasowy sprzęt i wspólnie z Wilsonem opracowali nową, mocniejszą rakietę, z większą belką i większą główką rakiety. Była to rakieta Wilson Pro Staff Roger Federer Autograph 97 (nazwy rakiet SĄ coraz dłuższe!), w skrócie RF97A.
                </p>
                < img src={Wilson} alt="Roger Federer with Racket" style={{ border: '0.6rem solid white' }}/>
            </div>
        </div>

        {isModalOpen && (
                <div className="modal">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm handleCloseModal={handleCloseModal} />
                        </Elements>
                </div>
            )}

    </section>);

    };

    const CheckoutForm = ({ handleCloseModal }) => {
        const stripe = useStripe();
        const elements = useElements();
        const [errorMessage, setErrorMessage] = useState('');
        const [successMessage, setSuccessMessage] = useState('');
        const [customerName, setCustomerName] = useState('');
        const [customerEmail, setCustomerEmail] = useState('');
    
        const handlePurchase = async (e) => {
            e.preventDefault();
            if (!stripe || !elements) {
                return;
            }
    
            const cardElement = elements.getElement(CardElement);
    
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: customerName,
                    email: customerEmail,
                },
            });
    
            if (error) {
                setErrorMessage(error.message);
                return;
            }
    
            const response = await fetch('/api/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    payment_method_id: paymentMethod.id,
                    customer_name: customerName,
                    customer_email: customerEmail,
                }),
            });
    
            const paymentResult = await response.json();
    
            if (paymentResult.error) {
                setErrorMessage(paymentResult.error);
            } else {
                setSuccessMessage('Payment successful! Your eBook will be sent to your email.');
                setTimeout(() => {
                    handleCloseModal();
                }, 3000);
            }
        };
    
        return (
            <div className="modal-content">
                <span className="close-button" onClick={handleCloseModal}>&times;</span>
                <div className="left-column">
                    <img src={ebookCover} alt="eBook Cover" style={{ maxWidth: '100%' }} />
                </div>
                <div className="right-column">
                    <form onSubmit={handlePurchase}>
                        <label>
                            Imię i nazwisko:
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                value={customerEmail}
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Informacje o karcie:
                            <CardElement />
                        </label>
    
                        <button type="submit" disabled={!stripe}>
                            KUP
                        </button>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        {successMessage && <div className="success-message">{successMessage}</div>}
                    </form>
                    <p>Elegancja, precyzja i mistrzostwo na korcie uczyniły go legendą sportu, a skromność i działalność charytatywna – ikoną poza nim. <br></br>To opowieść o geniuszu tenisa, który zainspirował miliony.</p>
                </div>
            </div>
        );
    };

export default About;