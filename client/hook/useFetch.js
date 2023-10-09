import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // console.log(query)
      if (query && query.job_id !== undefined) {
        const response = await axios.post(
          `http://localhost:3005/jobs/${endpoint}`,
          query
        );
        setData(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:3005/jobs/${endpoint}`
        );
        setData(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      Alert.alert("Oops!", `Seems like we ran into error\n${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refresh };
};

export default useFetch;
