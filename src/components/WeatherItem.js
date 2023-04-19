import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { weatherType } from "../utilities/weatherType";

const WeatherItems = (props) => {
  const {items,dateTextWrapper,date,temp} = styles
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={items}>
      <Feather name={weatherType[condition]?.icon} size={28} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('DD-MM-YY')}</Text>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(
        max
      )}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: "indianred",
    borderWidth: 3,
    borderRadius: 8,
  },
  temp: {
    color:'white',
    fontSize: 18,
    fontWeight:'800'
  },
  date: {
    color:'white',
    fontSize: 18,
  },
  dateTextWrapper:{
    flexDirection:"column"
  }
});

export default WeatherItems;
