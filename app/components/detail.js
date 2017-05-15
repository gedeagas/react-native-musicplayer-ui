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
  TouchableWithoutFeedback
} from 'react-native';


//Animation and Gradient Library
import LinearGradient from 'react-native-linear-gradient';
import Animation from 'lottie-react-native';

var {height, width} = Dimensions.get('window');
export default class DetailScreen extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  componentDidMount() {
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
       
         <StatusBar
          backgroundColor="rgba(7, 45, 64, 0.5)"
          hidden={true}
          barStyle="light-content"
        />
        <ScrollView
        showsVerticalScrollIndicator={false}
        >  

            <Image
                style={styles.headerImg}
                source={require('../assets/weekendcover.jpg')}
            />

            <LinearGradient
            locations={[0.1,0.45,1]}
            colors={['rgba(7, 45, 64, 0)', '#203053', '#203053']}
            style={styles.linearGradient}>
              <View style={styles.topMenuContainer}>
                <TouchableWithoutFeedback 
                  onPress={() => goBack()}>
                  <View>
                    <Image
                    style={styles.backbutton}
                    source={require('../assets/return.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              



              <View style={styles.detailTitleContainer}>
                <View>
                  <Text style={styles.detailTitle}>Starboy</Text>
                  <Text style={styles.detailSubTitle}>The Weekend</Text>
                </View>
                <View style={styles.detailPlayButtonContainer}>
                      <View style={styles.detailPlayButton}>
                        <Image
                            style={styles.detailPlayButtonIcon}
                            source={require('../assets/video.png')}
                        />
                      </View>

                </View>
              </View>

            </LinearGradient>

            <View style={styles.detailContainer}>

            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203053',
    zIndex:1,
  },
  headerImg:{
    height:400,
    width:width,
    zIndex: 0,
  },
   linearGradient: {
     marginTop:-400,
      height:height,
      width: width,
      zIndex: 10,
      flex: 1,

  },
  detailContainer: {
    marginTop: -320,
    zIndex:90,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',

  },
  detailTitleContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  detailTitle: {
     fontFamily:'Raleway-ExtraBold',
      fontSize: 20,
      color: '#fff',
      paddingTop: 150,
      paddingBottom: 5,
      marginLeft: 10,
      zIndex:99,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',


  },
  detailSubTitle: {
     fontFamily:'Raleway-Regular',
      fontSize: 13,
      color: '#fff',
      marginLeft: 10,
      paddingBottom: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.0)',


  },
  detailPlayButton: {
    height:55,
    width:55,
    borderRadius:27.5,
    backgroundColor:'#D90850',
  },
  detailPlayButtonContainer: {
    paddingTop: 150,
    paddingBottom: 5,
    marginRight: 10,
  },
  detailPlayButtonIcon: {
    height:22,
    width:22,
    marginTop:16,
    marginLeft:18,
  },
  topMenuContainer: {
          paddingTop:20,
          zIndex:99,
           flexDirection:'row',
    justifyContent: 'space-between',
  },

  backbutton: {
     height:32,
    width:32,
        marginLeft: 15,

  }
});