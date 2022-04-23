import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Thaywo" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src={logoSource} alt="Thaywo" />
      </Link>
    </div>
  );
}

export default Logo;
