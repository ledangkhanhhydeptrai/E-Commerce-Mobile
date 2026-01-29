import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import React from "react";
import { homeRequest } from "../homeSlice";
import { useFocusEffect } from "@react-navigation/native";

export default function useHome() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.home
  );
  useFocusEffect(
    React.useCallback(() => {
      dispatch(homeRequest());
    }, [])
  );
  return {
    data,
    loading,
    error
  };
}
