/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCKofaz7wketFoPaqGqV2JQPJd0txaABow",
  authDomain: "chat-4d1df.firebaseapp.com",
  databaseURL: "https://chat-4d1df.firebaseio.com",
  projectId: "chat-4d1df",
  storageBucket: "chat-4d1df.appspot.com",
  messagingSenderId: "137888917772"
};
firebase.initializeApp(config);
export default class demo2 extends Component {
  state = {
    logged: false,
    animating: false
  }
  handleLogin = () => {
    if (!this.state.logged) {
      LoginManager.logInWithPublishPermissions(['publish_actions']).then(
        (result) => {
          if (result.isCancelled) {
            alert('Cancel login');
          }
          else {
            this.setState({ logged: true });
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                alert(data.accessToken.toString());
              }
            );
          }
        })
        .catch(error => console.log(error))
    } else {
      this.setState({ logged: false });
      LoginManager.logOut();
    }
  }

  onLogin = async () => {
    try {
      this.setState({
        animating: true
      })
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      const tokenData = await AccessToken.getCurrentAccessToken();
      const token = tokenData.accessToken.toString();
      const credentail = firebase.auth.FacebookAuthProvider.credential(token);
      const user = await firebase.auth().signInWithCredential(credentail);
      firebase.database().ref(`/users/${user.uid}/profile`).set({
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL
      })
      this.setState({
        logged: true,
        animating: false
      })
    } catch (error) {
      console.log(error.message);
      this.setState({
        logged: false,
        animating: true
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <ActivityIndicator
          animating={this.state.animating}
          color="#ddd"
          size="large" />

        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")} />
        <TouchableOpacity
          onPress={this.onLogin}
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: 'green',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white' }} >
            {this.state.logged ? "Đăng xuất" : "Đăng nhập"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo2', () => demo2);
