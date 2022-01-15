import React from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileEdit () {
  const scrollView = React.useRef()

    return (
      <View style= {{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView 
          ref={scrollView}
          showsVerticalScrollIndicator= {false}
          contentContainerStyle= {{flexGrow: 1}}>
          
          <View style={{margin: 10}}>
              <View>
                 <Image style={ {margin: 30, marginLeft: 111}} source={require('../../assets/plantprofile.png')} /> 

              </View>
              <View>
                <Input
                    placeholder="e-postanızı giriniz.."
                />
                <Input 
                    placeholder="şifrenizi giriniz.."
                />
                <Input 
                    placeholder="e-posta adresinizi giriniz.."
                />
                <Input 
                    placeholder="Telefon numaranızı giriniz.."
                />
                <Input 
                    placeholder="Yaşadığınız ilin plaka kodunu giriniz.."
                />
              </View>
              
              <Button text="Bilgilerimi Güncelle" />
              
              
          </View>
         </ScrollView>

      </View>
  );
} 

export default ProfileEdit;