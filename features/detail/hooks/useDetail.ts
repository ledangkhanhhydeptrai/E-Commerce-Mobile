import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import React from "react";
import { getDetailRequest } from "../detailSlice";
import { useFocusEffect } from "@react-navigation/native";
import { AppDispatch } from "../../../redux/store";

export default function useDetail(id: string) {
  const { product, loading, error } = useSelector(
    (state: RootState) => state.detail
  );

  const dispatch = useDispatch<AppDispatch>();

  useFocusEffect(
    React.useCallback(() => {
      if (!id) return; // 🔥 CỰC KỲ QUAN TRỌNG
      dispatch(getDetailRequest(id));
    }, [dispatch, id])
  );

  return { product, loading, error };
}
