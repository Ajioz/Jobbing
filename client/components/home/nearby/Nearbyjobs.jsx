import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hook/useFetch";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = ({ type }) => {

  const router = useRouter();
  const { data, isLoading, error, refresh, db } = useFetch(type.db);
  const [ jobData, setJobData ] = useState(data);

  const handleJobType = () => {
    const jobType = data.filter(
      (item) => item.job_employment_type === type.type
    );
    setJobData((prev) => (prev = jobType));
  };

  useEffect(() => {
    handleJobType();
  }, [type.type]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Job You Might be Interested In</Text>
        <TouchableOpacity onPress={() => router.push(`/search/All`)}>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} colors={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something Went Wrong</Text>
        ) : jobData.length === 0 && type.type === "" ? (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() =>
                router.push({
                  pathname: `job-details/${job.job_id}`,
                  params: { source: db },
                })
              }
            />
          ))
        ) : (
          jobData?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() =>
                router.push({
                  pathname: `job-details/${job.job_id}`,
                  params: { source: db },
                })
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
