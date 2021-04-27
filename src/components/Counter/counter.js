import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

class Counter extends Component {
  state = {
    counters: [
      {
        icon: "ti-timer",
        end: "24/7",
        postfix: "24/7",
        isPostfix: true,
        title: "Super Fast service",
      },
      { icon: "ti-briefcase", end: 548, title: "Completed Orders" },
      { icon: "ti-user", end: 245, title: "No. of Clients" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-lightgray funfacts">
          <Container>
            <Row className="text-center">
              <CounterBox counters={this.state.counters} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Counter;
