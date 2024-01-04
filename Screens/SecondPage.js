/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import libraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Alert, TouchableOpacity, Image, PermissionsAndroid, Platform, StatusBar, SafeAreaView, LogBox} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedGestureHandler, useAnimatedStyle, withDelay, } from 'react-native-reanimated';
import SliderItem from './SliderItem';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedAd, RewardedAdEventType} from 'react-native-google-mobile-ads';
import {
  notificationListener,
  requestUserPermission,
} from '../src/utils/notificationServices';

import ImagePicker from 'react-native-image-crop-picker';
const {height, width} = Dimensions.get('window');

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


const adUnitId3 = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';



 





const rewarded = RewardedAd.createForAdRequest(adUnitId3, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});




























  const cars=[
    require('../images/car1.jpg'),
    require('../images/car2.jpg'),
    require('../images/car3.jpg'),
    require('../images/car4.png'),
    require('../images/car5.jpg'),
    require('../images/car6.jpg'),
    require('../images/car7.jpg'),
    require('../images/car8.jpg'),
    require('../images/car9.jpg'),
    require('../images/car10.jpg'),
    require('../images/car11.jpg'),
    require('../images/car2.jpg'),
    require('../images/car3.jpg'),
    require('../images/car4.png'),
    require('../images/car5.jpg'),
    require('../images/car6.jpg'),
    require('../images/car7.jpg'),
    require('../images/car8.jpg'),
    require('../images/car9.jpg'),
    require('../images/car10.jpg'),
    require('../images/car5.jpg'),
    require('../images/car7.jpg'),
    require('../images/car11.jpg'),

    ]


    const interiorDesign=[
      require('../images/interiorDesign1.jpg'),
      require('../images/interiorDesign2.jpg'),
      require('../images/interiorDesign3.jpg'),
      require('../images/interiorDesign4.jpg'),
      require('../images/interiorDesign5.jpg'),
      require('../images/interiorDesign6.jpg'),
      require('../images/interiorDesign7.jpg'),
      require('../images/interiorDesign8.jpg'),

      
      


      require('../images/interiorDesign1.jpg'),
      require('../images/interiorDesign2.jpg'),
      require('../images/interiorDesign3.jpg'),
      require('../images/interiorDesign4.jpg'),
      require('../images/interiorDesign5.jpg'),
      require('../images/interiorDesign6.jpg'),
      require('../images/interiorDesign7.jpg'),
      require('../images/interiorDesign8.jpg'),
      require('../images/interiorDesign1.jpg'),
      require('../images/interiorDesign2.jpg'),
      require('../images/interiorDesign3.jpg'),
      require('../images/interiorDesign4.jpg'),
      require('../images/interiorDesign5.jpg'),
      require('../images/interiorDesign6.jpg'),
      require('../images/interiorDesign7.jpg'),
      require('../images/interiorDesign8.jpg'),
      require('../images/interiorDesign2.jpg'),
       
  
      ]

      


    





    













const SecondPage = ({navigation}) => {

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
  requestPermission();
}, []);


useEffect(() => {
  
  
  
  const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
    setLoaded3(true);
  });
  
  
  
  
  const unsubscribeEarned = rewarded.addAdEventListener(
    RewardedAdEventType.EARNED_REWARD,
    reward => {
      
      console.log(`User earned reward of ${reward.amount} ${reward.type}`);
        if(reward){
          setShowRewardedTopics(true);
        }else{
          setShowRewardedTopics(false);
        }
    },
  );



   const unsubscribeClosed = rewarded.addAdEventListener(AdEventType.CLOSED, () => {
    setLoaded3(false);
    rewarded.load();
  }); 

  // Start loading the rewarded ad straight away
  rewarded.load();

  // Unsubscribe from events on unmount
  return () => {
    unsubscribeLoaded();
    unsubscribeEarned();
    unsubscribeClosed();
  };
}, []);

const [currentIndex,setCurrentIndex]=useState(0);
const [ourChoiceForImage,setourChoiceForImage]=useState('5');

const [loaded3, setLoaded3] = useState(false);
let [galleryOk, setGalleryOk] = useState(false);
let [showRewardedTopics, setShowRewardedTopics] = useState(false);


