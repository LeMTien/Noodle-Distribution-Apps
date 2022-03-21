import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
const Error = (props) => {
    const { navigation } = props

    return (

        <ImageBackground
            style={styles.container}
            source={require('../sources/bg.png')}
        >
            <Image
                style={styles.logo}
                source={require('../sources/logo.png')} />

            <Text style={styles.title} >ERORR</Text>
            <View style={styles.error}>
                <Text style={styles.titleError}>Can not recongnize your ID card.</Text>
                <Image
                    style={styles.imgError}
                    source={require('../sources/ScanAgain.png')} />
                <Image
                    style={styles.iconError}
                    source={require('../sources/icon_error.png')} />
            </View>
            <View style={styles.titleScan}>
                <Image
                    style={styles.iconScan}
                    source={require('../sources/icon_scan.png')} />
                <Text style={styles.textScan} >Follow the arrow to scan card</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Welcome')}>
                <Image
                    style={styles.btn_scan}
                    source={require('../sources/btn_scan.png')} />
            </Pressable>
            <Pressable
                style={styles.ctArrow}>
                <Image
                    style={styles.btn_arrow}
                    source={require('../sources/vector.png')} />
                <Image
                    style={styles.btn_arrow}
                    source={require('../sources/vector.png')} />
            </Pressable>

        </ImageBackground>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: '30%',
        height: '10%',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 30
    },
    title: {
        fontSize: 30,
        fontFamily: 'Nexa',
        textAlign: 'center',
        color: '#C71A1A',
        marginBottom: 20
    },
    error: {
        alignItems: 'center',
        height: '35%'
    },
    titleError: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#AE0808',
        fontSize: 18
    },
    imgError: {
        width: '40%',
        height: '10%',
        borderRadius: 5,
        marginVertical: 20
    },
    iconError: {
        width: '37%',
        height: '60%',
    },

    titleScan: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconScan: {
        width: 40,
        height: 40
    },
    textScan: {
        fontSize: 19,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#AE0808',
        marginHorizontal: 10,
        marginTop: 5
    },
    btn_scan: {
        width: 110,
        height: 145,
        marginVertical: 80,
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 15,
        alignSelf: 'center'
    },
    ctArrow: {
        position: 'absolute',
        bottom: 125,
        right: 50,
        flexDirection: 'row',
    },
    btn_arrow: {

        width: 25,
        height: 30
    }
})