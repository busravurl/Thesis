import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import axios from 'axios';
import Header from '../../components/Header/Header';

import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileEdit() {
  const scrollView = React.useRef();
  const [data, setData] = useState([]);
  let KullaniciAdi = '';

  const [PlakaKodu, setPlakaKodu] = useState('');
  const [Sifre, setSifre] = useState('');

  const onChangePlakaKoduHandler = PlakaKodu => {
    setPlakaKodu(PlakaKodu);
  };

  const onChangeSifreHandler = Sifre => {
    setSifre(Sifre);
  };

  async function BilgilerimiGuncelle() {
    try {
      const response1 = await axios.get(
        'http://192.168.1.106:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.post(
        'http://192.168.1.106:45455/api/cebimdekiBahcivan/BilgilerimiGuncelle',
        {
          KullaniciAdi,
          IlId: PlakaKodu,
          Sifre,
        },
      );

      if (response.data.state === 'NOK') {
        alert(response.data.content);
      } else {
        alert(response.data.content);
      }
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

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
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
            <PwInput
              placeholder="Sifreniz"
              value={Sifre}
              onChangeText={onChangeSifreHandler}
            />
            <Input
              placeholder="Plaka kodunuz"
              value={PlakaKodu}
              onChangeText={onChangePlakaKoduHandler}
            />
          </View>

          <Button text="Bilgilerimi Güncelle" onPress={BilgilerimiGuncelle} />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileEdit;
