import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var {height, width} = Dimensions.get('window');
export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(7, 45, 64, 0.5)"
          translucent={true}
          barStyle="light-content"
        />
        <ScrollView
        showsVerticalScrollIndicator={false}
        >   


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
                      

                      <View>
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
                      </View>

                      <View>
                          <Image
                          style={styles.albumScrollImg}
                          source={require('./assets/3.jpg')}
                          />
                          <View style={styles.albumTextContainer}>
                            <View>
                              <Text style={styles.albumTextTitle}>Beauty Behind</Text>
                              <Text style={styles.albumTextYear}>2015</Text>
                            </View>

                            <View>
                              
                            </View>
                
                          </View>
                      </View>

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
                      <Text style={styles.albumTextTitle}>Sign Of Times</Text>
                      <Text style={styles.albumTextYear}>2017</Text>
                    </View>
                  </View>

                  <View style={styles.smallAlbumContainer}>
                    <Image
                      style={styles.smallAlbum}
                      source={require('./assets/paramore.png')}
                    />
                    <View style={styles.smallAlbumTextContainer}>
                      <Text style={styles.albumTextTitle}>Told You So</Text>
                      <Text style={styles.albumTextYear}>2017</Text>
                    </View>
                  </View>
                  

                </View>


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
  },
  smallAlbumContainer: {
        marginLeft:10,
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom: 14,
  }
});