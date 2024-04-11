import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + " constructor");
    this.state = {
      score: 1,
    };
  }
  componentDidMount() {
    //console.log(this.props.name + " component did mount");
  }
  render() {
    //  console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <h2>Name: {this.props.name} </h2>
        <h2>Location: {this.props.location} </h2>
        <h2>Score: {this.state.score}</h2>
        <button
          onClick={() => {
            this.setState({
              score: this.state.score + 1,
            });
          }}
        >
          increase
        </button>
      </div>
    );
  }
}

export default UserClass;
