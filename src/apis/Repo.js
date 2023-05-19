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

export const registrationsGetCall = async (
  page,
  limit,
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny,
  error_id
) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (s_start_date) params.s_start_date = s_start_date;
  if (s_end_date) params.s_end_date = s_end_date;
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;
  if (error_id) params.error_id = error_id;
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

export const uinFilePostCall = async (data) => {
  return await axios.post(
    // import.meta.env.VITE_BASE_URL.concat("api/excel_upload_log/upload-file"),
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/upload-uin-file"),
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

export const fileLogGetCall = async (page, limit, type) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (type) params.moduleType = type;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/excel_upload_log/get-all-logs"),
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

export const uinManagmentGetCall = async (page, limit, commune, niu_status) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (commune) params.commune = commune.label;
  if (niu_status || niu_status == 0) params.niu_status = niu_status;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-uin"),
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

export const communeGetCall = async () => {
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-commune"),
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

export const genderAnalyticsGetCall = async (
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny
) => {
  let params = {};
  if (s_start_date) params.s_start_date = s_start_date;
  if (s_end_date) params.s_end_date = s_end_date;
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;

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
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;

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

export const getMapsLatLng = async (
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny
) => {
  let params = {};
  if (s_start_date) params.s_start_date = s_start_date;
  if (s_end_date) params.s_end_date = s_end_date;
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-lat-long"),
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

export const usersGetCall = async (page, limit) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-all-users"),
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

export const userPostCall = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/sign-up"),
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

export const uinTrackingPostCall = async (data) => {
  return await axios.patch(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/update"),
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

export const updateUserPostCall = async (data) => {
  return await axios.patch(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/update-user"),
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

export const updateUserStatusPostCall = async (data) => {
  return await axios.patch(
    import.meta.env.VITE_BASE_URL.concat(
      "api/civil_register/update-user-status"
    ),
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

export const deleteUser = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/delete"),
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

export const registrarGetCall = async (page, limit) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/registrar_register/get-all"),
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

export const registrarAppointmentsGetByIdCall = async (page, limit, id) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (id) params.id = id;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat(
      "api/registrar_register/get-appointment-by-registrar-id"
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

export const registrarPostCall = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat("api/registrar_register/create"),
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

export const updateRegistrarPostCall = async (data) => {
  return await axios.patch(
    import.meta.env.VITE_BASE_URL.concat(
      "api/registrar_register/update-registrar"
    ),
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

export const registrarAppointmentPostCall = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat(
      "api/registrar_register/create-appointment"
    ),
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

export const registrarUpdateAppointmentPostCall = async (data) => {
  return await axios.patch(
    import.meta.env.VITE_BASE_URL.concat(
      "api/registrar_register/update-appointment"
    ),
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

export const deleteRegistrar = async (data) => {
  return await axios.post(
    import.meta.env.VITE_BASE_URL.concat(
      "api/registrar_register/delete?id=" + data.id
    ),
    // data,
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

export const fetchOdkRecordsGetCall = async () => {
  let params = {};

  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/fetch-file"),
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

export const niuTrackingGetCall = async (
  page,
  limit,
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny,
  niuStatus
) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (s_start_date) params.s_start_date = s_start_date;
  if (s_end_date) params.s_end_date = s_end_date;
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;
  if (niuStatus) params.niuStatus = niuStatus.value;
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

export const testGetCall = async () => {
  let params = {};
  params.id = 20230422;

  return await axios.get(
    "https://private-anon-6c0ab5a863-odkcentral.apiary-mock.com/v1/projects",
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
