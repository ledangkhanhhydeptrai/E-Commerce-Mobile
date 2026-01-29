import { AxiosError } from "axios";
import { fetchBaseResponse } from "../../../config/api.config";
import { HomeResponseForId } from "../../../types/homeTypes";
export const getDetailAPI = async (id: string) => {
  try {
    const response = await fetchBaseResponse<HomeResponseForId>(
      `/api/public/product/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.data;
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
