import '../styles/Footer.css';

function Footer({networksIcons}) {
    return(
        <div className="Footer">
            <div className="Footer__icons">
                {networksIcons.map(e => e)}
            </div>
            <span className="Footer_text">© 2020 | Diseñado por Estudio Gazapus</span>
            <span className="Footer_text">Decoraciones Alybell | Villa Crespo | Ciudad de Buenos Aires</span>
        </div>
    )
}

export default Footer;