import axios from "axios";

export const loginCall = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/login"),
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      "axios-retry": {
        retries: 5,
      },
    }
  );
};

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

export const analyticsGetCall = async (date) => {
  let params = {};
  if (date) params.date = date;
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

export const genderAnalyticsGetCall = async () => {
  let params = {};

  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/dashboard"),
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

export const graphAnalyticsGetCall = async (
  s_start_date,
  s_end_date,
  i_candle,
  region,
  district,
  commune,
  fokonatny
) => {
  let params = {};
  if (s_start_date) params.s_start_date = s_start_date;
  if (s_end_date) params.s_end_date = s_end_date;
  if (i_candle) params.i_candle = i_candle;
  if (region) params.region = region.value;
  if (district) params.district = district.value;
  if (commune) params.commune = commune.value;
  if (fokonatny) params.fokonatny = fokonatny.value;

  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat(
      "api/civil_register/get-seven-day-graph"
    ),
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

export const testPostCall = async (data) => {
  return await axios.post(
    "https://private-anon-6c0ab5a863-odkcentral.apiary-mock.com/v1/sessions",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      "axios-retry": {
        retries: 5,
      },
    }
  );
};
