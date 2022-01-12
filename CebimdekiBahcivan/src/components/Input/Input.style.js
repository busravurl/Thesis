import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        padding: Platform.OS === 'android' ? 0 : 5,
    },
});