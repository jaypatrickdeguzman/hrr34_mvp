import React from "react";

const style = {
  background: "url(http://mrmrs.github.io/photos/001.jpg) center"
};

const Container = ({ children }) => (
  <React.Fragment>
    <article className="mw5 mw6-ns center pt4">
      <div className="aspect-ratio aspect-ratio--3x4 mb4">
        <div className="aspect-ratio--object cover" style={style}>
          {children}
        </div>
      </div>
    </article>
  </React.Fragment>
);

export default Container;
