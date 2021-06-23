import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import './Facebook.css'

export default class Facebook extends Component {
  
  constructor (props) {
    super(props)
    this.handleUserInfo = props.handleUserInfo
  }

  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });

    this.handleUserInfo(response)
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div className='facebook facebook__login'>
          <h2 className='facebook__name'>{this.state.name}</h2>
          <img className='facebook__picture' src={this.state.picture} alt={this.state.name} />
        </div>
      );
    } else {
      fbContent = (
        <div className='facebook facebook__logout'>
          <FacebookLogin
            appId="342310250698628"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}