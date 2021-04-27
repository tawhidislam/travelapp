import React, { Component, Suspense } from "react";
import PopularFlights from "../components/PopularFlights/PopularFlights";
import Popularhotels from "../components/PopularHotels/Popularhotels";
const NavbarPage = React.lazy(() => import("../components/Navbar/Navbar_Page"));
const Section = React.lazy(() => import("../components/SearchBarSec/section"));

const Services = React.lazy(() => import("../components/Services/services"));

const Counter = React.lazy(() => import("../components/Counter/counter"));

const Footer = React.lazy(() => import("../components/Footer/footer"));

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "home", navheading: "Flights" },

        { id: 3, idnm: "home", navheading: "Hotels" },
        { id: 4, idnm: "home", navheading: "Tours" },
        { id: 4, idnm: "home", navheading: "Login/Signup" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "",
    };
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">Loading...</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <NavbarPage
            navItems={this.state.navItems}
            navclassName={this.state.navClass}
          />
          <Section />

          <Counter />
          <PopularFlights />
          <Popularhotels />
          <Services isBgWhite={true} />
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default index;
