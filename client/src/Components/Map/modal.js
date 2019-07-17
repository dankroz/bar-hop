import React from "react";
import "./style.css";

function Modal(props) {
  return (
    <div className="container">
      <div className="align-modal">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Guess</h5>
                <button
                  {...props}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <p>Sorry. You're not there yet!</p>
              </div>
              <div className="modal-footer">
               
                <button
                  {...props}
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  style={{width: "100vw"}}
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
