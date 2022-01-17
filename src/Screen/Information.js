import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';
const Infomation = (props) => {
    const {navigation} = props
    
    return (
        
        <ImageBackground 
        style={styles.container}
        source={require('../sources/bg.png')}
        >
            <Image
            style={styles.logo} 
            source={require('../sources/logo.png')}/>

            <Text style={styles.title} >INFORMATION</Text>
            <View style={styles.containerInfo}>
            <View style={styles.bordershawdow} />
            <View style={styles.borderinfo}>
                <View style={styles.tableinfo}>
                    <Image 
                    style={styles.avatar} 
                    source={require('../sources/avatar.png')}/>
                    <View style={styles.binfo}>
                        <Text style={styles.textinfo1 }>Full Name:</Text>
                        <Text style={styles.textinfo1 }>Birthday:</Text>
                        <Text style={styles.textinfo1 }>Gender:</Text>
                        <Text style={styles.textinfo1  }>Department:</Text>
                    </View>
                    <View style={styles.binfo}>
                        <Text style={styles.textinfo2}>Alice Mie</Text>
                        <Text style={styles.textinfo2}>12/10/1999</Text>
                        <Text style={styles.textinfo2}>Female</Text>
                        <Text style={styles.textinfo2}>Design</Text>
                    </View>
                </View>
            </View>
            </View> 

            <View style={styles.containerNoodle}>
                <Pressable style={styles.noodle}>
                <Image style={styles.sizenoodle}
                    source={require('../sources/noodle1.png')}/>
                </Pressable>
                <Pressable style={styles.noodle}>
                <Image style={styles.sizenoodle}
                    source={require('../sources/noodle2.png')}/>
                </Pressable>
                <Pressable style={styles.noodle}>
                <Image style={styles.sizenoodle}
                    source={require('../sources/noodle3.png')}/>
                </Pressable>
            </View>
            <View style={styles.quantily} >
                <Text style={styles.numberquantily}>3</Text>
                <Text style={styles.textquantily}> cups of noodles left this month</Text>
            </View>
            <Pressable onPress={ () => navigation.navigate('Done')}>
                <Image
                style={styles.btngetNoodle}
                source={require('../sources/btn_getnoodles.png')}/>
            </Pressable>

            

        </ImageBackground>
    )
}

export default Infomation

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
    containerInfo:{
        height:'19%',
        
    },
    bordershawdow:{
        position:'absolute',
        width:'89%',
        height:'100%',
        borderWidth:6,
        borderColor:'#550A0A',
        borderRadius:30,
        top:3,
        left:19,
        opacity:0.5
    },
    borderinfo:{
        borderColor:'white',
        borderWidth:8,
        borderRadius:25,
        marginHorizontal:25,
        height:'98%',
    },
    tableinfo:{
        backgroundColor:'#FFB906',
        flexDirection:'row',
        width:'100%',
        height:'100%',
        borderColor:'black',
        borderWidth:1,
        borderRadius:15,
        padding:15
    },
    avatar:{
        width:'28%',
        height:'80%',
        marginTop:10,
        marginRight:15
    },
    binfo:{
        width:'30%',
        marginLeft:15,
    },
    textinfo1:{
        fontFamily:'Nunito',
        lineHeight:25,
        color:'#880B0B',
        fontWeight:'bold'
    },
    textinfo2:{
        lineHeight:25,
        color:'#880B0B',
        fontSize:12,
    },
    containerNoodle:{
        flexDirection:'row',
        width:'100%',
        height:'20%',
        //backgroundColor:'blue',
        padding:15

    },
    noodle:{
        width:'30%',
        height:'100%',
        marginHorizontal:5,
        //backgroundColor:'red',
    },
    sizenoodle:{
        alignSelf:'center',
        width:'60%',
        height:'100%',
    
    },
    quantily:{
        flexDirection:'row',
        alignSelf:'center'
    },
    numberquantily:{
        fontSize:12,
        color:'#D91313',
        fontFamily:'Paytone',
    },
    textquantily:{
        fontSize:10,
        fontFamily:'Paytone',
        lineHeight:20,
        color:'#9c6666'
    },
    btngetNoodle:{
        width:'70%',
        height:'18%',
        alignSelf:'center',
        marginVertical:60
    }
    
})