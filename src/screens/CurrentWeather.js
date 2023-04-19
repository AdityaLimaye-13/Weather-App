import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import InfoText from "../components/InfoText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={70} color="black" style={{paddingBottom:10}}/>
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <InfoText
          containerStyles={highLowWrapper}
          message1={`High: ${temp_max}° `}
          message2={`Low: ${temp_min}°`}
          message1Styles={highLow}
          message2Styles={highLow}
        />
      </View>
      <InfoText
        containerStyles={bodyWrapper}
        message1={weather[0]?.description}
        message2={weatherType[weatherCondition]?.message}
        message1Styles={description}
        message2Styles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    fontSize: 48,
    color: "black",
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
    marginVertical:5
  },
  bodyWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  description: {
    fontSize: 32,
    textTransform:'capitalize'
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
