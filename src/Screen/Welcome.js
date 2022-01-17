import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {getAllNoodleData} from '../redux/API'
import actions from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const Welcome = (props) => {
    const {navigation}=props;
    const dispatch = useDispatch();
    const noodle_reducer = useSelector(state => state.noodleReducer)

    useEffect(() =>{
        dispatch(actions.getAllNoodleRequest)
        console.log(noodle_reducer)
    },[])
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const askForCameraPermission = () =>{
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
    }
        
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.replace('Information', { id: data })
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }

      if (hasPermission === true) {
        return (
            <ImageBackground 
        style={styles.container}
        source={require('../sources/bg.png')}
        >
            <Image
            style={styles.logo} 
            source={require('../sources/logo.png')}/>

            <Text style={styles.title} >WELCOME</Text>

            <View style={styles.containerVd}>
            <View style={styles.bodershadow}/>
            
            <View style={styles.bodervideo}>
            <View style={styles.boderblack}>
            <View>
            <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.video}
      />
      {/*{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}*/}
        </View>
            </View>
            </View>
            </View>

            <View style={styles.titleScan}>
                <Image 
                style={styles.iconScan} 
                source={require('../sources/icon_scan.png')}/>
                <Text style={styles.textScan} >Follow the arrow to scan card</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Er')}>
                <Image 
                style={styles.btn_scan} 
                source={require('../sources/btn_scan.png')}/>
            </Pressable>
            <Pressable
                style={styles.ctArrow}>
                <Image 
                style={styles.btn_arrow} 
                source={require('../sources/vector.png')}/>
                <Image 
                style={styles.btn_arrow} 
                source={require('../sources/vector.png')}/>
            </Pressable>

        </ImageBackground>
        );
      }
        
    return (
        
        <ImageBackground 
        style={styles.container}
        source={require('../sources/bg.png')}
        >
            <Image
            style={styles.logo} 
            source={require('../sources/logo.png')}/>

            <Text style={styles.title} >WELCOME</Text>

            <View style={styles.containerVd}>
            <View style={styles.bodershadow}/>
            
            <View style={styles.bodervideo}>
            <View style={styles.boderblack}>
            <Video
                style={styles.video}
                source={require('../sources/alta.webm')}
                useNativeControls
                resizeMode="cover"
                posterSource={require('../sources/poster.png')}
                usePoster={true}
                posterStyle={{height:170, width:170, marginHorizontal:80, marginVertical:15}}
            />
            </View>
            </View>
            </View>

            <View style={styles.titleScan}>
                <Image 
                style={styles.iconScan} 
                source={require('../sources/icon_scan.png')}/>
                <Text style={styles.textScan} >Follow the arrow to scan card</Text>
            </View>
            <Pressable onPress={askForCameraPermission}>
                <Image 
                style={styles.btn_scan} 
                source={require('../sources/btn_scan.png')}/>
            </Pressable>
        
            <Pressable
                style={styles.ctArrow}>
                <Image 
                style={styles.btn_arrow} 
                source={require('../sources/vector.png')}/>
                <Image 
                style={styles.btn_arrow} 
                source={require('../sources/vector.png')}/>
            </Pressable>

        </ImageBackground>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    logo:{
        width:'30%',
        height:'10%',
        alignSelf:'center',
        resizeMode:'contain',
        marginTop:50,
        marginBottom:30
    },
    title:{
        fontSize:30,
        fontFamily:'Nexa',
        textAlign:'center',
        color:'#C71A1A'
    },
    containerVd:{
        width:'100%',
        height:'30%',
        marginVertical:30
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 230,
        borderWidth:8,
        borderColor:'#FFC900',
        borderRadius:20,
        
    },
    bodervideo: {
        borderWidth:8,
        borderColor:'white',
        borderRadius:30,
        marginHorizontal:20
    },
    boderblack: {
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
    },
    bodershadow:{
        position:'absolute',
        width:'90%',
        height:'96%',
        borderWidth:12,
        borderColor:'#550A0A',
        borderRadius:30,
        top:5,
        left:13,
        opacity:0.5
    },
    titleScan:{
        flexDirection:'row',
         justifyContent:'center'
    },
    iconScan:{
        width:40,
        height:40
    },
    textScan:{
        fontSize:19,
        fontFamily:'Nunito',
        fontWeight:'bold',
        color:'#AE0808',
        marginHorizontal:10,
        marginTop:5
    },
    btn_scan:{
        width:110,
        height:145,
        marginVertical:80,
        borderWidth:10,
        borderColor:'white',
        borderRadius:15,
        alignSelf:'center'
    },
    ctArrow:{
        position:'absolute',
        bottom: 125,
        right:50,
        flexDirection:'row',
    },
    btn_arrow:{
        
        width:25,
        height:30
    }
})