
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Platform,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const Login = (props) => {
   function handleSignUp() {
        props.navigation.navigate('SignPage');
    };

  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");

  const onChangeKullaniciAdiHandler = (kullaniciAdi) => {
    setKullaniciAdi(kullaniciAdi);
  };

  const onChangeSifreHandler = (sifre) => {
    setSifre(sifre);
  };

  const onSubmitFormHandler = async (event) => {
    if (!kullaniciAdi.trim() || !sifre.trim()) {
      alert("Name or Email is invalid");
      return;
    }

    try {
        
      //console.log(kullaniciAdi)
      const response = await axios.post('http://192.168.1.106:45455/api/cebimdekiBahcivan/girisYap', {
        kullaniciAdi,
        sifre,
      });
      console.log(response)
      AsyncStorage.setItem('key', kullaniciAdi);
      setKullaniciAdi('');
      props.navigation.navigate('Cebimdeki Bahçıvan', kullaniciAdi);
      
      console.log(kullaniciAdi);
      
    } catch (error) {
      alert(error.message);
       
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{flex:1}}>
        <View style={[styles.logo_container, {justifyContent: 'center', alignItems: 'center', marginTop: 25}]}>
                <Image style={[styles.logo, {alignItems: 'center'}]} source={require('../../../assets/watering-plants.png')} /> 
            </View>
        <View style={styles.wrapper}>
          {(
            <Text style={styles.formHeading}></Text>
          )}
        </View>
        
          <Input
            placeholder="Kullanıcı Adı"
            value={kullaniciAdi}
            onChangeText={onChangeKullaniciAdiHandler}
          />
        
        
          <Input
            placeholder="Sifre"
            value={sifre}
            onChangeText={onChangeSifreHandler}
          />
       
        
          <Button
            text="Giriş Yap"
            onPress={onSubmitFormHandler}
            style= {{backgroundColor: "green"}}
           
          />
          <Button
            text="Kayıt Ol" 
            theme="secondary"
            onPress={handleSignUp}
       
          />
        
      </View>
    </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
    
    
  },
  formHeading: {
    color: "white",
  },
  wrapper: {
    marginBottom: 10,
  },
 
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});

