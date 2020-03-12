import React from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: null
    };
  }
  selectAuthor = author => {
    this.setState({
      currentAuthor: author
    });
  };
  clearAuthor = () => {
    this.setState({
      currentAuthor: null
    });
  };
  currentPage = () => {
    if (this.state.currentAuthor !== null) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return <AuthorList authors={authors} selectAuthor={this.selectAuthor} />;
    }
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar clearAuthor={this.clearAuthor} />
          </div>
          <div className="content col-10">{this.currentPage()}</div>
        </div>
      </div>
    );
  }
}

export default App;
