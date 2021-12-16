import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, View, Dimensions, StatusBar} from 'react-native';
const { width, height } = Dimensions.get('screen');

function Blog() {
     const [plants, setPlants] = useState([
        {name: 'Monstera ',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', key: '1'},
        {name: 'Aloe Vera',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', key: '2'},
        {name: 'Succulents',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', key: '3'},
        {name: 'ZZ Plant ',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , key: '4'},
        {name: 'Pilea ',title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', key: '5'},
    ]);

    return (
        <View style= {{flex: 1, backgroundColor: '#fff'}}>
            <FlatList
                data={plants}
                //keyExtractor={(item)=> index.id()}
                contentContainerStyle={{
                    padding: 25,
                    paddingTop: StatusBar.currentHeight || 42
                    
                }}

                renderItem= {({item}) =>{
                    return <View style={{flexDirection: 'row', padding:25,marginBottom: 20 ,backgroundColor: 'rgba(225,225,225,0.3)' ,borderRadius: 12,
                        shadowColor: "#000", 
                        shadowOffset: {
                            width:0,
                            height:10
                        },
                        shadowOpacity: .4,
                        shadowRadius: 10
                    }}>
                         

                         <View>
                             <Text style ={{fontSize: 22, marginLeft: 10}}>{ item.name}</Text>
                             <Text style ={{fontSize: 14, marginLeft: 10}}>{ item.title}</Text>
                         </View>
                        
                        
                    </View>
            }}
   
        />

    </View>
    );
};

export default Blog;