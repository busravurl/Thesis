import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ffffff' ,
        borderRadius: 12, 
        elevation: 2,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        padding: Platform.OS === 'android' ? 0 : 5,
    },
});