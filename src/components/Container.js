import React from "react";

const style = {
  background: " center"
};

const Container = ({ children }) => (
  <React.Fragment>
    <article className="mw5 mw6-ns center ba pv4 pt4 shadow-5-l bg-washed-red">
      <div className="aspect-ratio aspect-ratio--3x4 mb3">{children}</div>
    </article>
  </React.Fragment>
);

export default Container;
