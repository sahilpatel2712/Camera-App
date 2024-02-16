/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    id: 1,
    uri: require('../assets/images/phone_icon.png'),
    path: 'Dial',
  },
  {
    id: 2,
    uri: require('../assets/images/contact-app-icon.jpg'),
    path: 'Contact',
  },
  {
    id: 3,
    uri: require('../assets/images/calculator_icon.png'),
    path: 'Calculator',
  },
];

const PinnedApps = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate(item.path)}>
              <Image style={styles.image} source={item.uri} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default PinnedApps;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 25,
    height: 75,
    width: 75,
    borderRadius: 20,
    opacity: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
