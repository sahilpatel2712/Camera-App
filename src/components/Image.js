/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalTester from './common/Modal';
import ImageInfo from './common/ImageInfo';

const width = Dimensions.get('window').width;

const ImageView = ({route, navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [infoShown, setInfoShown] = useState(false);

  const image = route.params;
  const handleModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image.uri}} />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.icons} onPress={() => setModalVisible(true)}>
          <MaterialIcons name="delete" color="#333" size={30} />
        </Pressable>
        <Pressable style={styles.icons} onPress={() => setInfoShown(true)}>
          <Feather name="info" color="#333" size={30} />
        </Pressable>
      </View>
      <ModalTester
        text="This image will remove from your gallery."
        isModalVisible={isModalVisible}
        handleModal={handleModal}
      />
      {infoShown && <ImageInfo setInfoShown={setInfoShown} image={image} />}
    </SafeAreaView>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    padding: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: width,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '0%',
    height: '10%',
    width: '100%',
    justifyContent: 'space-around',
  },
  icons: {
    justifyContent: 'center',
  },
  
});
