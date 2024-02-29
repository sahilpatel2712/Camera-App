/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
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
import {useSelector} from 'react-redux';
import GalleryItem from './GalleryItem';

const Gallery = ({navigation}) => {
  const width = Dimensions.get('screen').width;
  const {images} = useSelector(state => state.images);
  const [selectMode, setSelectMode] = useState(false);
  const [selectImage, setSelectImage] = useState([]);

  const handleSelectImage = image => {
    if (selectMode) {
      let id = image.name;
      if (selectImage.includes(id)) {
        if (selectImage.length === 1) {
          setSelectMode(false);
        }
        setSelectImage(prevIds => prevIds.filter(itemId => itemId !== id));
      } else {
        setSelectImage(prevIds => [...prevIds, id]);
      }
    } else {
      navigation.navigate('Image', image);
    }
  };

  const handleBulkDelete = () => {};

  const handleSelectMode = id => {
    if (!selectMode) {
      setSelectMode(prev => !prev);
      setSelectImage(prev => [...prev, id]);
    } else {
      setSelectMode(prev => !prev);
      setSelectImage([]);
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
            Select {selectImage.length}
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
          alignItems: 'center',
        }}>
        <FlatList
          data={images}
          numColumns={3}
          horizontal={false}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}) => (
            <GalleryItem
              item={item}
              selectImage={selectImage}
              handleSelectImage={handleSelectImage}
              handleSelectMode={handleSelectMode}
            />
          )}
          keyExtractor={item => item.name}
        />
      </View>

      {selectImage.length ? (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => handleSelectMode(null)}>
            <Text style={styles.buttonsText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBulkDelete}
            style={styles.modalButton}>
            <Text style={styles.buttonsText}>Delete</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
