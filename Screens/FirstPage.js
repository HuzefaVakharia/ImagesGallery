/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Alert, TouchableOpacity, Platform, PermissionsAndroid, Image, NativeModules, StatusBar, LogBox} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedGestureHandler, useAnimatedStyle, withDelay, } from 'react-native-reanimated';
import SliderItem from './SliderItem';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {
  notificationListener,
  requestUserPermission,
} from '../src/utils/notificationServices';

import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType} from 'react-native-google-mobile-ads';
import { SafeAreaView } from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');


const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const adUnitId2 = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId2, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});



const motivationlQuotes=[
  require('../images/inspiratonLine1.webp'),
  require('../images/inspiratonLine2.webp'),
  require('../images/inspiratonLine3.webp'),
  require('../images/inspiratonLine4.webp'),
  require('../images/inspiratonLine5.webp'),
  require('../images/inspiratonLine6.webp'),
  require('../images/inspiratonLine7.webp'),
  require('../images/inspiratonLine8.webp'),
  require('../images/inspiratonLine9.webp'),
  require('../images/inspiratonLine10.webp'),
  require('../images/inspiratonLine11.webp'),
  require('../images/inspiratonLine12.webp'),
  require('../images/inspiratonLine13.webp'),
  require('../images/inspiratonLine14.webp'),
  require('../images/inspiratonLine15.webp'),
  require('../images/inspiratonLine16.webp'),
  require('../images/inspiratonLine17.webp'),
  require('../images/inspiratonLine18.webp'),
  require('../images/inspiratonLine19.webp'),
  require('../images/inspiratonLine20.webp'),
  require('../images/inspiratonLine9.webp'),
  require('../images/inspiratonLine4.webp'),
  require('../images/inspiratonLine3.webp'),

  ]

  const fastFoodItems=[
    require('../images/food1.png'),
    require('../images/fastfood2.jpg'),
    require('../images/fastfood3.jpg'),
    require('../images/food4.png'),
    require('../images/food5.png'),
    require('../images/food6.png'),
    require('../images/fastfood7.jpg'),
    require('../images/fastfood8.jpg'),
    require('../images/food9.png'),
    require('../images/food10.png'),
    require('../images/fastfood11.jpg'),
    require('../images/food12.png'),
    require('../images/food13.png'),
    require('../images/fastfood14.jpg'),
    require('../images/fastfood15.jpg'),
    require('../images/food16.png'),
    require('../images/food17.png'),
    require('../images/food18.png'),
    require('../images/fastfood19.jpg'),
    require('../images/food20.png'),
    require('../images/food21.png'),
    require('../images/food22.png'),
    require('../images/food23.png'),
    

    ]



  


    const bikeImages=[
        require('../images/bike1.jpg'),
        require('../images/bike2.jpg'),
        require('../images/bike3.jpg'),
        require('../images/bike4.jpg'),
        require('../images/bike5.jpg'),
        require('../images/bike6.jpg'),
        require('../images/bike7.jpg'),
        require('../images/bike8.jpg'),
        require('../images/bike9.jpg'),
        require('../images/bike10.jpg'),
        require('../images/bike11.jpg'),
        
        require('../images/bike13.jpg'),
        require('../images/bike14.jpg'),
        require('../images/bike15.jpg'),
        require('../images/bike16.jpg'),
        require('../images/bike17.jpg'),
        require('../images/bike18.jpg'),
        require('../images/bike19.jpg'),
        require('../images/bike20.jpg'),
        require('../images/bike21.jpg'),
        require('../images/bike16.jpg'),
        require('../images/bike18.jpg'),
        require('../images/bike5.jpg'),
        require('../images/bike6.jpg'),
        ]





    

















const FirstPage = ({navigation}) => {

  useEffect(() => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res+++++', res);
          if (!!res && res == 'granted') {
            requestUserPermission();
            notificationListener();
          }
        })
        .catch(error => {
          alert('something wrong');
        });
    } else {
    }
  }, []);

  useEffect(() => {
    LogBox.ignoreAllLogs();
}, []);

   



   
   useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });


    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      interstitial.load();
      //Alert.alert('Second Time interstitial ad called')
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return ()=>{
      unsubscribe();
      unsubscribeClosed();
    };
  }, []); 


 

const [currentIndex,setCurrentIndex]=useState(0);
const [ourChoiceForImage,setourChoiceForImage]=useState('1');
const [loaded, setLoaded] = useState(false);
const [loaded3, setLoaded3] = useState(false);



















