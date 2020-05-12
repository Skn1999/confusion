import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import {View, Platform} from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import "expo";

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    Dishdetail: {screen: Dishdetail}
},
{
    initialRouteName: "Menu",
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#222",
        headerTitleStyle: {
            color: "#222"
        }
    }
})

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#222",
        headerTitleStyle: {
            color: "#222"
        }
    }
});


const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
      }
}, {
  drawerBackgroundColor: '#fff'
});

class Main extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <View style= {{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : 20}}>
                <MainNavigator /> 
            </View>
        );
    }
}

export default Main;
