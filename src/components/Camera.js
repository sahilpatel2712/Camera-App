/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import {Camera, CameraType} from 'react-native-camera-kit';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {saveImage} from '../modules/helper';
import {useDispatch, useSelector} from 'react-redux';
import {addImage} from '../redux';

const CameraScreen = () => {
  const ref = useRef();
  const [cameraType, setType] = useState(true);
  const [flashMode, setFlashMode] = useState(true);
  const [imageUri, setUri] = useState(null);
  const dispatch = useDispatch();
  const {images} = useSelector(state => state.images);
  const handleCapture = async () => {
    const uri = await ref.current.capture();
    let newUri = await saveImage(uri.uri);
    let imageObject = {
      height: uri.height,
      width: uri.width,
      name: uri.name,
      date: moment().format('MMMM Do YYYY'),
      uri: newUri,
    };
    dispatch(addImage(imageObject));
  };

  useEffect(() => {
    if (images.length !== 0) {
      setUri(images[0].uri);
    }
  }, [images]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable
          style={styles.flashContainer}
          onPress={() => setFlashMode(prev => !prev)}>
          <Ionicons
            name={flashMode ? 'flash' : 'flash-off'}
            style={styles.icons}
            size={20}
            color="#fff"
          />
        </Pressable>
      </View>
      <Camera
        ref={ref}
        style={{height: '76%', width: '100%'}}
        cameraType={cameraType ? CameraType.Back : CameraType.Front}
        flashMode={flashMode ? 'on' : 'off'}
        resetFocusWhenMotionDetected
        zoomMode="on"
        onZoom={e => console.log(e.nativeEvent.zoom)}
        torchMode="off"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.imageView}>
          <Pressable
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 8,
            }}>
            {imageUri && (
              <Image
                style={{height: '100%', width: '100%', borderRadius: 8}}
                source={{uri: imageUri}}
              />
            )}
          </Pressable>
        </View>
        <View style={styles.clickButton}>
          <View
            style={{
              backgroundColor: '#FFF',
              height: '100%',
              width: '100%',
              borderRadius: 100,
              borderWidth: 10,
              borderColor: '#fff',
            }}>
            <TouchableOpacity
              onPress={handleCapture}
              style={{
                height: '100%',
                width: '100%',
                borderWidth: 1,
                borderRadius: 100,
                borderColor: '#333',
              }}></TouchableOpacity>
          </View>
        </View>
        <View style={styles.cameraType}>
          <TouchableOpacity
            onPress={() => setType(prev => !prev)}
            style={{
              backgroundColor: '#333',
              height: '100%',
              width: '100%',
              borderRadius: 100,
              justifyContent: 'center',
            }}>
            <SimpleLineIcons
              name="refresh"
              color="#fff"
              style={styles.icons}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    height: '9%',
    width: '100%',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0,1)',
    height: '15%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageView: {
    height: 60,
    width: 60,
  },
  clickButton: {
    height: 80,
    width: 80,
    justifyContent: 'center',
  },
  cameraType: {
    height: 60,
    width: 60,
  },
  flashContainer: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: '8%',
    justifyContent: 'center',
  },
  icons: {
    textAlign: 'center',
  },
});
