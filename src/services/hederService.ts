import { apiGet } from "./axiosClient";



export interface Prop {
  id: string;
  name: string;
  slug?: string;
}

export async function fetchCategory(): Promise<Prop[]> {
  try {
    const data = await apiGet<any>("/the-loai");
    const items = data?.data?.items ?? data?.data ?? data ?? [];
    return items.map((x: any) => ({
      id: x._id ?? x.id ?? x.slug,
      name: x.name,
      slug: x.slug,
    }));
  } catch (err) {
    console.error("fetchCategory error:", err);
    return [];
  }
}

export async function fetchCountries(): Promise<Prop[]> {
  try {
    const res = await apiGet<any>("/quoc-gia");
    const list = res.data?.data ?? res.data ?? [];
    return Array.isArray(list)
      ? list.map((x: any) => ({
          id: x._id ?? x.id ?? x.slug,
          name: x.name,
          slug: x.slug,
        }))
      : [];
  } catch (error) {
    console.error("fetchCountries error:", error);
    return [];
  }
}