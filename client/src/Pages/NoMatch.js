// import React, { Component } from "react";
// import { Col, Row, Container } from "../Components/Grid";
// import Button from "../Components/Button";

// class NoMatch extends Component {
//   clicked = () => {
//     return  this.props.history.push("/picpage");
// }
// render(){
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <div className="pt-5 pl-3 pr-1" style={{ color: "#0A2463" }}>
//             <p>
//               <span role="img" aria-label="Face With Rolling Eyes Emoji" style={{fontSize: "48px" }}>
//                 🙄
//               </span>
//             </p>
//             <h1>Sorry! this is not a "enter prop here from pic data"</h1>
//             <h1>Try out the next challenge by clicking next challenge</h1>
//           </div>
//         </Col>
//       </Row>
//       <Button onClick={this.clicked}>
//         Next Challenge
//       </Button>
//     </Container>
//   );
// }}

// export default NoMatch;

import React, { Component } from "react";
import Button from "../Components/Button";
// import { generateKeyPair } from "crypto";
import Opener from "../Components/Home/index"


class NoMatch extends Component {
  clicked = () => {
    return  this.props.history.push("/picpage");
}
render(){
  return (
    <>
    <div>
    <Opener>

    <p style={{marginTop: 90,fontSize: 50, color: "#0A2463", fontWeight: "bold"}}>
    NOT A MATCH
    </p>

    <p className="d-flex justify-content-center mt-4"style={{fontSize: 20, color: "white", fontWeight: "bold"}}>
    TRY AGAIN!🙄
    </p>


   
    </Opener>
    <Button onClick={this.clicked}>
    Next Challenge
    </Button>
    </div>
    </>
  );
}}

export default NoMatch;