import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Search.style';

import Input from '../../components/Input/Input';

function Search() {
    return(
        <SafeAreaView style={styles.container}>
            <View >
                
                <Input icon="search-outline" placeHolder="Search.."/>
            </View>
            
        </SafeAreaView>
    );
};

export default Search;