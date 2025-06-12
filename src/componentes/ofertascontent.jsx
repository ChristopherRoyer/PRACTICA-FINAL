import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import caporal from '../assets/image-cards/caporal.jpeg';
import tinkus from '../assets/image-cards/tinkus.jpeg';
import saya from '../assets/image-cards/saya.jpeg';
import {Modal1, Modal2, Modal3} from './modal';
import './ofertascontent.css';


const OfertasContent = () => {
  const [modalCaporal, setModalCaporal] = useState(false);
  const [modalTinkus, setModalTinkus] = useState(false);
  const [modalSaya, setModalSaya] = useState(false);

  return (
    <main className="main-content">
      <section id="inicio">
        <h2>Oferta de cursos</h2>
        
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          alignItems: 'center',
          overflowX: 'auto',
          padding: '20px 0'
        }}>
          <div className="card" style={{ width: '18rem', flexShrink: 0 }}>
            <img src={caporal} className="card-img-top" alt="Caporal" />
            <div className="card-body">
              <h5 className="card-title">Caporal</h5>
              <p className="card-text">
                Aprende el baile tradicional del Caporal, una danza folklórica boliviana.
              </p>
              <button 
                onClick={() => setModalCaporal(true)} 
                className="btn btn-primary"
              >
                Inscribirse
              </button>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', flexShrink: 0 }}>
            <img src={tinkus} className="card-img-top" alt="Tinkus" />
            <div className="card-body">
              <h5 className="card-title">Tinkus</h5>
              <p className="card-text">
                Descubre la danza ritual de los Tinkus, una expresión cultural única.
              </p>
              <button 
                onClick={() => setModalTinkus(true)} 
                className="btn btn-primary"
              >
                Inscribirse
              </button>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', flexShrink: 0 }}>
            <img src={saya} className="card-img-top" alt="Saya" />
            <div className="card-body">
              <h5 className="card-title">Saya</h5>
              <p className="card-text">
                Explora la rica tradición de la Saya, danza afroboliviana.
              </p>
              <button 
                onClick={() => setModalSaya(true)} 
                className="btn btn-primary"
              >
                Inscribirse
              </button>
            </div>
          </div>
        </div>

        {modalCaporal && (
          <>
            <div className="modal-backdrop fade show"></div>
            <Modal1 onClose={() => setModalCaporal(false)} />
          </>
        )}
        {modalTinkus && (
          <>
            <div className="modal-backdrop fade show"></div>
            <Modal2 onClose={() => setModalTinkus(false)} />
          </>
        )}
        {modalSaya && (
          <>
            <div className="modal-backdrop fade show"></div>
            <Modal3 onClose={() => setModalSaya(false)} />
          </>
        )}
      </section>
    </main>
  );
};

export default OfertasContent;
