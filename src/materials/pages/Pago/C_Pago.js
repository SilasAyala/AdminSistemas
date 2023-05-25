import './C_Pago.css'
import chip from './img/chip.png'
import visa from './img/visa.png'

const CPago = () => {
    return(
        <>
        <body class="CPago">
            <div class="Titulo-pago">
                <h1>Información de Pago</h1>
            </div>

        
            <div class="container">
                    <div class="card-container">
                        <div class="front">
                            <div class="image">
                                <img src={chip} alt="" />
                                <img src={visa} alt="" />
                            </div>
                            <div class="card-number-box">################</div>
                            <div class="flexbox">
                                <div class="box">
                                    <span>Titular de la Tarjeta</span>
                                    <div class="card-holder-name">Full Name</div>
                                </div>
                                <div class="box">
                                    <span>Expiración</span>
                                    <div class="expiration">
                                        <span class="exp-month">mm</span>
                                        <span class="exp-year">yy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="back">
                            <div class="stripe"></div>
                            <div class="box">
                                <span>cvv</span>
                                <div class="cvv-box"></div>
                                <img src={visa} alt="" />
                            </div>
                        </div>

                    </div>



                    <form action="">
                        <div class="inputBox">
                            <span>Numero de Tarjeta</span>
                            <input type="text" maxLength="16" class="card-number-input"></input>
                        </div>
                        <div class="inputBox">
                            <span>Titular de la Tarjeta</span>
                            <input type="text" class="card-number-input"></input>
                        </div>
                        <div class="flexbox">
                            <div class="inputBox">
                                <span>mm expiración</span>
                                <select name="" id="" class="month-input">
                                    <option value="" selected disabled>month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>       
                            </div>
                            <div class="inputBox">
                                <span>yy expiración</span>
                                <select name="" id="" class="year-input">
                                    <option value="year" selected disabled>Año</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                </select>
                            </div>
                            <div class="inputBox">
                                <span>cvv</span>
                                <input type="text" maxLength="4" class="cvv-input" />
                            </div>
                        </div>
                        <br />
                        <div className='Saldo'>
                            <h2>Saldo:  </h2>
                            
                            <h2 id='Monto'>Aqui va el monto!</h2>
                        </div>
                        <input type="submit" value="Pagar" class="submit-btn" />
                        
                    </form>
                </div>

            </body>
        </>
    );
}

export default CPago;
