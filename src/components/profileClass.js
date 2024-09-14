import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State -> constructor bcz it 
    // called defua-lt first when class is created
    this.state = {
      userInfo: {
        name: "Dev Name",
        location: "Home Location",
      },
    };
    console.log("Child - Constructor" + this.props.name);
  }

  // best place to make api call in react class component
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("log event");
    }, 1000);
    console.log("Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }
  render() {
    const { count } = this.state;
    console.log("Child - render" + this.props.name); 
    return (
      <div>
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;