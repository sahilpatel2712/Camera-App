/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalTester from './common/Modal';
import InfoModal from './common/InfoModal';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../redux';
import {ScrollView} from 'react-native-gesture-handler';

const ImageView = ({route, navigation}) => {
  let {width} = useWindowDimensions();
  const [isModalVisible, setModalVisible] = useState(false);
  const [infoShown, setInfoShown] = useState(false);
  const {images} = useSelector(state => state.images);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageDetails, setImageDetails] = useState({});
  const image = route.params;
  const dispatch = useDispatch();

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
    setImageDetails(images[index]);
  };
  const handleModal = response => {
    if (response) {
      dispatch(removeImage([imageDetails.name]));
      navigation.goBack();
    }
    setModalVisible(false);
  };

  useEffect(() => {
    setActiveIndex(image.index);
    setImageDetails(image);
  }, [image.index, image]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            contentOffset={{x: activeIndex * width, y: 0}}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={50}>
            {images.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: width,
                    paddingHorizontal: '0.5%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    aspectRatio: item.width / item.height,
                  }}>
                  <Image style={styles.image} source={{uri: item.uri}} />
                </View>
              );
            })}
          </ScrollView>
        </View>
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
      <InfoModal
        image={imageDetails}
        infoShown={infoShown}
        setInfoShown={setInfoShown}
      />
    </SafeAreaView>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    height: '100%',
  },
  scrollViewStyle: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  imageWrapper: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
  },
});
