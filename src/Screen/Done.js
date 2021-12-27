import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';
const Done = (props) => {
    const {navigation} = props
    const [loaded] = useFonts({
        Nexa: require('../../assets/fonts/SVN-Nexa.ttf'),
        Nunito: require('../../assets/fonts/Nunito.ttf'),
        Paytone: require('../../assets/fonts/PaytoneOne-Regular.ttf')
      });
      if (!loaded) {
        return null;
      }
    return (
        
        <ImageBackground 
        style={styles.container}
        source={require('../sources/bg.png')}
        >
            <Image
            style={styles.logo} 
            source={require('../sources/logo.png')}/>

            <Text style={styles.title} >DONE</Text>

            <Image
             style={styles.avatarDone} 
            source={require('../sources/avatar_done.png')}/>

            <View style={styles.enjoy}>
                <Text style={styles.txtEnjoy}>Enjoy your noodles</Text>
                <Image 
                style={styles.iconHeart} 
                source={require('../sources/icon_heart.png')}/>
            </View>
            <Pressable style={styles.getNoodle} onPress={() => navigation.navigate('OON')}>
                <Image
                style={styles.btngetNoodle}
                source={require('../sources/btn_back.png')}/>
            </Pressable>
            <View style={styles.below}>  
                <Text style={styles.txtBelow}>Get them below</Text>
                <Image
                style={styles.iconArrow}
                source={require('../sources/vector2.png')}/>
                <Image
                style={styles.iconArrow}
                source={require('../sources/vector2.png')}/>
            </View>

            

        </ImageBackground>
    )
}

export default Done

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
        color:'#C71A1A',
        marginBottom:20
    },
    avatarDone:{
        width:'53%',
        height:'29%',
        alignSelf:'center'
    },
    enjoy:{
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:120
    },
    txtEnjoy:{
        fontFamily:'Paytone',
        color:'#C71A1A',
        fontSize:25,
    },
    iconHeart:{
        width:'8%',
        height:'58%',
        marginTop:10,
        marginLeft:10
    },
    getNoodle:{
        width:'70%',
        height:'5.6%',
        alignSelf:'center'
    },
    btngetNoodle:{
        width:'100%',
        height:'100%',
    },
    below:{
        width:'100%',
        alignItems:'center',
        marginTop:30
    },
    txtBelow:{
        fontSize:20,
        color:'#F8C135',
        fontWeight:'bold',
        marginBottom:5
    },
    iconArrow:{
        width:'5%',
        height:'9%',
    }
    
})