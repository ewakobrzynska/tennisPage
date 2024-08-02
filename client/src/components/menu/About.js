import React from 'react';
import './../../styles/style.css';
import './../../styles/about.css';

const About = () => (
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
                <img src="https://tennisnerd.net/wp-content/uploads/2019/09/roger-federer-afp-NYPost.jpg" alt="Roger Federer with Racket" style={{ border: '0.6rem solid white' }} />
            </div>
        </div>
    </section>
);

export default About;
