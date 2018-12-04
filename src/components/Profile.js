import React from "react";

function Profile({ profile, setAppState }) {
  return (
    <header className="tc pv4 pv4-ns">
      <img
        src={profile.avatar}
        className="br-100 pa2 ba b--black-10 h4 w4"
        alt="avatar"
      />
      <h1 className="f6 f3-ns fw6 mid-gray">{profile.username}</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <h1 className="f6 f2-ns fw6 mid-gray">{profile.name}</h1>
      <h2 className="f3 gray fw2 ttu tracked">{profile.location}</h2>
      <h1 className="f3 gray fw2 ttu tracked">{profile.age}</h1>
      <hr className="mw5 bb bw1 b--black-10" />
      <h2 className="f2 gray fw1 dib w-90 ttu tracked i">{`"${
        profile.description
      }"`}</h2>
      <br />
      <a
        onClick={() => {
          setAppState("UserLikePage");
        }}
        className="f3 grow link dim br4 ba ph4 pv2 mb2 mid-gray"
      >
        Back
      </a>
    </header>
  );
}

export default Profile;
