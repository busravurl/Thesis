import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  let KullaniciAdi = '';

  async function fetchData() {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.get(
        `http://192.168.1.45:45455/api/cebimdekiBahcivan/BenimBahcemBitkiListele?KullaniciAdi=${KullaniciAdi}`,
      );

      if (response.data.state === 'NOK') {
        alert(response.data.content);
      } else {
        setData(response.data.content);
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
            {item.BitkiAd}
          </Text>
          <Text style={{fontSize: 14, marginLeft: 10}}>{item.Notlar}</Text>
        </View>
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View>
        <Text style={{fontSize: 22, marginLeft: 10, color: '#18A558'}}>
          Benim Bahçemdeki Bitkiler
        </Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          data={data}
          keyExtractor={item => item.Id}
          contentContainerStyle={{
            padding: 25,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          renderItem={_render}
        />
      </View>
    </>
  );
}

export default Home;
