import React from "react";

function UserLike({ name, age, location, avatar }) {
  return (
    <React.Fragment>
      <article className="mw5 center bg-white br4 pa3 pa3-ns mv2 ba b--black-10">
        <div className="tc">
          <img
            // onClick={}
            src="http://tachyons.io/img/logo.jpg"
            className="br-100 pa2 grow pointer ba b--black-10 h4 w4"
            alt="avatar"
          />
          <h1 className="f3 mb2">Jay De Guzman</h1>
          <h2 className="f3 fw4 gray mt0">27</h2>
          <h2 className="f3 fw4 gray mt0">Chicago</h2>
        </div>
      </article>
      <header className="tc pv4 pv2-ns">
        <img
          //   onClick={}
          src="https://s3.amazonaws.com/mvp-jay-hrr34/like-dislike-icon-1.jpg"
          className="br-100 pa2 ph5 grow pointer pv4 fl b--black-10 h4 w4"
          alt="avatar"
        />
        <img
          //   onClick={}
          src="https://s3.amazonaws.com/mvp-jay-hrr34/like-dislike-icon-2+(1).jpg"
          className="br-100 pa2 ph5 grow pointer pv4 fr b--black-10 h4 w4"
          alt="avatar"
        />
      </header>
      <header className="tc pv1 pv1-ns">
        <img
          //   onClick={}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
          className="br-100 pa2 ph4 grow pointer pv1 center b--black-10 h4 w4"
          alt="avatar"
        />
      </header>
    </React.Fragment>
  );
}

export default UserLike;