const [filePath, setFilePath] = useState({});
  const [images, setImages] = useState([]);
  let imageName = '';
  let  rewardEarnedCompletely=0;
  
  const requestPermission = async () => {
    try {
      console.log('asking for permission');
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.CAMERA'] &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE']
      ) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('permission error', error);
    }
  };

  const uploadORActuallyOpenGallery = () => {
    let imageList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'photo',
      
      cropping: true,
      
    })
      .then(response => {
        console.log('Response:', JSON.stringify(response));
        
        response.map(image => {
          imageList.push({
            
            path: image.path,
            
            type: image.mime,
          });
          
          console.log('FileName ->', image.path);
          console.log('path -> ', image.path);
          console.log('Type -> ', image.mime);
        });
        
        setImages(imageList);

        
      })
      .catch(error =>
        console.log(
          'Error while executing uploadORActuallyOpenGallery is:',
          error,
        ),
      );
  };



















const checkSwitch=(param)=>{

  switch(param) {

    

      case '4':

      Four();

      break;

      case '5':

      Five();

      break;

      case '6':

      Six();

      break;

      

    

    default:

      Alert.alert("NUMBER NOT FOUND");

    }

}







 

const Four=()=>{

  
  setourChoiceForImage('4');
  uploadORActuallyOpenGallery();
  setGalleryOk(true);
  
  
}

const Five=()=>{

  
  setourChoiceForImage('5');
  setGalleryOk(false);
  
  
}


const Six=()=>{

  
  setourChoiceForImage('6');
  setGalleryOk(false);
  
  
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




<Text style={{color:'blue', textAlign:'center', fontSize:responsiveFontSize(2.5), fontFamily:'Wolfalcon', marginTop:responsiveHeight(6)}}>Great Image</Text>







<View style={{marginTop:responsiveHeight(5),}}>
  <Text style={{color:'blue', textAlign:'center', fontSize:responsiveFontSize(2.5), fontFamily:'Ephesis-Regular'}}>Select Your Favourite Image Topic</Text>
    
    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>




    <LinearGradient 
    
    colors={['#012B70', '#0EABC4', '#07629B']} 
    style={styles.linearGradientForButton}
    >

<TouchableOpacity onPress={()=>checkSwitch('4')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Gallery</Text>

</TouchableOpacity>
</LinearGradient>


<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForButton}>
<TouchableOpacity onPress={()=>checkSwitch('5')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Interior</Text>

</TouchableOpacity>
</LinearGradient>







<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForButton}>

<TouchableOpacity onPress={()=>{
  rewarded.show();
  
  }} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Rewarded</Text>

</TouchableOpacity>
</LinearGradient>

















</View>


        
  </View>
  <View style={{
    
    marginLeft:60,
    marginRight:60,
    
    
    }}>



{showRewardedTopics==true?
<>
<View style={{flexDirection:'row',justifyContent: 'center', alignItems: 'center', marginTop:responsiveHeight(2), marginLeft:responsiveHeight(0)}}>


 
 
 
 
<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForButton}>
 <TouchableOpacity onPress={()=>checkSwitch('6')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Cars</Text>

</TouchableOpacity> 
</LinearGradient>
</View>
</>
:
null

}
    
    
    
    
    
    
    
     <FlatList
     horizontal
     onScroll={e=>{
      const X=e.nativeEvent.contentOffset.x;
      
      console.log((X/300).toFixed(0));
      setCurrentIndex((X/300).toFixed(0));
      
     }}


     
      
        
        data={
        ourChoiceForImage=='4'?images
        :ourChoiceForImage=='5'?interiorDesign
        :ourChoiceForImage=='6'?cars
        :null}
        renderItem={({item,index})=>{
          return(
            
            <SliderItem image={item} index={index} currentIndex={currentIndex} isGalleryImages={galleryOk}/>
          )
        }}
     />









 <View style={{flex:1, alignItems:'center'}}>
<LinearGradient colors={['#012B70', '#0EABC4', '#07629B']} style={styles.linearGradientForNextButton}>

<TouchableOpacity onPress={()=>navigation.navigate('FirstPage')} activeOpacity={0.6} style={styles.buttonText} >

<Text style={styles.TextStyle}>Back</Text>

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
    height:responsiveHeight(6),
    
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


export default SecondPage;