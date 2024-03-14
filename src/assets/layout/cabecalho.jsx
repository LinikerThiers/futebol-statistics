
import { Link } from 'react-router-dom';
import './cabecalho.css'

const Cabecalho = () => {
    return (
        <div className="infos-liga">
            <Link to="/futebol-statistics" className='link-h1'>
                <h1>Futebol Statistics</h1>
            </Link>
            <Link to="/futebol-statistics">
                <img src="./src/assets/img/logo-branco.png" alt="Logo" />
            </Link>
        </div>
    );
};


export default Cabecalho