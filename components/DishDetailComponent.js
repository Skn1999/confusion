import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";

function RenderComments(props){
    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={{margin: 16}}>
                <Text style={{fontSize: 14}}>{ item.comment}</Text>
                <Text style={{fontSize: 12}}>{ item.rating} Start</Text>
                <Text style={{fontSize: 12}}>{ '-- ' + item.author + ", " + item.date}</Text>
            </View>
        )
    }

    return(
        <Card title="Comments"
        >
            <FlatList data={comments} renderItem = {renderCommentItem} keyExtractor = { (item) => item.id.toString()} />
        </Card>
    )
}

function RenderDish(props) {

    // setNativeProps = (nativeProps) => {
    //     _root.setNativeProps(nativeProps);
    // }

    const dish = props.dish;
    
        if (dish != null) {
            
            return(
                <Card
                    featuredTitle={dish.name}
                    image={require('./images/uthappizza.png')}
                >
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <Icon 
                        raised
                        reverse
                        name = {props.favorite ? "heart" : "heart-o"}
                        type = "font-awesome"
                        color = "#f50"
                        onPress = { () => props.favorite ? console.log("Already Favorite") : props.onPress()}
                    />
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments : COMMENTS,
            favorites: []
        }
    }

    markFavorite(dishId){
        this.setState({
            favorites : this.state.favorites.concat(dishId)
        })
    }

    static navigationOptions = {
        title: "Dish Details"
    }

    render(){
        const dishId = this.props.navigation.getParam("dishId", "");
        return(
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]} favorite={this.state.favorites.some(el => el === dishId)}
                            onPress = {() => this.markFavorite(dishId)}
                />
                <RenderComments comments = {this.state.comments.filter( comment => comment.id === dishId)} />
            </ScrollView>
            
            );
    }
}

export default Dishdetail;