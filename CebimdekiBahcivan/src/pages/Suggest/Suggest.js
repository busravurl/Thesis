import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList,Text, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';

import styles from './Suggest.style';

function Suggest() {
  const [data, setData] = useState([]);


  async function fetchData() {
    const response = await axios.get(
      'https://192.168.1.106:45455/api/cebimdekiBahcivan/BitkiOnerileri'
    );
    setData(response.data.content);
  }
  const render = ({item, index}) =>
    {
      return (
           
          <View style={{flexDirection: 'row', padding:25,marginBottom: 20 ,backgroundColor: 'rgba(225,225,225,0.18)' ,borderRadius: 12,
                        shadowColor: "#000", 
                        shadowOffset: {
                            width:0,
                            height:10
                        },
                        shadowOpacity: .4,
                        shadowRadius: 10
                    }}>
                         

                         <View>
                             <Text style ={{fontSize: 22, marginLeft: 10, color:"#18A558"}}>{item.BitkiAd}</Text>
                         </View>
                        
                        
                    </View>
  
        )
    };
    
    useEffect(() => {
      fetchData();
    }, []);
 

  return (
    <SafeAreaView style={styles.container}>
      
          
      <View style={styles.flatView}>
        <FlatList 
          data={data} 
          renderItem={render}/>
        
      </View>
    </SafeAreaView>
  );
};

export default Suggest;