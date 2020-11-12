import '../styles/About.css';

function About() {
    return (
        <div className="AbotContainer">
            <div className="About">
                <div className="About__text">
                    <div className="AboutDescription">
                        <span className="AboutDescription__pre">ACERCA DE NOSOTROS</span>
                        <h3 className="AboutDescription__title">A RICH FEATURED, EPIC y PREMIUM WORK</h3>
                        <p className="AboutDescription__text">Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus.
                            Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue
                            libero. Suspendisse potenti.
                        </p>
                    </div>
                    <div className="AboutDetails">
                        <span className="AboutDetails__title">Web Design y Development</span>
                        <div className="AboutDetails__listContainer">
                            <ul className="AboutDetails__list">
                                <li className="AboutDetails__item">web content</li>
                                <li className="AboutDetails__item">web content2</li>
                                <li className="AboutDetails__item">web content2</li>
                            </ul>
                            <ul className="AboutDetails__list">
                                <li className="AboutDetails__item">web content3</li>
                                <li className="AboutDetails__item">web content2</li>
                                <li className="AboutDetails__item">web content4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="About__media">
                    <div className="AboutMedia__1image">
                        <div className="AboutMedia__image" style={{ backgroundImage: `url(https://media.timeout.com/images/105320237/image.jpg)` }}>play1</div>
                    </div>
                    <div className="AboutMedia__2images">
                        <div className="AboutMedia__image" style={{ backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/71CvVL2uzmL._AC_SL1500_.jpg)` }}>play2</div>
                        <div className="AboutMedia__image" style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/61stTKXPvJL._AC_SL1000_.jpg)' }}>play3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;