import React from 'react';
import {SafeAreaView, Image, TouchableOpacity, Text, View, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input/Input';
//import Button from '../../components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile ({navigation}) {
    

    return (
      <SafeAreaView style= {{flex: 1, backgroundColor: '#fff'}}>

          <View >
              <View>
                 <Image style={ {margin: 30, marginLeft: 111}} source={require('../../assets/plantprofile.png')} /> 

              </View>

              <TouchableOpacity
                style={{
                  padding: 8,
                  margin: 10,
                  borderRadius: 20,
                  borderColor: 'gray',
                  marginLeft: 30
                  //alignItems: 'center',
                  
                }}
                onPress={() => navigation.navigate('ProfileEditPage')}>
                
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Ionicons name={'person-outline'} color="gray" size={22}/>
                    <Text style={{paddingLeft: 15, fontSize: 18}}>Profil Bilgilerim</Text>
                  </View>
                  
                
                
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 8,
                  margin: 10,
                  borderRadius: 20,
                  borderColor: 'gray',
                  marginLeft: 30
                  
                }}
                onPress={() => navigation.navigate('KaydedilenlerPage')}>
                
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Ionicons name={'bookmarks-outline'} color="gray" size={22}/>
                    <Text style={{paddingLeft: 15, fontSize: 18}}>Kaydedilenler</Text>
                  </View>
                  
                
                
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 8,
                  margin: 10,
                  borderRadius: 20,
                  borderColor: 'gray',
                  marginLeft: 30
                  
                }}
               // onPress={}
               >
                
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <Ionicons name={'log-out-outline'} color="gray" size={22} />
                    <Text style={{paddingLeft: 18, fontSize: 18}}>Çıkış Yap</Text>
                  </View>
                  
                
                
              </TouchableOpacity>
          </View>


      </SafeAreaView>
   );
} 

export default Profile;