import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from "react-native"

const styles = StyleSheet.create({
    loadingView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    loadingText: {
        fontSize: 14,
        color: "#512dab",
        fontWeight: "bold"
    }
})

export const Loading = () => {
    return(
        <View style={styles.loadingView}>
            <ActivityIndicator/>
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    )
}