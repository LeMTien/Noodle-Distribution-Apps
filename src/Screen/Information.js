import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native'
import { getAllNoodle } from '../redux/API'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/action';
import Database from '../database/Firebase'
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { UIActivityIndicator } from 'react-native-indicators';

const Infomation = (props) => {
  const dispatch = useDispatch();
  const { navigation, actions, route: { params: { id } } } = props
  const Hover = useSelector(state => state.NoodlesReducer);
  const [count, setCount] = useState(null)
  const [selectedHover1, setSelectedHover1] = useState(false);
  const [selectedHover2, setSelectedHover2] = useState(false);
  const [selectedHover3, setSelectedHover3] = useState(false);
  const [data, setData] = useState(null)

  useEffect(async () => {
    if (!data) {
      const data = await getAllNoodle(id);
      setData(data);
      actions.setAllNoodles(data);
    }
  }, [])
  useEffect(() => {

    if (Hover) {
      let temp = 0;
      for (const [key, value] of Object.entries(Hover)) {
        if (value) {
          temp++;
        }
      }
      setCount(temp);
    }

    if (count == 0) {
      navigation.navigate('OON')
    }
  }, [Hover])

  const updateNoodle = async (id) => {
    const docRef = doc(Database, 'noodles', id)
    await updateDoc(docRef, {
      nd1: selectedHover1 ? false : Hover.nd1,
      nd2: selectedHover2 ? false : Hover.nd2,
      nd3: selectedHover3 ? false : Hover.nd3,
    })
  }

  const handleGetNoodles = () => {
    if (selectedHover1) {
      dispatch(actions.setNoodles1(false));
      setSelectedHover1(false);
    }

    if (selectedHover2) {
      dispatch(actions.setNoodles2(false));
      setSelectedHover2(false);
    }
    if (selectedHover3) {
      dispatch(actions.setNoodles3(false));
      setSelectedHover3(false);
    }

    updateNoodle(id)
    navigation.navigate('Done', { id: id });
  };


  return (

    <ImageBackground
      style={styles.container}
      source={require('../sources/bg.png')}
    >
      <Image
        style={styles.logo}
        source={require('../sources/logo.png')} />

      <Text style={styles.title} >INFORMATION </Text>




      {data ? (<View style={{ flex: 1 }}>
        <View style={styles.containerInfo}>
          <View style={styles.bordershawdow} />
          <View style={styles.borderinfo}>
            <View style={styles.tableinfo}>
              <Image
                style={styles.avatar}
                source={require('../sources/avatar.png')} />
              <View style={styles.binfo}>
                <Text style={styles.textinfo1}>Full Name:</Text>
                <Text style={styles.textinfo1}>Birthday:</Text>
                <Text style={styles.textinfo1}>Gender:</Text>
                <Text style={styles.textinfo1}>Department:</Text>
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
          <View>

            {Hover.nd1 ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectedHover1(!selectedHover1);
                }}>
                {selectedHover1 == true && (
                  <Image
                    style={styles.hover}
                    source={require('../sources/hover.png')}
                  />
                )}
                <Image style={styles.sizenoodle}
                  source={require('../sources/noodle1.png')} />

              </TouchableOpacity>
            ) : (
              <View>
                <Image
                  style={styles.sizenoodle}
                  source={require('../sources/icon_unavailable.png')}
                />
                <Image
                  style={{ width: 80, height: 20, resizeMode: 'contain', position: 'absolute', bottom: 0, marginLeft: 10 }}
                  source={require('../sources/text_unavailable.png')}
                />
              </View>
            )}
          </View>

          <View>
            {Hover.nd2 ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectedHover2(!selectedHover2);
                }}>
                {selectedHover2 == true && (
                  <Image
                    style={styles.hover}
                    source={require('../sources/hover.png')}
                  />
                )}
                <Image style={styles.sizenoodle}
                  source={require('../sources/noodle2.png')} />
              </TouchableOpacity>
            ) : (
              <View>
                <Image
                  style={styles.sizenoodle}
                  source={require('../sources/icon_unavailable.png')}
                />
                <Image
                  style={{ width: 80, height: 20, resizeMode: 'contain', position: 'absolute', bottom: 0, marginLeft: 10 }}
                  source={require('../sources/text_unavailable.png')}
                />
              </View>
            )}
          </View>

          <View>
            {Hover.nd3 ? (
              <TouchableOpacity
                onPress={() => {
                  setSelectedHover3(!selectedHover3);
                }}>
                {selectedHover3 == true && (
                  <Image
                    style={styles.hover}
                    source={require('../sources/hover.png')}
                  />
                )}
                <Image style={styles.sizenoodle}
                  source={require('../sources/noodle3.png')} />
              </TouchableOpacity>
            ) : (
              <View>
                <Image
                  style={styles.sizenoodle}
                  source={require('../sources/icon_unavailable.png')}
                />
                <Image
                  style={{ width: 80, height: 20, resizeMode: 'contain', position: 'absolute', bottom: 0, marginLeft: 10 }}
                  source={require('../sources/text_unavailable.png')}
                />
              </View>
            )}
          </View>

        </View>

        <View style={styles.quantily} >
          <Text style={styles.numberquantily}>{count}</Text>
          <Text style={styles.textquantily}> cups of noodles left this month</Text>
        </View>
      </View>) :
        <View style={{ flex: 1 }}>
          <UIActivityIndicator size={50} color={'red'} />
        </View>}



      {count > 0 ?
        <Pressable onPress={handleGetNoodles}>
          <Image
            style={styles.btngetNoodle}
            source={require('../sources/btn_getnoodles.png')} />
        </Pressable> :
        <Pressable onPress={() => navigation.navigate("Welcome")}>
          <Image
            style={styles.btngetNoodle}
            source={require('../sources/btn_next.png')} />
        </Pressable>
      }




    </ImageBackground>
  )
}
const mapStateToProps = (state, props) => (
  {
    Hover: state.NoodlesReducer,
    props
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Infomation)

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
  containerInfo: {
    height: '46%',

  },
  bordershawdow: {
    position: 'absolute',
    width: '89%',
    height: '100%',
    borderWidth: 6,
    borderColor: '#550A0A',
    borderRadius: 30,
    top: 3,
    left: 19,
    opacity: 0.5
  },
  borderinfo: {
    borderColor: 'white',
    borderWidth: 8,
    borderRadius: 25,
    marginHorizontal: 25,
    height: '98%',
  },
  tableinfo: {
    backgroundColor: '#FFB906',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15
  },
  avatar: {
    width: '28%',
    height: '80%',
    marginTop: 10,
    marginRight: 15
  },
  binfo: {
    width: '30%',
    marginLeft: 15,
  },
  textinfo1: {
    fontFamily: 'Nunito',
    lineHeight: 25,
    color: '#880B0B',
    fontWeight: 'bold'
  },
  textinfo2: {
    lineHeight: 25,
    color: '#880B0B',
    fontSize: 12,
  },
  containerNoodle: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    padding: 15

  },
  noodle: {
    width: '30%',
    height: '100%',
    marginHorizontal: 5,
    backgroundColor: 'red',
  },
  hover: {
    marginTop: 25,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  sizenoodle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '50%',
    height: '100%',
    marginRight: 90,
    marginLeft: 50,

  },
  quantily: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  numberquantily: {
    fontSize: 12,
    color: '#D91313',
    fontFamily: 'Paytone',
  },
  textquantily: {
    fontSize: 10,
    fontFamily: 'Paytone',
    lineHeight: 20,
    color: '#9c6666'
  },
  btngetNoodle: {
    width: '70%',
    height: '18%',
    alignSelf: 'center',
    marginVertical: 60
  }

})