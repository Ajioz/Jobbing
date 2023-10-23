import React, { useState, useEffect } from "react";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const jobTypes = ["FULLTIME", "PARTTIME", "CONTRACTOR"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick, setType, type }) => {
  const [activeJobType, setActiveJobType] = useState("");

  const greeting = () => {
    let myDate = new Date();
    let hrs = myDate.getHours();
    let greet;

    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

    return greet;
  };

  useEffect(() => {
    if(type.type === "") setActiveJobType("")
  }, [type.type])
  

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>{greeting()} </Text>
        <Text style={styles.welcomeMessage}>Find your tech jobs </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(txt) => setSearchTerm(txt)}
            placeholder="search jobs"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtn}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(prev => prev = item);
                setType({ ...type, type: item, flag:false });
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
