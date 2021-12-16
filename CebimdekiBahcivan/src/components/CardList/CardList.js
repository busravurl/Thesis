import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './CardList.style';

const CardList = props => {
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Bitki</Text>
            <Text style={styles.description}>bitkinin kısa bilgisi </Text>
           
           
            
        </View>
    );
};

export default CardList;