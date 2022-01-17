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

import ContentInputModal from '../../components/modal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton';
const {width, height} = Dimensions.get('screen');

const Home = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [list, setlist] = React.useState([]);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(event) {
    handleInputToggle();
    sendContent(event);
  }

  const [bitkiAd, setBitkiAd] = useState('');
  const [notlar, setNotlar] = useState('');

  const onChangeBitkiAdHandler = bitkiAd => {
    setBitkiAd(bitkiAd);
  };

  const onChangeNotlarHandler = notlar => {
    setNotlar(notlar);
  };

  const sendContent = async event => {
    try {
      const response = await axios.post(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/BenimBahcemeBitkiEkleme',
        {
          bitkiAd,
          notlar,
        },
      );
      console.log(response);
      if (bitkiAd) {
        AsyncStorage.setItem('key', bitkiAd);
        setBitkiAd('');
        alert('data saved');
      } else {
        alert('bitkinizin adını ekleyin');
      }
      console.log(bitkiAd);
      if (notlar) {
        AsyncStorage.setItem('key', notlar);
        setNotlar('');
        alert('data saved');
      } else {
        alert('bitkinize not ekleyin');
      }
      console.log(notlar);
      //alert(bitkiAd + 'Artık Bahçende!')
    } catch (error) {
      alert(error.message);
    }
  };

  const getList = async event => {
    try {
      const response = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/BenimBahcem',
        {
          BitkiAd,
          Notlar,
        },
      );
      console.log(response);
      AsyncStorage.getItem('key').then(list => {
        setlist(list);
      });
      //alert(BitkiAd + 'Artık Bahçende!')
    } catch (error) {
      alert(error.message);
    }
  };

  // const _render = ({item, index}) => {
  //     const [data, setData] = useState([]);

  //     async function fetchData() {
  //         const response = await axios.get(
  //         'http://192.168.1.106:45455/api/cebimdekiBahcivan/BenimBahcem'
  //         );
  //         //setLoading(false);
  //         setData(response.data.content);
  //         console.log('res'+ response.data.content);
  //     }
  //     const _render = ({item, index}) => {
  //         return (

  //         <View style={{flexDirection: 'row', padding:25,marginBottom: 20 ,backgroundColor: 'rgba(225,225,225,0.18)' ,borderRadius: 12,
  //                         shadowColor: "#000",
  //                         shadowOffset: {
  //                             width:0,
  //                             height:10
  //                         },
  //                         shadowOpacity: .4,
  //                         shadowRadius: 10
  //                     }}>

  //                         <View>
  //                             <Text style ={{fontSize: 22, marginLeft: 10, color:"#18A558"}}>{item.Baslik}</Text>
  //                             <Text style ={{fontSize: 14, marginLeft: 10}}>{item.Aciklama}</Text>
  //                         </View>

  //                     </View>

  //         )

  //     }

  // }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <FlatList
                data={getList}
                //keyExtractor={(item)=> index.id()}
                contentContainerStyle={{
                    padding: 25,
                    paddingTop: StatusBar.currentHeight || 42
                    
                }}

                renderItem= {_render}
            /> */}
      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
