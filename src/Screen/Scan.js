import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App(props) {
  const { navigation } = props
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data.length != 20) {
      navigation.navigate('Er')
    } else {
      navigation.navigate('Information', { id: data })
    }

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.clip}
      />
      {scanned && <Pressable style={styles.tryAgainPress} onPress={() => setScanned(false)}>
        <Text style={styles.tryAgainText}>Tap to scan again</Text></Pressable>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  clip: {

    height: "100%",
    marginBottom: 50
  },
  tryAgainPress: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFC900',
    borderRadius: 5,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tryAgainText: {
    color: 'white',
    fontSize: 30
  },
});
