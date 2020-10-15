import React from "react";

import ComponentFive from "../../components/ComponentFive";
import ComponentFour from "../../components/ComponentFour";
import ComponentOne from "../../components/ComponentOne";
import ComponentThree from "../../components/ComponentThree";
import ComponentTwo from "../../components/ComponentTwo";

const Landing: React.FC = () => {
  return (
    <div className="container">
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
    </div>
  );
};

export default Landing;
