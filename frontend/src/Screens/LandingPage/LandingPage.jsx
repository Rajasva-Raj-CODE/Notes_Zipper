import {React,useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import Button from "react-bootstrap/Button";

const LandingPage = () => {
//   useEffect(()=>{
//     const userInfo = localStorage.getItem("userInfo");
//     if(userInfo){
//       history.push("/mynotes")
//     }
//  },[history])

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="into-text">
            <div>
              <h1 className="title">Welcome to Note Zipper </h1>
              <p className="subtitle">One Safe Place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">Login</Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton"variant="outline-primary" >SignUp</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
