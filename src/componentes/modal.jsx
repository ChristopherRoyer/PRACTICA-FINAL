import React from 'react';

const Modal1 = ({ onClose }) => {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Caporal</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>El Caporal es una danza folklórica boliviana que combina elementos de la cultura afroboliviana y española. En este curso aprenderás los pasos básicos, la historia y la cultura detrás de esta hermosa danza que representa la fuerza y elegancia de la cultura boliviana.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal2 = ({ onClose }) => {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tinkus</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>Los Tinkus son una danza ritual originaria de Potosí que representa el encuentro de comunidades. Aprenderás la técnica, los movimientos y el significado cultural de esta importante danza que representa la unión y el encuentro de diferentes comunidades andinas.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal3 = ({ onClose }) => {
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Saya</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>La Saya es una danza afroboliviana que representa la resistencia y la cultura de los afrodescendientes en Bolivia. En este curso aprenderás los ritmos, movimientos y la historia de esta importante expresión cultural que celebra la herencia africana en Bolivia.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal1, Modal2, Modal3 };
