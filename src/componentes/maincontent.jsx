import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <section id="inicio">
                <h2>Bienvenido</h2>
                
                

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                1.Caporales
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Origen: Inspirado en el personaje del "caporal", capataz de los esclavos afrobolivianos en la colonia.
                                Región: Andina (especialmente La Paz y Oruro).
                                Características:
                                Danza vigorosa, con pasos marcados y saltos.
                                Vestimenta masculina con botas con cascabeles, sombrero y faja; femenina con minifalda y blusa ajustada.
                                Representa fuerza y autoridad.
                                Ritmo moderno, con fuerte percusión y metales (bandas).
                                Simbolismo: Poder, juventud, resistencia.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                2. Tinkus
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Origen: Basado en antiguos rituales guerreros del norte de Potosí entre comunidades que peleaban para rendir tributo a la Pachamama (madre tierra).
                                Región: Altiplano potosino.
                                Características:
                                Danza energética, de enfrentamiento.
                                Vestimenta colorida, con gorros altos (monteras) y aguayos.
                                Movimientos agresivos, con giros y golpes de pecho.
                                Simbolismo: Lucha, sacrificio, honor.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                3. Saya Afroboliviana
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Origen: Cultura afroboliviana, especialmente de los Yungas.
                                Región: Nor Yungas de La Paz (Chicaloma, Tocaña).
                                Características:
                                Ritmo alegre con fuerte influencia africana.
                                Uso de tambores (bombo, tambor menor) y coros cantados.
                                Vestimenta tradicional afro: faldas largas, pañuelos en la cabeza.
                                Pasos suaves, con desplazamientos de cadera y zapateo suave.
                                Simbolismo: Resistencia cultural, alegría, identidad afrodescendiente
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                4. Cueca Chuquisaqueña (o Chiqueña)
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Origen: Mestiza, de época colonial.
                                Región: Chuquisaca (Sucre).
                                Características:
                                Danza de galanteo (coqueteo) entre parejas.
                                Uso del pañuelo, que se agita como parte del cortejo.
                                Movimientos suaves y elegantes.
                                Vestimenta: mujeres con polleras, blusas con encaje; varones con traje o camisa con faja.
                                Simbolismo: Amor, picardía, tradición mestiza.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                5. Morenada
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Región: Andes bolivianos, especialmente Oruro y La Paz.
                                Características:
                                Paso lento y pesado (representando las cadenas).
                                Música con bandas de metales y tambores.
                                Vestimenta vistosa: máscaras con ojos saltones, trajes bordados, matracas.
                                Mujeres: "chinas morenas" con polleras brillantes y sombreros.
                                Simbolismo: Crítica social, resistencia afrodescendiente, sátira a la esclavitud.</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent; 