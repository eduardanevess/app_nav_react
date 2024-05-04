import React from "react";
import {View, Text, Button} from 'react-native';

function DetailsScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title='Voltar'
          onPress={() => navigation.goBack()}
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

export default DetailsScreen;