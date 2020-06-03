import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "It's Raining Outside",
        subtitle: "Take Umbrella!",
        icon: "weather-rainy"
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "It's Sunny Day",
        subtitle: "Let's hang out!",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Stay home",
        icon: "weather-lightning"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "It's Cloudy",
        subtitle: "What a Boring Day:(",
        icon: "weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title: "It's Snowing",
        subtitle: "Do you wanna build a snowman?",
        icon: "weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It rains a little",
        icon: "weather-rainy"
    },
    Haze:{
        colors:["#D7D2CC", "#304352"],
        title: "Haze",
        subtitle: "Be careful while driving",
        icon: "weather-fog"
    },
    Mist:{
        colors:["#D7D2CC", "#304352"],
        title: "Mist",
        subtitle: "Be careful while driving",
        icon: "weather-fog"
    }
}

function Weather({ weatherName,temp }){
    console.log(weatherName)
    return(
        <LinearGradient
        colors={weatherCases[weatherName].colors} //from-to 색상 지정
        style={styles.container} 
        >
            <View style = {styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style ={styles.temp}>{temp}℃</Text>
            </View>
            <View style = {styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "transparent"
    },
    temp:{
        fontSize: 48,
        backgroundColor: "transparent",
        color:"white",
        marginTop: 20
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 20,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 220
    }

});