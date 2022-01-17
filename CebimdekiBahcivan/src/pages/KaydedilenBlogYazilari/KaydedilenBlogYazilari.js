import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import axios from 'axios';

function KaydedilenBlogYazilari(props) {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      'http://192.168.1.106:45455/api/cebimdekiBahcivan/FavorilereEklenenBitkiyiGörüntüleme',
    );
    //setLoading(false);
    setData(response.data.content);
    console.log('res' + response.data.content);
  }

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
          <Ionicons name={'bookmark-outline'} color="#07381d" size={30} />
        </View>
        <View>
          <Text style={{fontSize: 14, marginLeft: 10}}>
            {item.BitkiAciklama}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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

export default KaydedilenBlogYazilari;
