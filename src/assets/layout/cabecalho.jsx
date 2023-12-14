
import { Link } from 'react-router-dom';
import './cabecalho.css'

const Cabecalho = () => {
    return (
        <div className="infos-liga">
            <Link to="/" className='link-h1'>
                <h1>Futebol Statistics</h1>
            </Link>
            <Link to="/">
                <img src="./src/assets/img/logo-branco.png" alt="Logo" />
            </Link>
        </div>
    );
};


export default Cabecalho