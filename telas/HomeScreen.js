import React from "react";
import {View, Text, Button} from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
            title='Ir ao Detalhes'
            onPress={() => navigation.navigate('Detalhes')}
            />
        </View>
    );
}
  
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default HomeScreen;