const checkSwitch=(param)=>{

  switch(param) {

    case '1':

      One();

      break;

    case '2':

      Two();

      break;

      case '3':

      Three();

      break;

      

      

    

    default:

      Alert.alert("NUMBER NOT FOUND");

    }

}







 const One=()=>{

  
  setourChoiceForImage('1');
  

}

const Two=()=>{

  
  setourChoiceForImage('2');
}


const Three=()=>{

 
  setourChoiceForImage('3');
}









if (!loaded) {
  
  
  return(
    <SafeAreaView style={styles.centerText}>
     
<View style={styles.centerText}>
<Image 
      
      source={require('../images/car7.jpg')}
      resizeMode="center"
      
        style={{width:responsiveWidth(100),height:responsiveHeight(100)}}
        
      />
 


  </View>
  </SafeAreaView>
  )
}



return (
  <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  
  colors={['#edc967', '#f7ef8a', '#d2ac47']}
  
  style={styles.linearGradient}>
<SafeAreaView style={styles.container}>
<StatusBar backgroundColor="#edc967" barStyle={'light-content'} />








<View style={styles.container}>


<BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />



<Text style={{color:'blue', textAlign:'center', fontSize:responsiveFontSize(2.5), fontFamily:'Wolfalcon', marginTop:responsiveHeight(6)}}>Super Images</Text>










  <View style={{marginTop:responsiveHeight(10),}}>
  <Text style={{color:'blue', textAlign:'center', fontSize:responsiveFontSize(2.5), fontFamily:'Ephesis-Regular'}}>Select Your Favourite Image Topic</Text>
    
    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>

    



    
    
    
    
    
    
    <LinearGradient 
    
    colors={['#012B70', '#0EABC4', '#07629B']} 
    style={styles.linearGradientForButton}
    >
     <TouchableOpacity onPress={()=>checkSwitch('1')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Inspiration</Text>

</TouchableOpacity>
</LinearGradient>










 <LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForButton}>
<TouchableOpacity onPress={()=>checkSwitch('2')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Food</Text>

</TouchableOpacity>
</LinearGradient>










<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForButton}>

<TouchableOpacity onPress={()=>checkSwitch('3')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Bike</Text>

</TouchableOpacity>
</LinearGradient>



</View>
    
    












        
  </View>
  <View style={{
    
    marginLeft:60,
    marginRight:60,
    
    
    }}>
    
    
    
    
    
    
    
     <FlatList
     horizontal
     onScroll={e=>{
      const X=e.nativeEvent.contentOffset.x;
      
      console.log((X/300).toFixed(0));
      setCurrentIndex((X/300).toFixed(0));
      
     }}


     
      
        
        data={ourChoiceForImage=='1'?motivationlQuotes
        :ourChoiceForImage=='2'?fastFoodItems
        :ourChoiceForImage=='3'?bikeImages        
        :null}
        renderItem={({item,index})=>{
          return(
            
            <SliderItem image={item} index={index} currentIndex={currentIndex}/>
          )
        }}
     />


<View style={{flex:1, alignItems:'center'}}>
<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForNextButton}>
<TouchableOpacity onPress={()=>{
  interstitial.show();
navigation.navigate('SecondPage');}} 
activeOpacity={0.6} 
style={styles.buttonTextForNextbtn} >

<Text style={styles.TextStyleForNextbtn}>Next</Text>

</TouchableOpacity>
</LinearGradient>
</View>



     
     </View>
     
     </View>
     
     </SafeAreaView>
     </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  centerText: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
  button: {
    width: '30%',
    padding: 8,
    backgroundColor: '#8b7cdf',
    borderRadius:responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    margin:responsiveHeight(0.7),


  },
  linearGradient: {
    flex: 1,
    
  },
  linearGradientForButton: {
   
    borderRadius: 5,
    marginRight:responsiveWidth(2),
  },
  linearGradientForNextButton: {
    
    borderRadius: 5,
    width:responsiveWidth(25),
    height:responsiveHeight(7),
    
  },
  buttonText: {
    
    textAlign: 'center',
    margin:responsiveWidth(2),
    
    width:responsiveWidth(22)
  },
  buttonTextForNextbtn: {
   
    textAlign: 'center',
    margin:responsiveWidth(2),
    
  },
  TextStyle:{
    fontFamily: 'Ephesis-Regular',
    color:'#f8f6f6',
    textAlign: 'center',
    fontSize: responsiveHeight(2.5),
},
TextStyleForNextbtn:{
  fontFamily: 'Ephesis-Regular',
  color:'#f8f6f6',
  textAlign: 'center',
  fontSize: responsiveHeight(3),
},
});


export default FirstPage;