import { Text, View, ActivityIndicator } from "react-native";

export const Loading = () => {
    
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
    )
};