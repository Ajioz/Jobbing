import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = ({ type }) => {
  const router = useRouter();
  const { data, error, isLoading } = useGlobalContext();
  const [jobData, setJobData] = useState(data);

  console.log(jobData);

  const handleJobType = () => {
    const jobType = data.filter((item) => item.job_employment_type === type);
    setJobData((prev) => (prev = jobType));
  };

  useEffect(() => {
    handleJobType();
  }, [type]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={() => router.push(`/search/All`)}>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} colors={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something Went Wrong</Text>
        ) : jobData.length === 0 ? (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        ) : (
          jobData?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
