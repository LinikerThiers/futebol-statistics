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
        { id: 39, nome: 'Premier League', imagemSrc: 'https://static.vecteezy.com/system/resources/previews/015/863/721/original/england-premier-league-logo-on-transparent-background-free-vector.jpg', alt: 'Premier League' },
        { id: 40, nome: 'Championship', imagemSrc: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/EFL_Championship_logo.png', alt: 'Championship' },
        { id: 41, nome: 'League One', imagemSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/EFL_League_One_Logo.svg/1200px-EFL_League_One_Logo.svg.png', alt: 'League One' },
        { id: 42, nome: 'League Two', imagemSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/EFL_League_Two_Logo.svg/1200px-EFL_League_Two_Logo.svg.png', alt: 'League Two' },
        { id: 71, nome: 'Brasileirão Serie A', imagemSrc: 'https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png', alt: 'Brasileirão Serie A' },
        { id: 72, nome: 'Brasileirão Serie B', imagemSrc: 'https://upload.wikimedia.org/wikipedia/pt/f/f4/Campeonato_Brasileiro_S%C3%A9rie_B_logo.png', alt: 'Brasileirão Serie B' },
        { id: 135, nome: 'Serie A', imagemSrc: 'https://logospng.org/download/serie-a-tim/serie-a-tim-4096.png', alt: 'Serie A' },
        { id: 136, nome: 'Serie B', imagemSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Serie_BKT_logo.png', alt: 'Serie B' },
        { id: 179, nome: 'Premiership', imagemSrc: 'https://seeklogo.com/images/S/scottish-premiership-logo-99CB2ECB95-seeklogo.com.png', alt: 'Premiership' },
        { id: 88, nome: 'Eredivisie', imagemSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Eredivisie_nuovo_logo.png', alt: 'Eredivisie' },
        { id: 78, nome: 'Bundesliga', imagemSrc: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Bundesliga_logo_%282017%29.png', alt: 'Bundesliga' },
        { id: 79, nome: '2. Bundesliga', imagemSrc: 'https://upload.wikimedia.org/wikipedia/pt/c/cc/2._Bundesliga_logo.png', alt: '2. Bundesliga' },
        { id: 80, nome: '3. Liga', imagemSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/3._Liga_logo_%282019%29.svg/1200px-3._Liga_logo_%282019%29.svg.png', alt: '3. Liga' },
        { id: 140, nome: 'La Liga', imagemSrc: 'https://logowik.com/content/uploads/images/laliga6363.logowik.com.webp', alt: 'La Liga' },
        { id: 141, nome: 'Segunda División', imagemSrc: 'https://logowik.com/content/uploads/images/laliga6363.logowik.com.webp', alt: 'Segunda División' },
        { id: 61, nome: 'Ligue 1', imagemSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png', alt: 'Ligue 1' },
        { id: 235, nome: 'Premier League', imagemSrc: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Russian_Premier_League.svg', alt: 'Premier League' },
        { id: 94, nome: 'Primeira Liga', imagemSrc: 'https://www.rbsdirect.com.br/imagesrc/23989116.jpg?w=700', alt: 'Primeira Liga' },
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
