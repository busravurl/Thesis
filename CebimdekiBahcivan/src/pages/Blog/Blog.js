import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');
import Header from '../../components/Header/Header';

function Blog() {
  const [data, setData] = useState([]);
  let KullaniciAdi = '';

  async function KaydedilenlereGonder(item) {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.post(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/BlogYazisiniFavorilereEkleme',
        {
          Baslik: item.Baslik,
          KullaniciAdi,
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

  async function fetchData() {
    const response = await axios.get(
      'http://192.168.1.45:45455/api/cebimdekiBahcivan/blogYazisiGetir',
    );

    if (response.data.state === 'NOK') {
      alert(response.data.content);
    } else {
      setData(response.data.content);
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
            {item.Baslik}
          </Text>

          <Ionicons
            name={'bookmark-outline'}
            color="#07381d"
            size={30}
            onPress={() => KaydedilenlereGonder(item)}></Ionicons>

          <Text style={{fontSize: 14, marginLeft: 10}}>{item.Aciklama}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          padding: 25,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={_render}
      />
    </View>
  );
}

export default Blog;
