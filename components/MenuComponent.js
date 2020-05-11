import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements";

function Menu(props){
    const renderMenuItem = ({item, index}) => {
        // setNativeProps = (nativeProps) => {
        //     _root.setNativeProps(nativeProps);
        //   }

        return(
            <ListItem 
                Component = {TouchableOpacity}
                key = {index}
                title = {item.name}
                subtitle = {item.description}
                leftAvatar = {{ source: require("./images/uthappizza.png")}}
                onPress = { () => props.onPress(item.id)}
                bottomDivider
                chevron = {false}
            />
        );
    };

    return(
        <FlatList 
            data = {props.dishes}
            renderItem = {renderMenuItem}
            keyExtractor = { item => item.id.toString()}
        />
    );
}

export default Menu;