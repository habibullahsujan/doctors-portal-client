import React from "react";

const Modal = ({title, message, closeModal, handleDeleteDoctor, deleteDoctor}) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
         {title}
          </h3>
          <p className="py-4">
           {message}
          </p>
          <div className="modal-action">
            
            <button onClick={closeModal} className="btn btn-error rounded-sm">Cancel</button>
            <label onClick={()=>handleDeleteDoctor(deleteDoctor)} htmlFor="delete-modal" className="btn rounded-sm">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
