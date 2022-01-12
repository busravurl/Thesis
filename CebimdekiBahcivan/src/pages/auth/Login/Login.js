
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";


export default function App() {
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
        console.log(kullaniciAdi)
      const response = await axios.post('http://192.168.1.106:45457/api/cebimdekiBahcivan/girisYap', {
        kullaniciAdi,
        sifre,
      });
      console.log(response)
      if(response.state==='OK'){
alert('Kullanıcı girişi başarılı! Hoşgeldin '+kullaniciAdi)

      }else if(response.state==='NOK'){
          alert('Kullanıcı adı veya şifre hatalı lütfen tekrar deneyiniz.')
      }
    } catch (error) {
      alert(error.message);
       
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {(
            <Text style={styles.formHeading}></Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={kullaniciAdi}
          
            onChangeText={onChangeKullaniciAdiHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Sifre"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={sifre}
         
            onChangeText={onChangeSifreHandler}
          />
        </View>
        <View>
          <Button
            title="Giriş Yap"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
       
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#ffffff",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});

