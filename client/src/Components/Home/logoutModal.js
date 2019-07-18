import React from "react";
import "./style.css";



function LogoutModal(props) {
  return (
    <div className="container">
      <div className="align-modal">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            {/* {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.changeGear()}  
            > 
              <span aria-hidden="true">&times;</span>
            </button> */}
            <div className="modal-content text-white text-center d-flex mx-auto justify-content-center">
              <h2>Log Out</h2>
              <div className="modal-body text-center">
                <p>Are you sure you want to stop playing?</p>
                <button
                  {...props}
                  type="button"
                  className="btn modalBtn btn-primary mt-2"
                  data-dismiss="modal"
                  // style={{width: "100vw"}}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogoutModal;
