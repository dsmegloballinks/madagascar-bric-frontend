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
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/convert"),
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

export const analyticsGetCall = async () => {
  let params = {};
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-child-count"),
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

export const fokontanyGetCall = async (
  libelle_region,
  libelle_district,
  libelle_commune,
  libelle_fokontany
) => {
  let params = {};
  if (libelle_region) params.libelle_region = libelle_region;
  if (libelle_district) params.libelle_district = libelle_district;
  if (libelle_commune) params.libelle_commune = libelle_commune;
  if (libelle_fokontany) params.libelle_fokontany = libelle_fokontany;

  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-fokontany"),
    {
      // params,
      headers: {
        "Content-Type": "application/json",
      },
      "axios-retry": {
        retries: 5,
      },
    }
  );
};
