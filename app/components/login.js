import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity
} from 'react-native';


//Animation and Gradient Library
import LinearGradient from 'react-native-linear-gradient';
import Animation from 'lottie-react-native';

var {height, width} = Dimensions.get('window');
export default class LoginScreen extends Component {
    static navigationOptions = {
    title: 'Welcome',
    header: null
  };

   constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    }

   componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
              <View style={styles.container}>
                 <View style={styles.animationContainer}>
                    <Animation
                        ref={animation => { this.animation = animation; }}
                        loop={true}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        source={require('../assets/animation/logo.json')}
                        />
                </View>

                <View style={styles.theScroll}>
                    <Text style={styles.loginText}>USERNAME</Text>
                    <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCorrect={false}
                    style={styles.loginInput}
                    onChangeText={(username) => {
                        this.setState({username});
                    }}>
                    </TextInput>
                    <Text style={styles.loginText}>PASSWORD</Text>
                     <TextInput
                     underlineColorAndroid='rgba(0,0,0,0)'
                     autoCorrect={false}
                     secureTextEntry={true}
                    style={styles.loginInput}
                    onChangeText={(password) => {
                        this.setState({password});
                    }}>
                    </TextInput>
                    
                    <TouchableOpacity onPress={this.props.login.bind(this)}>
                        <View style={styles.loginButton} >
                          <Text style={styles.loginButtonText}>LOG IN</Text>
                        </View>

                    </TouchableOpacity>
                
                   
                </View>

              </View>
    )
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  animationContainer: {
      alignSelf: 'center',
      paddingTop:25,
  },

  loginText: {
    fontSize: 10,
    marginTop: 10,
    color: '#fff',

  },
  loginButtonText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#212121',

  },

 loginButton: {
  padding:10,
  marginTop:30,
  marginBottom:10,
  backgroundColor: '#fff',
  borderRadius: 3.3,

  },
  loginInput: {
    padding:5,
    marginTop: 10,
        color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    	borderRadius: 3.3,

    height: 40,
  },

  theScroll: {
    padding: 30,
  },
});
