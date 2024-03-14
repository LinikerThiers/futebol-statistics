
import { Link } from 'react-router-dom';
import './cabecalho.css'

const Cabecalho = () => {
    return (
        <div className="infos-liga">
            <Link to="/futebol-statistics" className='link-h1'>
                <h1>Futebol Statistics</h1>
            </Link>
            <Link to="/futebol-statistics">
                <img src="https://images.vexels.com/media/users/3/141231/isolated/preview/c59b6035d104844f7006c5d74f200be6-jogador-de-futebol-acertando-1.png" alt="Logo" />
            </Link>
        </div>
    );
};


export default Cabecalho