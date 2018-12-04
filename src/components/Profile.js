import React from "react";

function Profile({ avatar, username, description, location, name, age }) {
  return (
    <header className="tc pv4 pv4-ns">
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="br-100 pa2 ba b--black-10 h4 w4"
        alt="avatar"
      />
      <h1 className="f6 f3-ns fw6 mid-gray">bomberman45</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <h1 className="f6 f2-ns fw6 mid-gray">Rohan Nobis</h1>
      <h2 className="f3 gray fw2 ttu tracked">Boston</h2>
      <h1 className="f3 gray fw2 ttu tracked">28</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <br />
      <h2 className="f2 gray fw2 ttu tracked i">"In this small blue dot..."</h2>
      <br />
      <a className="f3 grow link dim br4 ba ph4 pv2 mb2 mid-gray" href="#0">
        Back
      </a>
    </header>
  );
}

/*
Test Profile
*/

/*
    <header className="tc pv4 pv4-ns">
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="br-100 pa2 ba b--black-10 h4 w4"
        alt="avatar"
      />
      <h1 className="f6 f3-ns fw6 mid-gray">bomberman45</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <h1 className="f6 f2-ns fw6 mid-gray">Rohan Nobis</h1>
      <h2 className="f3 gray fw2 ttu tracked">Boston</h2>
      <h1 className="f3 gray fw2 ttu tracked">28</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <br />
      <h2 className="f2 gray fw2 ttu tracked i">"In this small blue dot..."</h2>
      <br />
      <a className="f3 grow link dim br4 ba ph3 pv2 mb2 dib mid-gray" href="#0">
        Back
      </a>
    </header>
*/

export default Profile;
