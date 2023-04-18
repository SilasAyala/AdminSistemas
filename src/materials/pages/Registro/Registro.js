import Button from "../../../shared/components/FormElements/Button";
import './Registro.css'
import '../../font-awesome-4.7.0/css/font-awesome.css'
import Select from "react-select";
import sede from '../imagenes/about.jpg'



const Registro = () => {
    const sedes = [
        {value: "sd#1", label: "San Cristobal"},
        {value : "sd#2", label: "Naranjo"}
    ];

    const subs = [
        {value: "sb#1", label: "Silver"},
        {value: "sb#2", label: "Gold"},
        {value: "sb#1", label: "Platinum"}
    ];

    return(
        <>
            <div class="form_wrapper">
                <div class="form_container">
                    <div class="title_container">
                        <h2>Unete al  mejor gimnasio</h2>
                    </div>
                    <div class="row clearfix">
                        <div class="">
                            <form>
                                <div class="input_field">
                                    <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Ingresa tu Correo" required></input>
                                </div>
                                <div class="input_field">
                                    <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                    <input type="text" name="telefono" placeholder="Ingresa tu telefono" required></input>
                                </div>
                                <div class="row clearfix fecha_partes">
                                    <div class="col_half">
                                        <div class="input_field fecha">
                                            <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                                            <input type="text" name="dia" placeholder="DD"></input>
                                        </div>
                                    </div>
                                    <div class="col_half">
                                        <div class="input_field fecha">
                                            <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                                            <input type="text" name="mes" placeholder="MM"></input>
                                        </div>
                                    </div>
                                    <div class="col_half">
                                        <div class="input_field fecha anio">
                                            <span><i aria-hidden="true" class="fa fa-calendar"></i></span>
                                            <input type="text" name="anio" placeholder="YYYY"></input>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row clearfix">
                                    <div class="col_half">
                                        <div class="input_field">
                                            <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                            <input type="text" name="nombre" placeholder="Nombre"></input>
                                        </div>                                        
                                    </div>
                                    <div class="col_half">
                                            <div class="input_field ">
                                                <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" name="nombre" placeholder="Apellido"></input>
                                            </div>                                            
                                    </div>
                                </div>
                                    <div class="input_field radio_option">
                                        <input type="radio" name="radiogroup1" id="rd1"></input>
                                        <label for="rd1">Masculino</label>
                                        <input type="radio" name="radiogroup1" id="rd2"></input>
                                        <label for="rd2">Femenino</label>
                                    </div>
                                    <div class="input_field select_option">
                                        <Select options={sedes} defaultValue={{label:"Seleccionar...", value: 0}}></Select><br></br>
                                        <Select options={subs} defaultValue={{label:"Seleccionar...", value: 0}}></Select>
                                    </div>
                                    <div class="input_field checkbox_option">
                                        <input type="checkbox" id="cb1"></input>
                                        <label for="cb1">Estoy de acuerdo con los terminos y condiciones</label>
                                    </div>
                                    <div class="input_field checkbox_option">
                                        <input type="checkbox" id="cb2"></input>
                                        <label for="cb2">Quiero recibir nuevas noticias</label>
                                    </div>
                                <input class="button" type="submit" value="Registrar"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro;