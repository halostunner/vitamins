import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home() {
  return (
    <div style={{ backgroundColor: 'gray'}}>
      <Hero backgroundImage="https://americanbonehealth.org/wp-content/uploads/2016/08/Vitamins-in-words-820x461.jpg">
        <p>Vitamin Overdose is a simple app to help you keep track of your vitamin intake</p>
        
      </Hero >
      <Container style={{  marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <h3>Vitamin Overdose is a simple app to help you keep track of your vitamin intake</h3>
          </Col>
        </Row>
        <Row>
          <Col  size="md-12">
            
            <p>
             Can You Really Overdose on Vitamin and Mineral Supplements?
             Is it possible to over-supplement? I see some vitamins and minerals with daily values of 1,000 percent or higher of the recommended daily allowance. Can it be dangerous to take this much on a daily basis?
            </p>
            <p>
            Too much vitamin C or zinc could cause nausea, diarrhea, and stomach cramps. Too much selenium could lead to hair loss, gastrointestinal upset, fatigue, and mild nerve damage.
            </p>
            <p>
            While most people aren't getting megadoses, if you eat a fortified cereal at breakfast, grab an energy bar between meals, have enriched pasta for dinner, and take a daily supplement, you could easily be over the recommended daily intake of a host of nutrients.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
