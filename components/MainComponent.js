import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from "./DishDetailComponent";
import {View, Platform} from "react-native";
import { createStackNavigator } from "react-navigation";
import "expo";

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    Dishdetail: {screen: Dishdetail}
},
{
    initialRouteName: "Menu",
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#222"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            color: "#eee"
        }
    }
})

class Main extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <View style= {{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : 20}}>
                <MenuNavigator /> 
            </View>
        );
    }
}

export default Main;
