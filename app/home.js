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

} from 'react-native';

//Import Navigator
import { StackNavigator } from 'react-navigation';


//Animation and Gradient Library
import LinearGradient from 'react-native-linear-gradient';
import Animation from 'lottie-react-native';

//Import Another Screen 
import DetailScreen from './components/detail';
import DetailPScreen from './components/detailP';

var {height, width} = Dimensions.get('window');
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };
  componentDidMount() {
    this.animation.play();
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(7, 45, 64, 0.5)"
          hidden={true}
          barStyle="light-content"
        />
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom:55}}
        >   
            <View style={styles.animationContainer}>
               <Animation
                  ref={animation => { this.animation = animation; }}
                  loop={true}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require('./assets/animation/logo.json')}
                />
            </View>

            <Image
              style={styles.headerImg}
              source={require('./assets/weekend.jpg')}
            />
            
            <LinearGradient
            locations={[0.1,0.6,1]}
            colors={['rgba(7, 45, 64, 0)', '#072C3E', '#072C3E']}
            style={styles.linearGradient}>
             
            </LinearGradient>

             <View style={styles.albumContainer}>
                  
                  <Text style={styles.homeSideTitle}>T R E N D I N G</Text>
                  <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.albumScrollContainer}>
                      

                      <TouchableOpacity onPress={() =>
                        navigate('Detail', { name: 'Jane' })
                      }>
                          <Image
                          style={styles.albumScrollImg}
                          source={require('./assets/2.png')}
                          />
                          <View style={styles.albumTextContainer}>
                            <View>
                              <Text style={styles.albumTextTitle}>Starboy</Text>
                              <Text style={styles.albumTextYear}>2016</Text>
                            </View>

                            <View>
                              <Image
                              style={styles.albumExpli}
                              source={require('./assets/expli.jpg')}
                              />
                            </View>
                
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() =>
                        navigate('DetailP', { name: 'Jane' })
                      }>
                          <Image
                          style={styles.albumScrollImg}
                          source={require('./assets/paramore.png')}
                          />
                          <View style={styles.albumTextContainer}>
                            <View>
                              <Text style={styles.albumTextTitle}>After Laughter</Text>
                              <Text style={styles.albumTextYear}>2015</Text>
                            </View>

                            <View>
                              
                            </View>
                
                          </View>
                      </TouchableOpacity>

                      <View>
                          <Image
                          style={styles.albumScrollImg}
                          source={require('./assets/1.png')}
                          />
                          <View style={styles.albumTextContainer}>
                            <View>
                              <Text style={styles.albumTextTitle}>Lust for Life</Text>
                              <Text style={styles.albumTextYear}>2017</Text>
                            </View>

                            <View>
                             
                            </View>
                
                          </View>
                      </View>
                     
                  </ScrollView>
                <Text style={styles.homeSideTitle}>L A T E S T  R E L E A S E S</Text>

                <View>
                  <View style={styles.smallAlbumContainer}>
                    <Image
                      style={styles.smallAlbum}
                      source={require('./assets/harry.png')}
                    />
                    <View style={styles.smallAlbumTextContainer}>
                      <View style={styles.smallAlbumRow}>
                          <View style={{zIndex:5}}> 
                          <Text style={styles.albumTextTitle}>Sign Of Times </Text>
                          <Text style={styles.albumTextYear}>Harry Styles</Text>
                          </View> 
                          <View style={{zIndex:1}}>
                            <Text style={styles.trackRuntimeStyle}>4.25</Text>
                          </View>        
                      </View>
                    </View>
                  </View>

                  <View style={styles.smallAlbumContainer}>
                    <Image
                      style={styles.smallAlbum}
                      source={require('./assets/paramore.png')}
                    />
                    <View style={styles.smallAlbumTextContainer}>
                      <View style={styles.smallAlbumRow}>
                          <View style={{zIndex:5}}> 
                          <Text style={styles.albumTextTitle}>Told You So </Text>
                          <Text style={styles.albumTextYear}>Paramore</Text>
                          </View> 
                          <View style={{zIndex:1}}>
                            <Text style={styles.trackRuntimeStyle}>4.25</Text>
                          </View>        
                      </View>
                    </View>
                  </View>

                  <View style={styles.smallAlbumContainer}>
                    <Image
                      style={styles.smallAlbum}
                      source={require('./assets/imtheone.jpg')}
                    />
                    <View style={styles.smallAlbumTextContainer}>
                       <View style={styles.smallAlbumRow}>
                          <View style={{zIndex:5}}> 
                          <Text style={styles.albumTextTitle}>I'm The One </Text>
                          <Text style={styles.albumTextYear}>DJ Khaled</Text>
                          <Image
                                  style={styles.albumExpli}
                                  source={require('./assets/expli.jpg')}
                                  />
                          </View> 
                          <View style={{zIndex:1}}>
                            <Text style={styles.trackRuntimeStyle}>4.25</Text>
                          </View>        
                      </View>
                    </View>
                  </View>

                 
    
                </View>

                <Text style={styles.homeSideTitle}>R E C E N T L Y  P L A Y E D</Text>
                 <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.albumScrollContainer}>
                      

                      <TouchableOpacity onPress={() =>
                        navigate('Detail', { name: 'Jane' })
                      }>
                          <Image
                          style={styles.roundedScrollImg}
                          source={require('./assets/bruno.jpg')}
                          />
                          <View style={styles.albumTextContainerCenter}>
                            <View>
                              <Text style={styles.albumTextTitle}>Bruno Mars</Text>
                            </View>

                            <View>
                             
                            </View>
                
                          </View>
                      </TouchableOpacity>

                      <View>
                          <Image
                          style={styles.roundedScrollImg}
                          source={require('./assets/ed.jpg')}
                          />
                          <View style={styles.albumTextContainerCenter}>
                            <View>
                              <Text style={styles.albumTextTitle}>Ed Sheeran</Text>
                            </View>

                            <View>
                              
                            </View>
                
                          </View>
                      </View>

                      <View>
                          <Image
                          style={styles.roundedScrollImg}
                          source={require('./assets/cr.jpg')}
                          />
                          <View style={styles.albumTextContainerCenter}>
                            <View>
                              <Text style={styles.albumTextTitle}>Charlie Puth</Text>
                            </View>

                            <View>
                             
                            </View>
                
                          </View>
                      </View>
                     
                  </ScrollView>

                <Text style={styles.homeSideTitle}>R E C O M E N D E D</Text>



              </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#072C3E',
  },
  headerImg:{
    height:400,
    width:width,
    zIndex: 0,
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
  linearGradient: {
     marginTop:-400,
      height:height,
      width: width,
      zIndex: 10,
          flex: 1,

  },


  homeText: {
      fontFamily:'Raleway-Bold',
      fontSize: 18,
      color: '#fff',
      paddingBottom: 30,
      marginLeft: 10,
  },
  homeSideTitle: {
     fontFamily:'Raleway-Bold',
      fontSize: 14,
      color: '#fff',
      paddingTop: 20,
      paddingBottom: 20,
            marginLeft: 10,

  },
  homeBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height:1,
      marginLeft: 10,
      marginRight: 10,
  },
  albumScrollContainer:{
  },
  albumContainer: {
    marginTop: -400,
    zIndex:90,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',

  },
  albumScrollImg: {
    height: 156,
    width:156,
    marginLeft: 10,
    borderRadius: 7,
  },
  roundedScrollImg: {
    height: 156,
    width:156,
    marginLeft: 10,
    borderRadius: 78,
  },
   albumTextContainerCenter: {
    flexDirection:'row',
    justifyContent: 'center',
    alignContent:'center',
        marginLeft: 11,
        marginTop: 10,

  },
  albumTextContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignContent:'center',
        marginLeft: 11,
        marginTop: 10,

  },

  albumExpli: {
    height: 17.5,
    width:17.5,
    marginRight: 2,

  },
  albumTextTitle: {
    fontFamily:'Raleway-Bold',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff'
  },
  albumTextYear: {
    fontFamily:'Raleway-Light',
    fontSize: 13,
    fontWeight: '100',
    color: '#fff'
  },

  smallAlbum: {
    width:80,
    height:80,
    borderRadius:7,
  },

  smallAlbumTextContainer: {
    marginLeft:15,
    alignSelf:'center',
    flex:5,
  },
  smallAlbumContainer: {
        marginLeft:10,
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom: 14,
  },

  animationContainer: {
      zIndex:90,
      alignSelf:'center',
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      marginTop:0,
      position:'absolute'

  },


   trackRuntimeStyle: {
    fontFamily:'Raleway-Regular',
      fontSize: 15,
      color: '#fff',
  },

  smallAlbumRow:{
    
    flexDirection:'row',
    justifyContent: 'space-between',
    marginRight: 15,
  
  }
});


