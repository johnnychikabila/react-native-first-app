import axios from 'axios';
import React from 'react';
import { Text, Alert, View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';


export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://638148db9440b61b0d154057.mockapi.io/Post')
    .then(({ data }) => {
      setItems(data);
    })
    .catch((err) => {
        console.log(err);
        Alert.alert('error get data out api');
    }).finally(() => {
      setIsLoading(false);
    });
  }

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator size='large'/>
      <Text style={{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 20,
      }}>Loading ...</Text>
    </View>
  );
};

  return (
    <View>
      
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
          <Post 
            title={item.title}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
            />
            </TouchableOpacity>
            }
          />
    </View>
  );
};
