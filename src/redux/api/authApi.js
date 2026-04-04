import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: (arg) => ({
        url: `${AUTH_URL}/all-users`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response) => {
        return {
          users: response,
        };
      },
      providesTags: ["auth"],
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        data: loginData,
        credentials:'includes'
      }),
      invalidatesTags: ["auth"],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    user: build.query({
      query: (id) => {
        return {
          url: `${AUTH_URL}/${id}`,
          method: "GET",
        };
      },
      providesTags: ["auth", 'update','signin'],
    }),
    sendEmailOtp: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/send-email-otp`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/check-otp`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    updatePassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/update-password`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    forgotPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/update/${data.id}`,
        method: "PATCH",
        data: data.body,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: ["auth"],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `${AUTH_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
  overrideExisting: false,
});

export const { useUsersQuery,
  useSendEmailOtpMutation,
  useVerifyOtpMutation,
  useUpdatePasswordMutation,
  useForgotPasswordMutation,
  useUserLoginMutation,
  useCreateUserMutation,
  useUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation } = authApi;
