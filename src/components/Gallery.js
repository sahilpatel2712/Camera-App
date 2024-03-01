/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GalleryItem from './GalleryItem';
import {removeImage} from '../redux';

const Gallery = ({navigation}) => {
  const width = Dimensions.get('screen').width;
  const {images} = useSelector(state => state.images);
  const [selectMode, setSelectMode] = useState(false);
  const [selectImages, setSelectImages] = useState([]);
  const dispatch = useDispatch();

  const handleSelectImages = (image, index) => {
    if (selectMode) {
      let id = image.name;
      if (selectImages.includes(id)) {
        if (selectImages.length === 1) {
          setSelectMode(false);
        }
        setSelectImages(prevIds => prevIds.filter(itemId => itemId !== id));
      } else {
        setSelectImages(prevIds => [...prevIds, id]);
      }
    } else {
      navigation.navigate('Image', {...image, index: index});
    }
  };

  const handleBulkDelete = () => {
    dispatch(removeImage(selectImages));
    setSelectMode(prev => !prev);
    setSelectImages([]);
  };

  const handleSelectMode = id => {
    if (!selectMode) {
      setSelectMode(prev => !prev);
      setSelectImages(prev => [...prev, id]);
    } else {
      setSelectMode(prev => !prev);
      setSelectImages([]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '8%',
          paddingHorizontal: '5%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            height: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            color: '#000',
          }}>
          Camera Photos
        </Text>
        {selectMode ? (
          <Text
            style={{
              height: '100%',
              fontSize: 20,
              fontWeight: 'bold',
              textAlignVertical: 'center',
              color: '#000',
            }}>
            {selectImages.length} Selected
          </Text>
        ) : (
          ''
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: width,
          alignItems: images.length < 3 ? 'flex-start' : 'center',
          paddingHorizontal: '4.6%',
        }}>
        <FlatList
          data={images}
          numColumns={3}
          horizontal={false}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item, index}) => (
            <GalleryItem
              item={item}
              index={index}
              selectImages={selectImages}
              handleSelectImages={handleSelectImages}
              handleSelectMode={handleSelectMode}
            />
          )}
          keyExtractor={item => item.name}
        />
      </View>

      {selectImages.length ? (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleSelectMode(null)}>
            <MaterialIcons style={styles.buttonsText} name="cancel" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBulkDelete}
            style={styles.modalButton}>
            <MaterialIcons style={styles.buttonsText} name="delete" />
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    padding: '2%',
    alignItems: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    width: '90%',
    height: '10%',
    position: 'absolute',
    bottom: '2%',
    justifyContent: 'space-around',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonsText: {
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});
