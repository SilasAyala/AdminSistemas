import './LP.css'
import imagen from '../imagenes/gim1.jpg'
import imagen2 from '../imagenes/sauna.jpg'
import imagen3 from '../imagenes/about1.jpg'
import imagen4 from '../imagenes/gim2.jpg'
import imagen5 from '../imagenes/gim4.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const LP = () => {
    return(
        <>
            <div class = 'lp-wrapper'>
                <div class="container">
                    <div class='slide-1'>
                        <div class = 'principal'>
                            <div class='column'>
                                <h1> Quienes somos?</h1>
                                <br /><br />
                                <h2> somos un gimnasio que se preocupa por el éxito y la satisfacción de nuestros miembros, y estamos comprometidos a brindarles el mejor ambiente y recursos para ayudarles a alcanzar su máximo potencial.</h2>
                                <Link class='btn-unete' to="/registro">
                                    <button>Unete a Nosotros</button>
                                </Link>
                            </div>
                            <div class='column'>
                                <img src={imagen} alt='Gimnasio'></img>
                            </div>
                        </div>
                        <h2 class='title-sucursales'>Nuestras Instalaciones</h2>
                        <div class='slide-sucursales'>
                            <img src={imagen5} alt="" />
                            <img src={imagen2} alt="" />
                            <img src={imagen3} alt="" />
                            <img src={imagen4} alt="" />
                        </div>  
                    </div>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <br />
                    <h1>Elige tu plan</h1>
                    <div className='container-precios'>
                        
                        <div class="pricing-table group">

                                <div class="block personal fl">
                                    <h2 class="title">Gold</h2>

                                    <div class="content">
                                        <p class="price">
                                            <sup>Q</sup>
                                            <span>150</span>
                                            <sub>/mensual</sub>
                                        </p>
                                    </div>

                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span>Acceso a Todas las Maquinas</li>
                                        <li><span class="fontawesome-star"></span>Derecho a Entrada a 1 Sucursal*</li>
                                        <li><span class="fontawesome-dashboard"></span></li>
                                        <li><span class="fontawesome-cloud"></span>*Sucursal en la que se inscribe</li>
                                        <br />
                                        <Link to="/registro" id='Gold'>
                                            <button className='btn-sub'>Elige este Plan</button>
                                        </Link>
                                    </ul>


                                </div>


                                <div class="block professional fl">
                                    <h2 class="title">Silver</h2>

                                    <div class="content">
                                        <p class="price">
                                            <sup>Q</sup>
                                            <span>300</span>
                                            <sub>/mensual</sub>
                                        </p>
                                    </div>

                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span>Acceso a Todas las Maquinas</li>
                                        <li><span class="fontawesome-star"></span>Derecho a Entrada a 1 Sucursal*</li>
                                        <li><span class="fontawesome-dashboard"></span>1 vez al mes con nuestra nutricionista</li>
                                        <li><span class="fontawesome-cloud"></span>Acceso a Sauna</li>
                                        <Link to="/registro"  id='Silver'>
                                            <button className='btn-sub'>Elige este Plan</button>
                                        </Link>
                                    </ul>


                                </div>

                                <div class="block business fl">
                                    <h2 class="title">Platinum</h2>

                                    <div class="content">
                                        <p class="price">
                                            <sup>Q</sup>
                                            <span>500</span>
                                            <sub>/mensual</sub>
                                        </p>
                                    </div>

                                    <ul class="features">
                                        <li><span class="fontawesome-cog"></span>Todos los Beneficios Anteriores</li>
                                        <li><span class="fontawesome-star"></span>Acceso a Todas las sucursales</li>
                                        <li><span class="fontawesome-dashboard"></span>Derecho a 1 invitado al mes</li>
                                        <li><span class="fontawesome-cloud"></span>30GB Local Storage</li>
                                        <br />
                                        <Link className ='sub' to="/registro" id='Platinum'>
                                            <button className='btn-sub'>Elige este Plan</button>
                                        </Link>
                                    </ul>



                                   

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
}

export default LP;