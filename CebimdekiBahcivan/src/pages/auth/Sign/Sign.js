
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

const Sign = ({navigation}) => {
   function handleLogin() {
        navigation.goBack();
    }

  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
  const [telefon, setTelefon] = useState("");
  const [eposta, setEposta] = useState("");
  const [ilId, setIlId] = useState("");


  const onChangeAdHandler = (ad) => {
    setAd(ad);
  };

  const onChangeSoyadHandler = (soyad) => {
    setSoyad(soyad);
  };

  const onChangeKullaniciAdiHandler = (kullaniciAdi) => {
    setKullaniciAdi(kullaniciAdi);
  };

  const onChangeSifreHandler = (sifre) => {
    setSifre(sifre);
  };

  const onChangeTelefonHandler = (telefon) => {
    setTelefon(telefon);
  };

  const onChangeEpostaHandler = (eposta) => {
    setEposta(eposta);
  };

  const onChangeIlIdHandler = (ilId) => {
    setIlId(ilId);
  };

  

  const onSubmitFormHandler = async (event) => {

    try {
        //console.log(kullaniciAdi)
      const response = await axios.post('http://192.168.1.106:45457/api/cebimdekiBahcivan/kayitOl', {
        ad,
        soyad,
        kullaniciAdi,
        sifre,
        telefon,
        eposta,
        ilId

      });
      console.log(response)
        if( kullaniciAdi) {
          AsyncStorage.setItem('key', kullaniciAdi);
          setKullaniciAdi('');
          alert('data saved'); 
        } else {
          alert('boş geçmeyin')
        }
        console.log(kullaniciAdi);

      alert('Başarılı bir şekilde kayıt olundu! Hoşgeldin '+kullaniciAdi)
    } catch (error) {
      alert(error.message);
       
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={[styles.logo_container, {justifyContent: 'center', alignItems: 'center', marginTop: 25}]}>
                <Image style={styles.logo} source={require('../../../assets/plant.png')} /> 
            </View>
        <View style={styles.wrapper}>
          {(
            <Text style={styles.formHeading}></Text>
          )}
        </View>
        
          <Input
            placeholder="Adınızı giriniz"
            value={ad}
            onChangeText={onChangeAdHandler}
          />
        
          <Input
            placeholder="Soyadınızı Giriniz"
            value={soyad}
            onChangeText={onChangeSoyadHandler}
          />

          <Input
            placeholder="Kullanıcı Adı giriniz"
            value={kullaniciAdi}
            onChangeText={onChangeKullaniciAdiHandler}
          />
        
          <Input
            placeholder="Sifre giriniz"
            value={sifre}
            onChangeText={onChangeSifreHandler}
          />
          
          <Input
            placeholder="Telefon numarası giriniz"
            value={telefon}
            onChangeText={onChangeTelefonHandler}
          />
        
          <Input
            placeholder="Eposta adresinizi giriniz"
            value={eposta}
            onChangeText={onChangeEpostaHandler}
          />

          <Input
            placeholder="Yaşadığınız il"
            value={ilId}
            onChangeText={onChangeIlIdHandler}
          />
        
          <Button
            text="Kayıt Ol"
            onPress={onSubmitFormHandler}
           
          />
          <Button
            text="Giriş ap"
            theme="secondary"
            onPress={handleLogin}
       
          />
        
      </View>
    </ScrollView>
  );
}

export default Sign;

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

