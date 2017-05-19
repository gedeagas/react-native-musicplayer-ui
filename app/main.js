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
  TouchableOpacity,
  Platform,
  LayoutAnimation,
  Animated,
  UIManager
} from 'react-native';

//Import Navigator
import { StackNavigator } from 'react-navigation';


//Import Another Screen 
import DetailScreen from './components/detail';
import DetailPScreen from './components/detailP';
import LoginScreen from './components/login';
import Home from './home';

const {height, width} = Dimensions.get('window');
const albumSize = width*0.75;
const albumRounded = albumSize/2;


export default class Main extends Component {
   constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      drawerState: false,
      drawerAnim: new Animated.Value(0),   
      drawerOpacity: new Animated.Value(0),        // Initial value for opacity: 0
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  static navigationOptions = {
    title: 'Home',
    header: null
  };
  

  componentDidMount() {
    
  }

  login(){
    console.log("logging in... ");
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
        loggedIn: true,
        loading: false
    });
   }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  doAnimation(){
    if(this.state.drawerState === false){
         Animated.timing(                            
              this.state.drawerAnim,                      
              {
                duration: 600,
                toValue: height,
              }
          ).start()
          
        this.setState({drawerState: true});
 
    } else {
         Animated.timing(                            
              this.state.drawerAnim,                      
              {
                duration: 600,
                toValue: 0,
              }
          ).start()
       
        this.setState({drawerState: false});
    
    }
  }
  render() {
     if(this.state.loggedIn === true){
        return (
          <View style={styles.container}>
            <Home navigation={this.props.navigation}>
            </Home>
               

            <Animated.View                           
            style={{
              zIndex:901,
              marginBottom:0,
              bottom: 0,
              backgroundColor:'#222222',
                    justifyContent: 'flex-start',

              height: this.state.drawerAnim,          
            }}>
              <View style={styles.popupContainer1}>
                <TouchableOpacity onPress={this.doAnimation.bind(this)}>
                  <View style={{padding: 15}}>
                        <Image
                        style={styles.upArrow}
                        source={require('./assets/down-arrow.png')}
                        />
                   </View>
                </TouchableOpacity>
              </View>

              <View style={styles.popupContainer2}>
                    <Image
                      style={{height:albumSize,width:albumSize,alignSelf:'center',borderRadius:10}}
                      source={require('./assets/imagine.jpg')}
                    />
                   <Text style={styles.popupTextTitle}>Thunder</Text>
                  <Text style={styles.popupTextYear}>Imagine Dragons</Text>


              </View>

              <View style={styles.popupContainer3}>

              </View>

                
            </Animated.View>


            <View style={styles.absoluteBottom}>
              <TouchableOpacity onPress={this.doAnimation.bind(this)}>
              <View style={{marginLeft: 15 }}>
                   <Image
                      style={styles.upArrow}
                      source={require('./assets/up-arrow.png')}
                    />
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.doAnimation.bind(this)}>
              <View style={{alignItems: 'center' }}>
                 <Text style={styles.playerTextTitle}>Thunder</Text>
                 <Text style={styles.playerTextYear}>Imagine Dragons</Text>

              </View>
              </TouchableOpacity>

              <View style={{marginRight: 15 }}>
                 <Image
                      style={styles.playArrow}
                      source={require('./assets/play-arrow.png')}
                    />
              </View>
                     
            </View>
          </View>
                
                 

                
        );
      } else {
            return (
            <LoginScreen login={this.login.bind(this)}>
            </LoginScreen>
            
            );
     }
  }
}

const styles = StyleSheet.create({
  absoluteBottom: {
      zIndex:900,
      position: 'absolute',
      width:width,
      height:55,
      bottom: 0,
      backgroundColor:'#222222',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center' 

  },

  playerTextTitle: {
    fontFamily:'Raleway-Bold',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff'
  },
  playerTextYear: {
    fontFamily:'Raleway-Regular',
    fontSize: 13,
    fontWeight: '100',
    color: '#fff'
  },

   popupTextTitle: {
    fontFamily:'Raleway-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginTop:16,
  },
  popupTextYear: {
    fontFamily:'Raleway-Regular',
    fontSize: 13,
    color: '#fff',
    alignSelf: 'center'

  },

  upArrow: {
    width:20,
    height:20,
  },

  playArrow: {
     width:27,
    height:27,
  },
  popupContainer1: {
    zIndex:1,
  },
  popupContainer2: {
    zIndex:5,
    marginTop:30
  },
  popupContainer3: {
    zIndex:3,
  },
   container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const bccMusic = StackNavigator({
  Main: { screen: Main },
  Home: { screen: Home },
  Login: { screen: LoginScreen},
  Detail: {screen: DetailScreen},
  DetailP: {screen: DetailPScreen}
});

AppRegistry.registerComponent('bccMusic', () => bccMusic);