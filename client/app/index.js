import React, { useRef, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
  Alert,
  BackHandler,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { images, icons, COLORS, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
} from "../components";
import styles from "../styles/search";

const queries = [
  "Reactjs Jobs",
  "VueJs Jobs",
  "Angular Jobs",
  "Nodejs Jobs",
  "Python Jobs",
  "Java Jobs",
  "GoLang Jobs",
  "PHP Jobs",
  "DotNet Jobs",
  "Other Tech jobs",
];

const Home = () => {
  const drawer = useRef(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState({ type: "", db: "Other", flag: false });
  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh((prev) => !prev);
    setTimeout(() => setRefresh((prev) => !prev), 1000);
    router.replace("/");
  };

  const trackBack = () => {
    router.replace("/");
    BackHandler.exitApp();
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Spot On!", "You are catching up great", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Continue",
          onPress: () => trackBack(),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => true;
  }, []);

  const navigationView = () => (
    <View style={[stylez.container, stylez.navigationContainer]}>
      {queries.map((query, index) => (
        <View key={index} style={stylez.itemize}>
          <Text style={stylez.paragraph}>{query}</Text>
          <TouchableOpacity
            style={styles.jobFindBtn}
            onPress={() => handleClose(query)}
          >
            <Image
              source={icons.chevronRight}
              style={styles.paginationImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => handleClose("Other")}
      >
        <Image
          source={icons.left}
          style={styles.backImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );

  const handleClose = (jobType) => {
    drawer.current.closeDrawer();
    setType({ ...type, db: jobType.split(" ")[0], flag: true, type: "" });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={navigationView}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
                handlePress={() => drawer.current.openDrawer()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
                handlePress={() => router.push(`/modal/id`)}
              />
            ),
            headerTitle: "",
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={pullMe} />
          }
        >
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setType={setType}
              type={type}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />
            <Popularjobs />
            <Nearbyjobs type={type} />
          </View>
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

const stylez = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "space-around",
  },
  navigationContainer: {
    backgroundColor: "#fff",
  },
  itemize: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 2,
    backgroundColor: "azure",
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  paragraph: {
    padding: 6,
    marginLeft: 35,
    fontSize: 18,
  },
});

export default Home;
