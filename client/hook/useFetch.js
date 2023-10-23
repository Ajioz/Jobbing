import React, { useState, useEffect } from "react";
import axios from "axios";
import { jobRoute } from "../utils";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [db, setDb] = useState('')


  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (query && query.job_id !== undefined) {
        const { data } = await axios.post(`${jobRoute}/${endpoint}`, query);
        setData(data);
      } else {
        const { data } = await axios.get(`${jobRoute}/${endpoint}`);
        setData(data.data);
        setDb(data.db);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const refresh = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refresh, db };
};

export default useFetch;
