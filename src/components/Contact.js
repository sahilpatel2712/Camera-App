/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Contact = ({navigation}) => {
  const data = [
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
    {name: 'sahil', uri: require('../assets/images/user_icon.png')},
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactInfo', {params: item})}
            style={styles.item}>
            <Image source={item.uri} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: '2%',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#E5E1DA',
    gap: 25,
    borderRadius:10
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  image: {
    height: 30,
    width: 30,
  },
});
