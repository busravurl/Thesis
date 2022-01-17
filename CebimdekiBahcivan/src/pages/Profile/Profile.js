import React from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input/Input';
import axios from 'axios';
//import Button from '../../components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile(props) {
  let KullaniciAdi = '';
  const CikisYap = async event => {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.post(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/CikisYap',
        {
          KullaniciAdi,
        },
      );
      props.navigation.navigate('LoginPage');
      alert('Başarılı bir şekilde çıkış yapıldı.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <View>
          <Image
            style={{margin: 30, marginLeft: 111}}
            source={require('../../assets/plantprofile.png')}
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 8,
            margin: 10,
            borderRadius: 20,
            borderColor: 'gray',
            marginLeft: 30,
            //alignItems: 'center',
          }}
          onPress={() => props.navigation.navigate('ProfileEditPage')}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Ionicons name={'person-outline'} color="gray" size={22} />
            <Text style={{paddingLeft: 15, fontSize: 18}}>
              Profil Bilgilerim
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 8,
            margin: 10,
            borderRadius: 20,
            borderColor: 'gray',
            marginLeft: 30,
          }}
          onPress={() => props.navigation.navigate('KaydedilenBitkilerPage')}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Ionicons name={'bookmarks-outline'} color="gray" size={22} />
            <Text style={{paddingLeft: 15, fontSize: 18}}>
              Kaydedilen Bitkiler
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 8,
            margin: 10,
            borderRadius: 20,
            borderColor: 'gray',
            marginLeft: 30,
          }}
          onPress={() =>
            props.navigation.navigate('KaydedilenBlogYazilariPage')
          }>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Ionicons name={'bookmarks-outline'} color="gray" size={22} />
            <Text style={{paddingLeft: 15, fontSize: 18}}>
              Kaydedilen Blog Yazıları
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 8,
            margin: 10,
            borderRadius: 20,
            borderColor: 'gray',
            marginLeft: 30,
          }}
          // onPress={}
        >
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Ionicons
              name={'log-out-outline'}
              color="gray"
              size={22}
              onPress={CikisYap}
            />
            <Text style={{paddingLeft: 18, fontSize: 18}}>Çıkış Yap</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
