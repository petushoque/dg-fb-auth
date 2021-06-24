import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from 'react-router-dom';
import './Facebook.css'

export default function Facebook (props) {
  
  const responseFacebook = response => {
    console.log(response);
    props.handleUserInfo(response)
  };

  const componentClicked = () => console.log("clicked");

    return (
      props.isLoggedIn ? <Redirect to='/'/> :
      <div className='facebook facebook__logout'>
          <FacebookLogin
            appId="342310250698628"
            autoLoad={true}
            fields="name,email,picture"
            onClick={() => componentClicked()}
            callback={responseFacebook}
          />
        </div>
    )
}


      /*fbContent = (
        <div className='facebook facebook__login'>          
          <h2 className='facebook__name'>{this.state.name}</h2>
          <Link to='/profile'>
            <img className='facebook__picture' src={this.state.picture} alt={this.state.name} />
          </Link>
        </div>


 constructor (props) {
    super(props)
    this.handleUserInfo = props.handleUserInfo
    this.isLoggedIn = props.isLoggedIn
  }

  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

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

    if (this.isLoggedIn) {
      <Redirect to='/'/>
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


      );*/