import React from "react";
import "./style.css";

function Modal(props) {
  return (
    <div className="container">
      <div className="align-modal">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content text-white text-center d-flex mx-auto justify-content-center">
                <h2>Keep Going</h2>
              <div className="modal-body text-center">
                <p>Sorry. You're not there yet!</p>
                <button
                  {...props}
                  type="button"
                  className="btn modalBtn btn-primary mt-2"
                  data-dismiss="modal"
                  // style={{width: "100vw"}}
                >
                  Close
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
