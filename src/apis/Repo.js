import axios from "axios";

export const registrationsGetCall = async (page, limit) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-all"),
    {
      params,
      headers: {
        "Content-Type": "application/json",
      },
      "axios-retry": {
        retries: 5,
      },
    }
  );
};

export const filePostCall = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat("api/category/create"),
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      "axios-retry": {
        retries: 5,
      },
    }
  );
};
