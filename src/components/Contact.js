/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state.contacts);
  return (
    <SafeAreaView
      style={{height: '100%', width: '100%', paddingVertical: '2%',backgroundColor:"#F5F7F8"}}>
      <FlatList
        data={contacts}
        style={{
          height: '100%',
          padding: '2%',
          borderRadius: 10,
          width: '100%',
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactInfo', item)}
            style={styles.item}>
            <Image source={{uri: item.imageUri}} style={styles.image} />
            <View
              style={
                index !== contacts.length - 1
                  ? {
                      ...styles.textContainer,
                      borderBottomWidth: 1,
                      borderBottomColor: '#B4B4B8',
                    }
                  : styles.textContainer
              }>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={{color: '#61677A'}}>+91{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    gap: 25,
    width: '100%',
    height: 70,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: '#000',
    height: '50%',
    width: '100%',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
