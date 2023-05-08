import './Contacto.css'
import './fonts/material-design-iconic-font/css/material-design-iconic-font.css'
import '../../font-awesome-4.7.0/css/font-awesome.css'

const Contacto = () => {
    return(
        <>
           <div class = "wrapper">
            <div class="inner">
                <form action="">
                    <h3> Contactanos</h3>
                    <p>Si tienes alguna duda.</p>
                    <label class="form-group">
                        <input type="text" class="form-control" required></input>
                        <span>Tu nombre</span>
                        <span class="border"></span>
                    </label>
                    <label class="form-group">
                        <input type="text" class="form-control"  required></input>
						<span for="">Tu correo</span>
						<span class="border"></span>
                    </label>
                    <label class="form-group">
                        <textarea name="" id="" class="form-control" required></textarea>
                        <span for="">Tu Mensaje</span>
                        <span class="border"></span>
                    </label>
                    <button>Enviar
                        <i class="zmdi zmdi-arrow-right"></i>
                    </button>
                </form>
            </div>
           </div>
        </>
    );
}

export default Contacto