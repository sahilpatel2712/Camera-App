/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {screenApps} from '../modules/data';

const Gallery = () => {
  const width = Dimensions.get('screen').width;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: '8%',
          paddingHorizontal: '10%',
          width: '100%',
        }}>
        <Text
          style={{
            height: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            color: '#000',
          }}>
          Recent Photos
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: width,
        }}>
        <FlatList
          data={screenApps}
          numColumns={3}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <View style={[styles.itemView]}>
              <TouchableOpacity style={styles.item}>
                <Image source={item.uri} style={styles.image} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
  itemView: {
    marginVertical: 10,
    marginHorizontal: 5,
    verticalAlign: 'middle',
    height: 90,
    width: 115,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  item: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});
