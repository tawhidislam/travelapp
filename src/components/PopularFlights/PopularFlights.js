import React from "react";
import DealCard from "../DealCard/DealCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function PopularFlights(props) {
  return (
    <>
      <h2
        style={{
          marginTop: "20px",
        }}
        className="d-flex justify-content-center"
      >
        Most Popular Flight Destinations
      </h2>
      <Tabs
        defaultActiveKey="Domestic"
        className="d-flex justify-content-center"
        id="uncontrolled-tab-example"
        style={{
          marginTop: "20px",
        }}
      >
        <Tab eventKey="Domestic" title="Domestic Flight's">
          <DealCard />
        </Tab>
        <Tab eventKey="International" title="International Flight's">
          <DealCard />
        </Tab>
      </Tabs>
    </>
  );
}

export default PopularFlights;
