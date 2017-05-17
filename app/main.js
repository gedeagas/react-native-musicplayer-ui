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
import Home from './home';

var {height, width} = Dimensions.get('window');
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
     if(this.state.loggedIn === false){
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
              height: this.state.drawerAnim,          
            }}>
              
                <TouchableOpacity onPress={this.doAnimation.bind(this)}>
                  <View style={{padding: 15}}>
                        <Image
                        style={styles.upArrow}
                        source={require('./assets/down-arrow.png')}
                        />
                   </View>
                </TouchableOpacity>
             
                
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
                      style={styles.upArrow}
                      source={require('./assets/play-arrow.png')}
                    />
              </View>
                     
            </View>
          </View>
                
                 

                
        );
      } else {
            return (
            <View>
                <Home navigation={this.props.navigation}>
                </Home>

                <View style={styles.absoluteBottom}>
                </View>
            </View>
            
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

  upArrow: {
    width:20,
    height:20,
  },
   container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const bccMusic = StackNavigator({
  Main: { screen: Main },
  Home: { screen: Home },
  Detail: {screen: DetailScreen},
  DetailP: {screen: DetailPScreen}
});

AppRegistry.registerComponent('bccMusic', () => bccMusic);