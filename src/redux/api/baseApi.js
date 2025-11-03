
import { createApi } from "@reduxjs/toolkit/query/react";
// import { getBaseUrl } from "../../helpers/config/envConfig";
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tags-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: tagTypesList
});
