import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends React.Component{
    static navigationOptions = {
        title: "Home"
    }
    render(){
        return(
            <View style = {styles.padding}>
                <Text>
                    This is the Home Page.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    padding: {
        padding: "16px",
    }
})

export default Home