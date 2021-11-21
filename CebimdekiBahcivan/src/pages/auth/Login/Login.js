import React, {useState} from 'react';
import { SafeAreaView, View, Text, Image} from 'react-native';
import styles from './Login.style';
//import {Formik} from 'formik';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';


const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    function handleSubmit() {
        navigation.navigate('HomePage');
    }
    


    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.logo_container}>
                
                    <Image style={styles.logo} source={require('../../../assets/login.png')} /> 
                
            </View>
            {/*
                <Formik >
                {({ handleChange}) =>(
                    <>
                        <Input
                            onType={handleChange('usermail')}
                            placeholder="e-postanızı giriniz.."
                        />
                        <Input 
                            onType={handleChange('password')}
                            placeholder="şifrenizi giriniz.."
                        />
                        <Button text="giriş yap" onPress={handleSubmit} loading= {loading} />
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
            <Button text="giriş yap" onPress={handleSubmit} loading= {loading} />
            <Button text="kayıt ol" theme="secondary" onPress={handleSignUp}/>
        </SafeAreaView>
    );
};

export default Login;