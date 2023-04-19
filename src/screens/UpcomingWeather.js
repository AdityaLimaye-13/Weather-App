import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import WeatherItems from "../components/WeatherItem";

const UpcomingWeather = ({weatherData}) => {
  const renderItems = ({ item }) => (
    <WeatherItems
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require("../images/cloud.png")}
        style={styles.image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItems}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "steelblue"
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
