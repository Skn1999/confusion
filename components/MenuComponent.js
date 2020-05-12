import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements";
import {DISHES} from "../shared/dishes";

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            dishes: DISHES
        }
    }

    static navigationOptions = {
        title: "Menu"
    }

    render(){
        const renderMenuItem = ({item, index}) => {
            return(
                <ListItem 
                    Component = {TouchableOpacity}
                    key = {index}
                    title = {item.name}
                    subtitle = {item.description}
                    leftAvatar = {{ source: require("./images/uthappizza.png")}}
                    onPress = { () => navigate("Dishdetail", {dishId: item.id})}
                    bottomDivider
                    chevron = {false}
                />
            );
        };

        const { navigate} = this.props.navigation;

        return(
            <FlatList 
                data = {this.state.dishes}
                renderItem = {renderMenuItem}
                keyExtractor = { item => item.id.toString()}
            />
        );
    }
    
}

export default Menu;