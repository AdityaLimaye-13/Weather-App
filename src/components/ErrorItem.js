import React from "react"
import { View,Text,StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons";

const ErrorItem = ()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Something went wrong</Text>
            <Feather name={'frown'} size={90} color={'white'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center"
    },
    message:{
        fontSize:30,
        color:"white",
        textAlign:"center"
    }
})

export default ErrorItem