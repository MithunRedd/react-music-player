import React from "react";
import { FcMusic } from "react-icons/fc";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>Music</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FcMusic size="12" />
        Library
      </button>
    </nav>
  );
};

export default Nav;
