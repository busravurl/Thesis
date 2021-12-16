import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList,Text, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';

import styles from './Suggest.style';

const Suggest =() => {
  // const [data, setData] = useState([]);


  // async function fetchData() {
  //   const response = await axios.get(
  //     'url'
  //   );
  //   setLoading(false);
  //   setData(response.data);
  // }

  // const render = ({[item]}) =>
  //   (
  //     <CardList 

        
  //       title= {item.title}
        
        
  //     />
  //   );
    
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
 

  return (
    <SafeAreaView style={styles.container}>
      
          
      <View style={styles.flatView}>
        {/* <FlatList 
          data={data} 
          renderItem={render}/> */}
          <CardList />
        
      </View>
    </SafeAreaView>
  );
};

export default Suggest;