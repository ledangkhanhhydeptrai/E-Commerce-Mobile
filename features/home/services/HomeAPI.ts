import { AxiosError } from "axios";
import { fetchBaseResponse } from "../../../config/api.config";
import { HomeResponse } from "../../../types/homeTypes";

export const getHomeAPI = async () => {
  try {
    const response = await fetchBaseResponse<HomeResponse>(
      `/api/public/product`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (response.data.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    const errors = error as AxiosError;
    throw errors;
  }
};
