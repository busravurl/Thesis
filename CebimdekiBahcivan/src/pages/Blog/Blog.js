import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, Dimensions, StatusBar} from 'react-native';
import axios from 'axios';
const { width, height } = Dimensions.get('screen');



function Blog() {
      const [data, setData] = useState([]);


    async function fetchData() {
        const response = await axios.get(
        'https://192.168.1.106:45457/api/cebimdekiBahcivan/blogYazisiGetir'
        );
        //setLoading(false);
        setData(response.data.content);
        console.log('res'+ response.data.content);
    }
    const _render = ({item, index}) => {
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
                             <Text style ={{fontSize: 22, marginLeft: 10, color:"#18A558"}}>{item.Baslik}</Text>
                             <Text style ={{fontSize: 14, marginLeft: 10}}>{item.Aciklama}</Text>
                         </View>
                        
                        
                    </View>
  
        )
    
    }

    useEffect(() => {
        fetchData();
        }, []);
   

    return (
        <View style= {{flex: 1, backgroundColor: '#fff'}}>
            <FlatList
                data={data}
                keyExtractor={(item)=> index.id()}
                contentContainerStyle={{
                    padding: 25,
                    paddingTop: StatusBar.currentHeight || 42
                    
                }}

                renderItem= {_render}
   
        />

    </View>
    );
};

export default Blog;