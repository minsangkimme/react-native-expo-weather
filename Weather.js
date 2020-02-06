import React, { Component } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "우산을 챙기세요",
        subtitle: "For more info look outside",
        icon: 'weather-rainy',
    },
    Clear: {
        colors:["#00C6FB", "#005BEA"],
        title: "맑은 날씨 예상",
        subtitle: "Clear Sky", 
        icon: 'weather-sunny',
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "번개위험! 방콕",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning',
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "구름 낀 날씨",
        subtitle: "I know, boring",
        icon: 'weather-cloudy',
    },
    Snow: {
        colors:["#7D2EFC", "#B9B6E5"],
        title: "눈이 내릴 예정",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy',
    },
    Drizzel: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzel",
        subtitle: "Is like rain 🌈",
        icon: 'weather-hail',
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is ..",
        icon: 'weather-hail',
    },
    Mist: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: 'weather-fog',
    },

}
export default function Weather({ temp, weatherName })  {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons 
                    color="white" size={144} 
                    name={weatherCases[weatherName].icon}>                        
                </MaterialCommunityIcons>
                <Text style={styles.temp}>{ temp }º</Text>
            </View> 
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
}
      

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    temp: {
        fontSize : 38,
        color: "white",   
        marginTop : 10,
    },
    upper : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lower : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        marginLeft: 20
    },
    title : {
        flex: 1,
        fontSize : 38,
        color: "white",   
        marginBottom : 20,
        marginTop: 40,        
        fontWeight : "300"
    },
    subtitle : {
        flex: 5,
        fontSize : 24,
        color: "white",   
        marginBottom : 20,
    }

})