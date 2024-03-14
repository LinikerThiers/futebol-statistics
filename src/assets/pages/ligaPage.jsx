
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import './ligaPage.css';

const apiKey = import.meta.env.VITE_API_KEY;
const apiHost = import.meta.env.VITE_API_HOST;

const LigaPage = () => {
    const { id } = useParams();
    const [anoSelecionado, setAnoSelecionado] = useState('2023');
    const [infosSeason, setInfosSeason] = useState([]);
    const [infoLiga, setInfoLiga] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.request({
                    method: 'GET',
                    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
                    params: {
                        season: anoSelecionado,
                        league: id,
                    },
                    headers: {
                        'X-RapidAPI-Key': apiKey,
                        'X-RapidAPI-Host': apiHost,
                    },
                });

                const responseData = response.data;

                const newInfoLiga = responseData.response[0].league;
                setInfoLiga(newInfoLiga);

                const newInfosSeason = responseData.response[0].league.standings[0];
                setInfosSeason(newInfosSeason);

            } catch (error) {
                console.error('Erro ao buscar informações:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id, anoSelecionado]);

    const mudarAno = (event) => {
        setAnoSelecionado(event.target.value);
    };

    return (
        <div>
            <Link to="/futebol-statistics" className='font-awesome'>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>

            <div className="div-liga-page">
                <h1>{loading ? <Skeleton /> : infoLiga.name}</h1>
                <div className="liga-logo">
                    {loading ? <Skeleton width={200} height={100} /> : <img src={infoLiga.logo} alt={infoLiga.name} />}
                </div>
            </div>

            <div className="div-ano">
                <h2>Temporada:</h2>
                <select name="ano" id="ano" value={anoSelecionado} onChange={mudarAno}>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>

            <section className='listaTimes'>
                <ol id="timesLista" className="times">
                    {loading ? (
                        //Renderiza o Skeleton
                        Array.from({ length: 20 }).map((_, i) => (
                            <li key={i} className="time">
                                <span className="numero"><Skeleton /></span>
                                <span className="nome"><Skeleton /></span>
                                <div className="detalhes">
                                    <ol className="tipos">
                                        <li className="pontos"><Skeleton /></li>
                                        <li className="pontos"><Skeleton /></li>
                                        <li className="pontos win"><Skeleton /></li>
                                        <li className="pontos draw"><Skeleton /></li>
                                        <li className="pontos lose"><Skeleton /></li>
                                    </ol>
                                </div>
                            </li>
                        ))
                    ) : (
                        //Renderiza os times de acordo com a api
                        infosSeason.map((time, i) => (
                            <li key={i} className="time">
                                <span className="numero">{time.rank}º</span>
                                <span className="nome">{time.team.name}</span>

                                <div className="detalhes">
                                    <ol className="tipos">
                                        <li className="pontos">Pontos: <b>{time.points}</b></li>
                                        <li className="pontos">Jogos: {time.all.played}</li>
                                        <li className="pontos win">Vitórias: {time.all.win}</li>
                                        <li className="pontos draw">Empates: {time.all.draw}</li>
                                        <li className="pontos lose">Derrotas: {time.all.lose}</li>
                                    </ol>

                                    <img src={time.team.logo} alt={time.team.name} />
                                </div>
                            </li>
                        ))
                    )}
                </ol>
            </section>
        </div>
    );
};

LigaPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default LigaPage;
