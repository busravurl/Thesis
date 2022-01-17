import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios';

import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileEdit() {
  const scrollView = React.useRef();
  const [data, setData] = useState([]);
  let KullaniciAdi = '';

  async function fetchData() {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      console.log(KullaniciAdi);
      const response = await axios.get(
        `http://192.168.1.45:45455/api/cebimdekiBahcivan/KullaniciBilgileriGetir?KullaniciAdi=${KullaniciAdi}`,
      );
      setData(response.data.content);
      console.log(response.data.content);
    } catch (error) {
      alert(error.message);
    }
  }

  const _render = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          marginBottom: 20,
          backgroundColor: '#ffffff',
          borderRadius: 12,
          elevation: 1,
        }}>
        <View>
          <Text style={{fontSize: 22, marginLeft: 10, color: '#18A558'}}>
            {item.Eposta}
          </Text>
          <Text style={{fontSize: 14, marginLeft: 10}}>{item.Ad}</Text>

          <Text style={{fontSize: 14, marginLeft: 10}}>{item.Soyad}</Text>
        </View>
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        ref={scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{margin: 10}}>
          <View>
            <Image
              style={{margin: 30, marginLeft: 111}}
              source={require('../../assets/plantprofile.png')}
            />
          </View>
          <View>
            <Input placeholder="e-postanızı giriniz.." />
            <Input placeholder="şifrenizi giriniz.." />
            <Input placeholder="e-posta adresinizi giriniz.." />
            <Input placeholder="Telefon numaranızı giriniz.." />
            <Input placeholder="Yaşadığınız ilin plaka kodunu giriniz.." />
          </View>

          <Button text="Bilgilerimi Güncelle" />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileEdit;
