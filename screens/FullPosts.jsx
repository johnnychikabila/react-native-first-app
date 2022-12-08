import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`
const PostTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`
const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`

export const FullPostScreen = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();
    const {id, title} = route.params;

    useEffect(() => {
        navigation.setOptions({
          title,
        });
    axios.get('https://638148db9440b61b0d154057.mockapi.io/Post/' + id)
    .then(({ data }) => {
      setData(data);
    })
    .catch((err) => {
        console.log(err);
        Alert.alert('error not get Post out api');
    }).finally(() => {
      setIsLoading(false);
    });
    }, [])

    if (isLoading) {
        return (
        <Loading />
      );
    };

    return (
        <View style={{padding: 20 }}>
            <PostImage source={{ uri: data.imageUrl }} />
            {/* <PostTitle>{data.title}</PostTitle> */}
            <PostText>{data.text}</PostText>
        </View>
    )

}