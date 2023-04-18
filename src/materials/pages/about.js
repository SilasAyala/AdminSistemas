import about from './imagenes/about.jpg'

const About = () => {
    return (
        <>
            <section className='about'>
                <div className='container'>
                    <div className='row align-items-center flex-wrap-reverse'>
                        <div className='col-md-6'>
                            <h3 className='display-5 title'>Acerca de Nosotros</h3>
                            <p className='about__description pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat risus eu ex scelerisque, eget sagittis tellus placerat. Integer vel lacus in est ultrices pharetra. Praesent in tristique elit. Suspendisse tempor consequat interdum. <br></br> <br></br>Nuestras Instalaciones: </p>
                        </div>
                        <div className='col-md-6'>
                            <img src={about} className='w-100 mt-5 pt-4' alt='About GymNew' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;