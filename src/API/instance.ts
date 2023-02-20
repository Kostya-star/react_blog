import axios from "axios";
import { baseRequest } from "./baseRequest";

export const instance = axios.create({
  baseURL: baseRequest
})