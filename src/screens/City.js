import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({weatherData}) => {
  const {
    wrapper,
    imageLayout,
    countryName,
    locationText,
    cityName,
    populationWrapper,
    populationText,
    sunTimes,
    timings,
  } = styles;

  const {country,name,population,sunrise,sunset} = weatherData
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require("../images/city.jpg")}
        style={imageLayout}
      >
        <Text style={[countryName, locationText]}>{country}</Text>
        <Text style={[cityName, locationText]}>{name}</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"users"}
            iconColor={"black"}
            bodyText={population}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={sunTimes}>
          <IconText
            iconName={"sunrise"}
            iconColor={"black"}
            bodyText={`Sunrise - ${moment.unix(sunrise).format('hh:mm:ss a')}`}
            bodyTextStyles={timings}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"black"}
            bodyText={`Sunset - ${moment.unix(sunset).format('hh:mm:ss a')}`}
            bodyTextStyles={timings}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  locationText: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  countryName: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 38,
  },
  cityName: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 28,
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    padding: 10,
    fontSize: 25,
  },
  sunTimes: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 40,
  },
  timings: {
    paddingHorizontal: 15,
  },
});

export default City;
