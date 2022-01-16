import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, Dimensions, StatusBar} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('screen');
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Search.style';

import Input from '../../components/Input/Input';

function Search() {

    const [filteredData, setfilteredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState("");
    const [BitkiAd, setBitkiAd] = useState("");


    const KaydedilenlereGonder = async (event) => {
        try {
        const response = await axios.post('http://192.168.1.106:45455/api/cebimdekiBahcivan/BitkiyiFavorilereEkleme', {
            BitkiAd
        });
        console.log(response)
            if( BitkiAd) {
            AsyncStorage.setItem('key', BitkiAd);
            setBitkiAd(BitkiAd);
            alert('data saved'); 
            } else {
            alert('boş geçmeyin')
            }
            console.log(BitkiAd);

        alert(BitkiAd + 'kaydedilenler sayfanızda!')
        } catch (error) {
        alert(error.message);
        
        }
    };




    useEffect(() => {
        fetchData();
        return () => {

        }
    }, [])

    async function fetchData() {
        const response = await axios.get(
        'http://192.168.1.106:45455/api/cebimdekiBahcivan/Bitkilistele'
        );
        //setLoading(false);
        setfilteredData(response.data.content);
        setmasterData(response.data.content);
        console.log('res'+ response.data.content);
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.BitkiAd ? 
                   item.BitkiAd.toUpperCase() 
                   : ''.toUpperCase()

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            setsearch(text);
        }else {
            setfilteredData(masterData);
            setsearch(text);
        }
    }

    const _render = ({item}) => {
        return (
           
          <View style={{ justifyContent: 'center', padding:15,marginBottom: 20 }}>
                         
                        <View style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10}}>
                                
                            <View >
                                <Text style ={{fontSize: 22, marginLeft: 10, color:"#18A558"}}>{item.BitkiAd.toUpperCase()}</Text>
                                <Text style ={{fontSize: 14, marginLeft: 10}}>{item.Ad}</Text>
                            </View>
                            <View>
                                <Ionicons 
                                name={'bookmark-outline'} 
                                color= "#07381d" 
                                size={30} 
                                onPress={(BitkiAd) => KaydedilenlereGonder(BitkiAd)}/>
                            </View>
                        </View>
                         <View>
                            <Text style ={{fontSize: 14, marginLeft: 10}}>{item.BitkiAciklama}</Text>
                         </View>
                        
                        
                    </View>
  
        )
    
    }


 
    return(
        <SafeAreaView style={styles.container}>
            <View >
                <Input 
                icon="search-outline" 
                placeHolder="Search.."
                value={search}
                underLineColorAndroid= "transparent"
                onChangeText= {(text) => searchFilter(text)}
                />
            </View>
            <View>
                <FlatList
                data={filteredData}
                keyExtractor={(item)=> item.id}
                contentContainerStyle={{
                    padding: 25,
                    paddingTop: StatusBar.currentHeight || 42
                    
                }}
                renderItem= {_render}
   
        />
            </View>
            
        </SafeAreaView>
    );
};

export default Search;