import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
const deviceSize = Dimensions.get('window');

const ContentInputModal = ({visible, onClose, onSend}) => {
    const [bitkiAd, setBitkiAd] = React.useState("");
    const [notlar, setNotlar] = React.useState("");

    function handleSend() {
        if(!bitkiAd && !notlar) {
            return;
        }

        onSend(bitkiAd && notlar);
        setBitkiAd(null);
        setNotlar(null);
    }

    return(
        <Modal 
            style={{justifyContent: 'flex-end', margin: 0}}
            isVisible={visible}
            swipeDirection="down" 
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={{
                backgroundColor: 'white',
                padding: 15,
                margin: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                height: deviceSize.height / 3,
            }}>
                <View style={{flex:1}}>
                    <TextInput 
                        placeholder="Bitkinizin Adını ekleyin" 
                        onChangeText={setBitkiAd}
                        multiline    
                    />
                    <TextInput 
                        placeholder="Bitkinize notunuzu ekleyin" 
                        onChangeText={setNotlar}
                        multiline    
                    />
                </View>
                 <Button text="Ekle" onPress={handleSend}/>
            </View>
        </Modal>
    );
};

export default ContentInputModal;