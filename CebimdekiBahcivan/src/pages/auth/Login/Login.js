import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Image} from 'react-native';
import styles from './Login.style';
import axios from 'axios';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const initialFormValues = {
    KullaniciAdi: '',
    Sifre: '',
};

const Login = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [kullaniciAdi, setKullaniciAdi] = useState("");
    const [sifre, setSifre] = useState("");
    // const [hidePassword, setHidePassword] = useState(true);
    // const [message, setMessage] = useState();
    // const [messageType, setMessageType] = useState();

    // async function fetchData() {
    //     const response = await axios.post(
    //     'http://192.168.1.106:45455/api/cebimdekibahcivan/girisyap', {
    //     kullaniciAdi,
    //     sifre,
    //   });
    //         setLoading(false);
    //         setData(response.data.content);
    //         console.log(response.data.content);
    // }

    

    function handleSignUp() {
        navigation.navigate('SignPage');
    }

    const onSubmitFormHandler = async (event) => {
    if (!kullaniciAdi.trim() || !sifre.trim()) {
      alert("Name or Email is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`http://192.168.1.106:45455/api/cebimdekibahcivan/girisyap`, {
        KullaniciAdi,
        Sifre,
      });
      if (response.status === 200) {
        alert(` You have created: ${JSON.stringify(response.data.content)}`);
        setIsLoading(false);
        setKullaniciAdi('');
        setSifre('');
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

    //  async function handleFormSubmit(formValues) {
    //     try {
    //         setLoading(true);
    //         await fetchData()(
    //             formValues.KullaniciAdi,
    //             formValues.Sifre
            
                
    //         );
    //         setLoading(false);
        
    //     } catch (error) {
    //         showMessage({
    //             message: authErrorMessageParser(error.code),
    //             type: 'danger',
    //         });
    //         setLoading(false);
    //     }
       
    // }

    // useEffect(() => {
    //     fetchData();
    //     }, []);
   

    // function handleSubmit(credentials, setSubmitting) {
    //     handleMessage(null);
    //     const url = 'http://192.168.1.106:45455/api/cebimdekibahcivan/girisyap'

    //     axios
    //         .post(url, credentials)
    //         .then((response) => {
    //             const result = response.data.content;
    //             const {message, status, data} = result;

    //             if (status != 'SUCCESS') {
    //                 handleMessage(message, status);
    //             }else {
    //                 navigation.navigate('SignPage', {...data[0]});
    //             }
    //             setSubmitting(false);
    //         })
    //         .catch(error => {
    //         console.log(error.JSON());
    //         setSubmitting(false);
    //         handleMessage("Bir hata oluştu.Bilgilerinizi kontrol edip tekrardan deneyiniz");
    //     })
    // }
    
    // const handleMessage = (message, type = 'FAILED') => {
    //     setMessage(message);
    //     setMessageType(type);
    // }
    

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.logo_container}>
                
                    <Image style={styles.logo} source={require('../../../assets/login.png')} /> 
                
            </View>
            
                <Formik 
                initialValues={initialFormValues} 
                onSubmit={onSubmitFormHandler}>
                {({values, handleChange, handleSubmit, handleBlur}) =>(
                    <>
                        <Input
                            value={values.KullaniciAdi}
                            onType={handleChange('KullaniciAdi')}
                            placeholder="Kullanıcı adınızı giriniz.."
                        />
                        <Input 
                            value={values.Sifre}
                            onType={handleChange('Sifre')}
                            onBlur={handleBlur('Sİfre')}
                            placeholder="şifrenizi giriniz.."
                        />
                       
                        <Button text="giriş yap" onPress={handleSubmit} loading= {loading} />
                        <Button text="kayıt ol" theme="secondary" onPress={handleSignUp}/>
                    </>
                )}
            </Formik>
            
             
           
        </SafeAreaView>
    );
};

export default Login;