import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Sign.style';
//import {Formik} from 'formik';


import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';



const Sign = ({navigation}) => {

    function handleLogin() {
        navigation.goBack();
    }
    


    return(
         <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/sign.png')} /> 
            </View>
            {/*
                <Formik >
                {() =>(
                    <>
                        <Input 
                            
                            onType={handleChange('usermail')}
                            placeholder="e-postanızı giriniz.."
                        />
                        <Input 
                            onType={handleChange('password')}
                            placeholder="şifrenizi giriniz.."
                        />
                        <Input 
                            onType={handleChange('repassword')}
                            placeholder="şifrenizi tekrar giriniz.."
                        />
                        <Button text="Kayıt ol" />
                    </>
                )}
            </Formik>
             */}
            <Input
                placeholder="e-postanızı giriniz.."
            />
            <Input
                placeholder="şifrenizi giriniz.."
            />
            <Input 
                placeholder="şifrenizi tekrar giriniz.."
            />
            <Button text="Kayıt ol" />
            <Button text="Geri" theme="secondary" onPress={handleLogin}/>
        </SafeAreaView>
    );
};


export default Sign;