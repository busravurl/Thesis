import React, {useState} from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
import axios from 'axios';
const deviceSize = Dimensions.get('window');

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [BitkiAd, setBitkiAd] = React.useState('');
  const [Notlar, setNotlar] = React.useState('');
  const [data, setData] = useState([]);
  let KullaniciAdi = '';

  // const onChangeBitkiAdHandler = BitkiAd => {
  //   setBitkiAd(BitkiAd);
  // };

  // const onChangeNotlarHandler = Notlar => {
  //   setNotlar(Notlar);
  // };

  async function BitkiBilgileriniGuncelle() {
    try {
      const response1 = await axios.get(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/SonKullaniciGetir',
      );
      KullaniciAdi = response1.data.content[0].KullaniciAdi;
      const response = await axios.post(
        'http://192.168.1.45:45455/api/cebimdekiBahcivan/BenimBahcemeBitkiEkleme',
        {
          KullaniciAdi,
          BitkiAd,
          Notlar,
        },
      );

      if (response.data.state === 'NOK') {
        alert(response.data.content);
      } else {
        alert(response.data.content);
      }

      onSend(BitkiAd && Notlar);
      setBitkiAd(null);
      setNotlar(null);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Modal
      style={{justifyContent: 'flex-end', margin: 0}}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          margin: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: deviceSize.height / 3,
        }}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Bitkinizin Adını ekleyin"
            onChangeText={setBitkiAd}
            value={BitkiAd}
            multiline
          />
          <TextInput
            placeholder="Bitkinize notunuzu ekleyin"
            onChangeText={setNotlar}
            value={Notlar}
            multiline
          />
        </View>
        <Button text="Ekle" onPress={BitkiBilgileriniGuncelle} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
