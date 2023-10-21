import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
  Image,
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
  const [type, setType] = useState({ type: "", db: "Other" });

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
        onPress={() => handleClose("")}
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
    setType({ ...type, db: jobType.split(" ")[0] });
  };

  const fetchReact = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/jobs/fetchJobs");
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  // Run every 48 hours.  This logic automate the data fetching every two days
  // setInterval(fetchReact, 15000);
  // setInterval(fetchReact, 1000 * 60 * 60 * 1);
  // fetchReact();

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
        <ScrollView showsVerticalScrollIndicator={false}>
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
