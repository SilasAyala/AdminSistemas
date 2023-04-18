import Button from "../../../shared/components/FormElements/Button";
import './Registro.css'
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
        <div className="registro">
            <form>
                <div class="form-group">
                    <label> Dirección de correo </label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email"></input><br></br>
                    <label> Nombre </label>
                    <input type="text" id="Nombre" placeholder="Ingrese su nombre"></input><br></br>
                    <label> Apellido </label>
                    <input type="text" id="Apellido" placeholder="Ingrese su apellido"></input><br></br>
                    <label> Fecha Nacimiento </label>
                    <input type="date" id="Nacimiento"></input><br></br>
                    <label> Numero de Teléfono </label>
                    <input type="text" id="Telefono" placeholder="xxxx-xxxx"></input><br></br>
                    <label> Sede </label>
                    <Select  options = {sedes} defaultValue={{label:"Sede", value: 0}} /><br></br>
                    <label> Suscripción </label>
                    <Select options={subs} defaultValue={{label:"Suscripciones", value: 0}}></Select><br></br>

                    <Button href="/pago"> Enviar </Button>
                </div>
            </form>
        </div>
        <div class="imagen_sede">
            <img src={sede} alt="sede"></img>
        </div>
        </>
    )
}

export default Registro;