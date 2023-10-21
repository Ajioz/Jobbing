import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
} from "react-native";

import { images, icons, COLORS } from "../../constants";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../../components";
import SocialButton from "../../components/common/socialButton/appButton";
import Icon from "react-native-vector-icons/FontAwesome";


const ModalScreen = () => {
  
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.replace("/")}
            />
          ),
          headerTitle: "",
        }}
      />
      <View style={stylez.container}>
        <View style={stylez.viewPortUp}>
          <Image
            source={images.profile}
            style={stylez.img}
            resizeMode="contain"
          />
        </View>

        <View style={stylez.viewPortMid}>
          <Text style={stylez.textTitle}> Welcome to Jobbing </Text>
          <Text style={stylez.textView}>
            Jobbing is a mobile app that compiles the latest jobs posted on
            different platforms within the tech industry into a single app. Our
            goal is to simplify the job search process by providing a
            one-stop-shop for job seekers. By staying on this app, you can stay
            updated on the latest job postings and apply for them with ease.
          </Text>
        </View>

        <View style={stylez.viewPortBottom}>
          <Text style={stylez.textFooter}>
            Design with <Icon name="heart" size={20} color="#900" /> by Ajioz
          </Text>
          <SocialButton
            icon="linkedin"
            title="Connect with Me"
            backgroundColor="#0A66C2"
            onPress={() => Linking.openURL("https://www.linkedin.com/in/ajioz")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylez = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "space-between",
    marginBottom: 20,
  },
  viewPortUp: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    width: "100%",
  },
  viewPortMid: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    width: "100%",
  },
  viewPortBottom: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
    width: "100%",
  },
  textTitle: {
    fontFamily: "serif",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "#333",
    padding: 30,
  },
  textView: {
    fontFamily: "monospace",
    fontWeight: 600,
    width: "100%",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 16,
    color: "#000",
    padding: 30,
  },
  textFooter: {
    fontFamily: "serif",
    width: "100%",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 16,
    fontWeight: 100,
    color: "#333",
    padding: 30,
  },

  img: {
    width: 120,
    height: 120,
  },
});

export default ModalScreen;
