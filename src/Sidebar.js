import React from "react";

const Sidebar = props => {
  const clearAuthor = () => {
    props.clearAuthor();
  };
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button onClick={clearAuthor}>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;
