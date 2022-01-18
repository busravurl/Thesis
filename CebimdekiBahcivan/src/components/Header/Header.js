import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

import colors from '../../styles/colors';

const Header = () => {
   

    return(
    <SafeAreaView style={{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingHorizontal: '4%',
        height: 70,
        marginBottom:20,
        borderBottomRadius: 100,
          shadowColor: 'gray',
          elevation : 5
        }}>
        <View style={{
            padding : 15,
            flexDirection: 'row',
           }}>
          <Text style={{color: colors.green, fontWeight: 'normal', fontSize: 17, paddingRight: 2, marginTop: 10}}>Cebimdeki Bahçıvan</Text>
          <Image style={{marginTop: 8}} source={require('../../assets/leaf.png')} />
        </View>
    </SafeAreaView>
    );
};

export default Header;

