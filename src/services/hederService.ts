import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://phimapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Prop {
  id: string;
  name: string;
  slug?: string;
}

export async function fetchCategory(): Promise<Prop[]> {
  try {
    const res = await axiosClient.get<Prop[]>("/the-loai/");
    return res.data;
  } catch (error) {
    console.error("fetchTheLoai error:", error);
    return [];
  }
}
export async function fetchCountries(): Promise<Prop[]> {
  try {
    const res = await axiosClient.get<Prop[]>("/quoc-gia/");
    return res.data;
  } catch (error) {
    console.error("fetchCountruy error:", error);
    return [];
  }
}