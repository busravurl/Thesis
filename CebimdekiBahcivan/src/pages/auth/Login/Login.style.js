import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height/2,
        marginRight: 50;
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body_container: {
        flex: 1,
    },
    header: {
        color: colors.green,
        margin: 5,
        fontSize: Platform.OS === 'android' ? 120 : 160,
    },
});