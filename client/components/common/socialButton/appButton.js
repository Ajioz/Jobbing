import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SocialButton = ({ onPress, icon, title, backgroundColor }) => (
  <View style={styles.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={styles.appButton}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#555",
  },
  appButton: {
    padding: 12,
  },
  appButtonText: {
    fontSize: 15,
    color:'#fff'
  },
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default SocialButton;


// const AppButton = () => {
//   return (
//     <View style={styles.screenContainer}>
//       <SocialButton
//         icon="facebook"
//         title="Connect with Me"
//         backgroundColor="#777"
//       />
//     </View>
//   );
// };
