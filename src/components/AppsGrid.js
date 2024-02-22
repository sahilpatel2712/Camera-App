/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenApps} from '../modules/data';

const AppsGrid = () => {
  const width = Dimensions.get('screen').width;
  return (
    <View style={{flex: 1, justifyContent: 'center', width: width}}>
      <FlatList
        data={screenApps}
        numColumns={3}
        inverted={true}
        horizontal={false}
        columnWrapperStyle={{alignSelf: 'center'}}
        renderItem={({item}) => (
          <View style={[styles.itemView]}>
            <TouchableOpacity style={styles.item}>
              <Image
                source={item.uri}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AppsGrid;

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 20,
    marginHorizontal: 25,
    verticalAlign: 'middle',
    height: 70,
    width: 70,
  },
  item: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  bottomText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
