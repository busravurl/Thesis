import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Sign.style';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import * as Yup from 'yup';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const initialFormValues = {
    Ad:'',
    Soyad:'',
    KullaniciAdi: '',
    Sifre: '',
    Telefon: '',
    Eposta: '',
    IlId: '',
};

const Sign = ({navigation}) => {

    function handleLogin() {
        navigation.goBack();
    }
    
    function handleFormSubmit(formValues) {
     
        axios.post(`http://192.168.1.106:45455/api/CebimdekiBahcivan/KayitOl`,{
            ...formValues
        }).then((res)=>{
            if(res.data.success){
                // kayıt başarılı
                this.props.AuthenticateStore.saveToken(res.data.data.token);
            }
            else
            {
                alert(res.data.message);
            }

        })
            .catch((e)=>console.log(e));
    }

    return(
         <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/sign.png')} /> 
            </View>
       
                <Formik 
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
                validationSchema={Yup.object().shape({
                            firstName:Yup.string().required('İsim zorunludur'),
                             email:Yup.string().email("Lütfen geçerli bir email giriniz").required('Email zorunludur'),
                             password:Yup.string().required('Şifre zorunludur')
                         })}>>
                {({values, handleChange, handleSubmit,errors,isValid,touched, setFieldTouched,isSubmitting}) =>(
                    <>
                        <Input 
                            value={values.KullaniciAdi}
                            onType={handleChange('KullaniciAdi')}
                            placeholder="e-postanızı giriniz.."
                            onBlur={()=>setFieldTouched("KullaniciAdi")}
                        />
                        <Input 
                            value={values.Sifre}
                            onType={handleChange('Sifre')}
                            placeholder="şifrenizi giriniz.."
                            onBlur={()=>setFieldTouched("Sifre")}
                        />
                        <Input 
                            value={values.Eposta}
                            keyboardType={"email-address"}
                            onType={handleChange('Eposta')}
                            placeholder="e-posta adresinizi giriniz.."
                            onBlur={()=>setFieldTouched("email")}
                        />
                        <Input 
                            value={values.Telefon}
                            onType={handleChange('Telefon')}
                            placeholder="Telefon numaranızı giriniz.."
                            onBlur={()=>setFieldTouched("Telefon")}
                        />
                        <Input 
                            value={values.IlId}
                            onType={handleChange('IlId')}
                            placeholder="Yaşadığınız ilin plaka kodunu giriniz.."
                            onBlur={()=>setFieldTouched("IlId")}
                        />
                        <Button text="Kayıt ol"  disabled={!isValid || isSubmitting} onPress={handleSubmit}/>
                        <Button text="Geri" theme="secondary" onPress={handleLogin}/>
                    </>
                )}
            </Formik>
        
        </SafeAreaView>
    );
};


export default Sign;