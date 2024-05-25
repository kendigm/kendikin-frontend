import { apiSlice } from "./apiSlices";

const USERS_URL = "/api";
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: `${USERS_URL}/products`,
        method: "GET",
      }),
    }),
    product: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useProductsQuery,useProductQuery } = userApiSlice;
