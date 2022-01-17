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
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Search.style';

import Input from '../../components/Input/Input';

function Search(props) {
  const [filteredData, setfilteredData] = useState([]);
  const [data, setmasterData] = useState([]);
  const [search, setsearch] = useState('');
  const [BitkiAd, setBitkiAd] = useState('');
  let KullaniciAdi = '';

  async function KaydedilenlereGonder(item) {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.post(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/BitkiyiFavorilereEkleme',
        {
          BitkiAd: item.BitkiAd,
          KullaniciAdi,
        },
      );

      if (response.data.state === 'NOK') {
        alert(response.data.content);
      } else {
        setMasterData(response.data.content);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  async function fetchData() {
    const response1 = await axios.get(
      'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
    );
    KullaniciAdi = response1.data.content[0].KullaniciAdi;
    const response = await axios.get(
      'http://192.168.1.45:45455/api/cebimdekiBahcivan/Bitkilistele',
    );
    if (response.data.state === 'NOK') {
      alert(response.data.content);
    } else {
      setfilteredData(response.data.content);
      setmasterData(response.data.content);
    }
  }

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.BitkiAd
          ? item.BitkiAd.toUpperCase()
          : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setsearch(text);
    } else {
      setfilteredData(masterData);
      setsearch(text);
    }
  };

  const _render = ({item}) => {
    return (
      <View style={{justifyContent: 'center', padding: 15, marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View>
            <Text style={{fontSize: 22, marginLeft: 10, color: '#18A558'}}>
              {item.BitkiAd.toUpperCase()}
            </Text>
            <Text style={{fontSize: 14, marginLeft: 10}}>{item.Ad}</Text>
          </View>
          <View>
            <Ionicons
              name={'bookmark-outline'}
              color="#07381d"
              size={30}
              onPress={KaydedilenlereGonder(item.Id)}></Ionicons>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 14, marginLeft: 10}}>
            {item.BitkiAciklama}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Input
          icon="search-outline"
          placeHolder="Search.."
          value={search}
          underLineColorAndroid="transparent"
          onChangeText={text => searchFilter(text)}
        />
      </View>
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            padding: 25,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          renderItem={_render}
        />
      </View>
    </SafeAreaView>
  );
}

export default Search;
