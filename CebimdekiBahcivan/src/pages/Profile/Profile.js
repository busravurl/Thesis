import React from 'react';
import {SafeAreaView, ScrollView, Text, View, ImageBackground} from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Profile () {
  const scrollView = React.useRef()

    return (
      <View style= {{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView 
          ref={scrollView}
          showsVerticalScrollIndicator= {false}
          contentContainerStyle= {{flexGrow: 1}}>
          
          <View style={{margin: 10}}>
              <ImageBackground style={{
                backgroundColor: '#f7fbf5',
                marginLeft: 100,
                marginBottom: 20,
                //paddingLeft: 10,
                height: 130,
                width: 130,
                borderRadius: 100,
                alignItems: 'center'
                 }}>
                <Ionicons name={'person-outline'} color="green" size={70} style={{margin:20 , height: 70,
                width: 70}}/>
              </ImageBackground>
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

export default Profile;