import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native'
const OON = () => {


    return (

        <ImageBackground
            style={styles.container}
            source={require('../sources/bg.png')}
        >
            <Image
                style={styles.logo}
                source={require('../sources/logo.png')} />

            <Text style={styles.title} >OUT OF NOODLES</Text>
            <View style={styles.out}>
                <Image
                    style={styles.textOut}
                    source={require('../sources/textout.png')} />
                <Image
                    style={styles.iconOut}
                    source={require('../sources/icon_outnoodles.png')} />
            </View>
        </ImageBackground>
    )
}

export default OON

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
        marginBottom: 30
    },
    out: {
        alignSelf: 'center',
        alignItems: 'center',
        height: '35%',
        width: '80%',
    },
    textOut: {
        width: '100%',
        height: '14%',
        marginBottom: 45
    },
    iconOut: {
        width: '66%',
        height: '48%'
    }
})