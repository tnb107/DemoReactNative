import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'firebase';
import { loginSuccess } from '../../actions/Authenticate';

const config = {
    apiKey: "AIzaSyCKofaz7wketFoPaqGqV2JQPJd0txaABow",
    authDomain: "chat-4d1df.firebaseapp.com",
    databaseURL: "https://chat-4d1df.firebaseio.com",
    projectId: "chat-4d1df",
    storageBucket: "chat-4d1df.appspot.com",
    messagingSenderId: "137888917772"
};
firebase.initializeApp(config);
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        animating: false,
        error: null
    }
    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error: null
            })
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if(result.isCancelled){
                throw new Error('Please login before')
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credentail = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credentail);
            // firebase.database().ref(`/users/${user.uid}/profile`).set({
            //     name: user.displayName,
            //     email: user.email,
            //     avatar: user.photoURL
            // })
            this.setState({
                logged: true,
                animating: false
            })
            this.props.loginSuccess(user);

        } catch (error) {
            console.log(error.message);
            this.setState({
                logged: false,
                animating: false,
                error: error.message
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, color: 'red' }}> Login Screen </Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    color="#3B5998"
                    size="large" />
                {this.state.error ? <Text style = {styles.error} > {this.state.error}</Text> : null}
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: '#3B5998',
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: 'white' }} >
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        logged: state.authentication.loggedIn,
        user: state.authentication.user
    };
};

const styles = {
    error:{
        color: 'red',
        fontSize: 14,
    }
}
export default connect(mapStateToProps, { loginSuccess })(Login);