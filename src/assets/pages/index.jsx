import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cabecalho from '../layout/cabecalho';
import Footer from '../layout/footer';
import LigaPage from './ligaPage';
import './home.css';

const Liga = ({ id, nome, imagemSrc, alt }) => {
    return (
        <li className="liga" id={id}>
            <Link to={`/liga/${id}`} className="liga-link">
                <div className="nome">{nome}</div>
                <div className="imagem">
                    <img src={imagemSrc} alt={alt} />
                </div>
            </Link>
        </li>
    );
};


Liga.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    imagemSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

const LigasList = () => {
    const ligasData = [
        { id: 39, nome: 'Premier League', imagemSrc: '/img/39-Premier-League.png', alt: 'Premier League' },
        { id: 40, nome: 'Championship', imagemSrc: '/img/40-Championship.png', alt: 'Championship' },
        { id: 41, nome: 'League One', imagemSrc: '/img/41-League-One.png', alt: 'League One' },
        { id: 42, nome: 'League Two', imagemSrc: '/img/42-League-Two.png', alt: 'League Two' },
        { id: 71, nome: 'Brasileirão Serie A', imagemSrc: '/img/71-Brasileirao-Serie-A.png', alt: 'Brasileirão Serie A' },
        { id: 72, nome: 'Brasileirão Serie B', imagemSrc: '/img/72-Brasileirao-Serie-B.png', alt: 'Brasileirão Serie B' },
        { id: 135, nome: 'Serie A', imagemSrc: '/img/135-Serie-A.png', alt: 'Serie A' },
        { id: 136, nome: 'Serie B', imagemSrc: '/img/136-Serie-B.png', alt: 'Serie B' },
        { id: 179, nome: 'Premiership', imagemSrc: '/img/179-Premiership.png', alt: 'Premiership' },
        { id: 88, nome: 'Eredivisie', imagemSrc: '/img/88-Eredivisie.png', alt: 'Eredivisie' },
        { id: 78, nome: 'Bundesliga', imagemSrc: '/img/78-Bundesliga.png', alt: 'Bundesliga' },
        { id: 79, nome: '2. Bundesliga', imagemSrc: '/img/79-2_Bundesliga.png', alt: '2. Bundesliga' },
        { id: 80, nome: '3. Liga', imagemSrc: '/img/80-3._Liga.png', alt: '3. Liga' },
        { id: 140, nome: 'La Liga', imagemSrc: '/img/140-La-Liga.png', alt: 'La Liga' },
        { id: 141, nome: 'Segunda División', imagemSrc: '/img/141-Segunda-Division.png', alt: 'Segunda División' },
        { id: 61, nome: 'Ligue 1', imagemSrc: '/img/61-Ligue-1.png', alt: 'Ligue 1' },
        { id: 235, nome: 'Premier League', imagemSrc: '/img/235-Premier-League-Russia.png', alt: 'Premier League' },
        { id: 94, nome: 'Primeira Liga', imagemSrc: '/img/94-Primeira-Liga.png', alt: 'Primeira Liga' },
    ];

    return (
        <ol id="ligasLista" className="ligas">
            {ligasData.map((liga) => (
                <Liga key={liga.id} id={liga.id} nome={liga.nome} imagemSrc={liga.imagemSrc} alt={liga.alt} />
            ))}
        </ol>
    );
}


function Home() {
    return (
        <Router>
            <Cabecalho />
            <section className="content">
                <Routes>
                    <Route path="/futebol-statistics" element={<LigasList />} />
                    <Route path="/liga/:id" element={<LigaPage />} />
                </Routes>
            </section>
            <Footer />
        </Router>
    );
}

export default Home;
