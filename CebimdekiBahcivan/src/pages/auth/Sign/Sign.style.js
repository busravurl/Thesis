import {StyleSheet, Platform, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body_container: {
        flex: 1,
    },
    header: {
        color: colors.yellow,
        margin: 5,
        fontSize: Platform.OS === 'android' ? 120 : 160,
    },
    logo: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height /5,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
});