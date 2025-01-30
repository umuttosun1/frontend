import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <div>
        <Link style={{ margin: "10px" }} to="company">
          Company
        </Link>
        <Link style={{ margin: "10px" }} to="worker">
          Worker
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default About;
