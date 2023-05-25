import './Pago.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Pago = () => {
    return(
        <>
            <div className='pago-wrapper'>
                <div className='pago-container'>
                    <form className='pago-form'>
                        <h1 className='tlt-pago'>Realizar Pago</h1>
                        <br />
                        <label for='correo'><b>Ingresa tu Correo</b></label>
                        <br /><br />
                        <input type="text" placeholder='Ingrese Correo' name='correo' className='input-pago' required/>
                        <Link to='/user/pago'>
                            <button type='submit' className='btn-pago'>Pagar</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default Pago;