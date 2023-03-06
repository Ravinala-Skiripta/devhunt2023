import { ApiResponse } from "../types/interface-api";
import { BASE_URL } from "./constant/url";
import axios from "axios";

// const axios = require("axios");

/***
 *@returns instance of axios
 */
const axiosProvider = axios.create({
  timeout: 120000, // 2 min
  baseURL: BASE_URL,
});

/**
 * @param data data to send
 * @param argument of data to check if form data or string
 */
export const datas = (data: Record<string, any>, arg = "application/json") => {
  if (arg === "application/json") {
    return JSON.stringify(data);
  } else if (arg === "multipart/form-data") {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  } else {
    return data;
  }
};

/**
 * @param url string url to call api post
 * @param data object to send
 * @param token token to send
 * @returns result of post response
 */
export const postData = async <T extends Record<string, any>>(
  url: string,
  data: T,
  contentType: "application/json" | "form-data",
  token: string
): Promise<ApiResponse<T>> => {
  return axiosProvider({
    method: "POST",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
      Accept: "application/json",
    },
    data: datas(data, contentType),
  });
};

export const patchData = async <T>(
  url: string,
  data: any,
  contentType: "application/json" | "form-data",
  token: string
): Promise<ApiResponse<T>> => {
  return axiosProvider({
    method: "PATCH",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
      Accept: "application/json",
    },
    data: datas(data, contentType),
  });
};
/**
 * @param url string url to call api post
 * @param token token to send
 * @returns result of get response
 */
export const getData = async <T>(
    url: string,
    token: string
    ): Promise<ApiResponse<T>> => {
  console.log("urlget", url);
  return axiosProvider({
    method: "get",
    url,
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    }
  });
};
/**
 * @param params object to send
 * @returns result of get response
 */
export const putData = async <T extends Record<string, any>>(
  url: string,
  data: T,
  contentType: "application/json" | "form-data",
  token: string
): Promise<ApiResponse<T>> => {
  return axiosProvider({
    method: "put",
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": contentType,
      Accept: "application/json",
    },
    data: datas(data, contentType),
  });
};

export const deleteData = async <T>(
  url: string,
  token: any
): Promise<ApiResponse<T>> => {
  return axiosProvider({
    method: "delete",
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
      Accept: "application/json",
    },
  });
};

export const axiosServices = {
  getData,
  postData,
  putData,
  deleteData,
  patchData,
};

//https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/
