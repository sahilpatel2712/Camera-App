/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const GalleryItem = ({
  item,
  index,
  selectImages,
  handleSelectImages,
  handleSelectMode,
}) => {
  return (
    <View
      style={{
        ...styles.itemView,
        backgroundColor: selectImages.includes(item.name) ? '#15F5BA' : '#fff',
      }}>
      <TouchableOpacity
        style={{
          ...styles.item,
          ...(selectImages.includes(item.name) ? styles.selectedView : {}),
        }}
        onLongPress={() => handleSelectMode(item.name)}
        onPress={() => handleSelectImages(item, index)}>
        <Image source={{uri: item.uri}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(GalleryItem);

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    height: 115,
    width: 115,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: '#FFF',
  },
  selectedView: {
    height: 110,
    width: 110,
  },
  item: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
