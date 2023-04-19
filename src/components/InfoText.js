import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoText = (props) => {
  const {containerStyles, message1, message2, message1Styles, message2Styles } = props;
  return (
    <View style={containerStyles}>
      <Text style={message1Styles}>{message1}</Text>
      <Text style={message2Styles}>{message2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InfoText;
