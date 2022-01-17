import React from 'react';
import {TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Input.style';

const Input = ({placeholder, value, onChangeText, icon}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} color="grey" size={30} />
      <TextInput
        //autoCapitalize="none"
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={true}
      />
    </View>
  );
};

export default Input;
