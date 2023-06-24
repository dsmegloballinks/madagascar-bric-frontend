import axios from "axios";

/**
 * This is an asynchronous function that makes a POST request to a login endpoint with retry
 * functionality.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * It contains the user's login credentials such as username and password.
 * @returns The `loginCall` function is returning a promise that resolves to the result of an axios
 * POST request to the URL specified in the `VITE_BASE_URL` environment variable, with the `data`
 * parameter as the request body and the specified headers and retry options.
 */
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

/**
 * This is an asynchronous function that makes a GET request to a civil register API endpoint with
 * various parameters.
 * @param page - The page number of the results to retrieve.
 * @param limit - The maximum number of results to be returned per page.
 * @param s_start_date - The start date for filtering registrations.
 * @param s_end_date - This parameter is used to filter registrations by end date. It is a string value
 * representing the end date in the format "YYYY-MM-DD".
 * @param region - The region parameter is a value that represents a specific region in a country. It
 * is used to filter the results of the API call to retrieve civil registration data.
 * @param district - The district parameter is a value that represents the district code for filtering
 * civil registrations. It is used in the registrationsGetCall function to filter the results based on
 * the district code.
 * @param commune - The `commune` parameter is a filter for the code of the commune in the civil
 * register. It is used to retrieve registrations that belong to a specific commune.
 * @param fokonatny - It seems like "fokonatny" is a variable that holds a value for a specific code
 * related to a location. It is used as a parameter in the "registrationsGetCall" function to filter
 * the results of a GET request to an API endpoint that retrieves civil registration data.
 * @param error_id - The error_id parameter is used to filter registrations based on the error ID
 * associated with them.
 * @returns The function `registrationsGetCall` is returning a promise that resolves to the result of
 * an axios GET request to the URL specified in `import.meta.env.VITE_BASE_URL` concatenated with the
 * string "api/civil_register/get-all". The request includes parameters specified by the function
 * arguments and headers with "Content-Type" set to "application/json". The axios-retry library is also
 * being used to
 */
export const registrationsGetCall = async (
  page,
  limit,
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny,
  error_id,
  niu,
  name
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
  if (niu) params.search = niu;
  if (name) params.search = name;
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

export const uinTrackingGetCall = async (
  page,
  limit,
  s_start_date,
  s_end_date,
  region,
  district,
  commune,
  fokonatny,
  error_id,
  niu,
  name
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
  if (niu) params.search = niu;
  if (name) params.search = name;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/get-all-tracking"),
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

/**
 * The function performs a POST request to a specified API endpoint with provided data using Axios
 * library.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * In this case, it is likely a file that needs to be converted by the server.
 * @returns The function `filePostCall` is returning a promise that resolves to the result of an axios
 * POST request to the URL specified in the `VITE_BASE_URL` environment variable concatenated with the
 * string `"api/civil_register/convert"`. The request includes the `data` parameter as the request body
 * and sets the `"Content-Type"` header to `"multipart/form-data"`. It also sets the `"
 */
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

/**
 * The function sends a POST request to upload a UIN file to a specified API endpoint using Axios.
 * @param data - The data parameter is the file data that needs to be uploaded to the server. It is of
 * type FormData, which is a built-in JavaScript object that allows easy construction of key-value
 * pairs representing form fields and their values, including files.
 * @returns The function `uinFilePostCall` is returning a promise that resolves to the result of an
 * axios POST request to the URL specified in the `import.meta.env.VITE_BASE_URL` environment variable
 * concatenated with the string `"api/civil_register/upload-uin-file"`. The request includes the `data`
 * parameter as the request body and sets the `"Content-Type"` header to `"multipart/form-data"
 */
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

/**
 * This is an asynchronous function that makes a GET request to retrieve logs with optional parameters
 * for page, limit, and type.
 * @param page - The page number of the logs to retrieve.
 * @param limit - The maximum number of logs to be returned in a single API call.
 * @param type - The `type` parameter is used to filter the logs by module type. It is an optional
 * parameter that can be passed to the `fileLogGetCall` function. If provided, it will be included in
 * the request URL as a query parameter with the key `moduleType`.
 * @returns the result of an axios GET request to a specific API endpoint with optional query
 * parameters for page, limit, and type. The request includes headers for content type and axios-retry
 * options for retrying failed requests. The function is marked as async, indicating that it returns a
 * Promise that resolves to the response data.
 */
export const fileLogGetCall = async (page, limit, type, file) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (type) params.moduleType = type;
  if (file) params.search = file;
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

/**
 * The function performs a GET request to retrieve UIN data from a civil register API with optional
 * parameters for page, limit, commune, and NIU status.
 * @param page - The page number of the results to retrieve.
 * @param limit - The limit parameter is used to specify the maximum number of results to be returned
 * per page in the API call.
 * @param commune - The `commune` parameter is an object that contains the value of the commune to
 * filter the results by. It is used to filter the UINs (Unique Identification Numbers) returned by the
 * API call.
 * @param niu_status - niu_status is a parameter that is used to filter the results of the API call
 * based on the status of the National Identification Number (NIU). It can take a value of 0 (for
 * inactive NIUs) or 1 (for active NIUs). If niu_status is not provided
 * @returns The function `uinManagmentGetCall` is returning a Promise that resolves to the result of an
 * axios GET request to the URL specified in `import.meta.env.VITE_BASE_URL` concatenated with the
 * string "api/civil_register/get-uin". The request includes any parameters specified in the `params`
 * object and the header "Content-Type" set to "application/json". The request also includes an
 */
export const uinManagmentGetCall = async (
  page,
  limit,
  commune,
  niu_status,
  niu
) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (commune) params.commune = commune.value;
  if (niu_status || niu_status == 0) params.niu_status = niu_status;
  if (niu) params.search = niu;

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

/**
 * The function performs a GET request to retrieve child count data from a civil register API, with
 * optional parameters for date, region, district, commune, and fokonatny.
 * @param date - The date for which the analytics data is being requested.
 * @param region - The region parameter is an object that contains the value of the selected region. It
 * is used to filter the analytics data based on the selected region.
 * @param district - The district parameter is a code that represents a specific district within a
 * region. It is used to filter the results of the analyticsGetCall function to only include data from
 * that district.
 * @param commune - The commune parameter is a value that represents a specific commune in a region or
 * district. It is used as a filter to retrieve data related to that specific commune.
 * @param fokonatny - The `fokonatny` parameter is a code that represents a specific Fokontany (the
 * smallest administrative division) in Madagascar. It is used as a filter to retrieve child count data
 * from the civil register API.
 * @returns This function returns a Promise that resolves to the result of an axios GET request to a
 * specific API endpoint with optional query parameters. The result is an object containing information
 * about the number of children registered in a specific region, district, commune, or fokonatny on a
 * specific date.
 */
export const analyticsGetCall = async (
  date,
  region,
  district,
  commune,
  fokonatny
) => {
  let params = {};
  if (date) params.date = date;
  if (region) params.code_region = region.value;
  if (district) params.code_district = district.value;
  if (commune) params.code_commune = commune.value;
  if (fokonatny) params.code_fokonatany = fokonatny.value;
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

/**
 * This is an asynchronous function that makes a GET request to a specific API endpoint with optional
 * parameters.
 * @param libelle_region - The name or label of the region for which the fokontany information is being
 * requested.
 * @param libelle_district - The name or label of the district for which the fokontany (the smallest
 * administrative division in Madagascar) information is being requested.
 * @param libelle_commune - The name or label of a commune, which is a type of administrative division
 * in Madagascar.
 * @param libelle_fokontany - The name or label of the fokontany (the smallest administrative division)
 * for which data is being requested.
 * @returns The function `fokontanyGetCall` is returning the result of an axios GET request to the
 * specified URL with the provided parameters and headers.
 */
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

/**
 * This is an asynchronous function that makes a GET request to a specific API endpoint to retrieve a
 * list of communes.
 * @returns This code exports an asynchronous function named `communeGetCall` that makes a GET request
 * to a specific API endpoint using Axios. The function returns a Promise that resolves to the response
 * object returned by the API.
 */
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

/**
 * The function performs a GET request to retrieve gender analytics data from a civil register
 * dashboard API, with optional parameters for date range and location filters.
 * @param s_start_date - The start date for the gender analytics data to be retrieved.
 * @param s_end_date - The end date for the date range of the gender analytics data to be retrieved.
 * @param region - The region parameter is a value that represents a specific region in a country. It
 * is used to filter data in the gender analytics dashboard API call.
 * @param district - The district parameter is a value that represents a district in a specific region.
 * It is used as a filter for the gender analytics API call.
 * @param commune - The `commune` parameter is a variable that represents the commune code of a
 * specific location. It is used as a filter in the API call to retrieve gender analytics data for that
 * specific commune.
 * @param fokonatny - It is a variable that represents the code of a specific Fokontany, which is a
 * subdivision of a Commune in Madagascar.
 * @returns The function `genderAnalyticsGetCall` is returning a promise that resolves to the result of
 * an axios GET request to the specified URL with the specified parameters and headers.
 */
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

/**
 * The function performs a GET request to retrieve data for a seven-day graph from a civil register
 * API, with optional parameters for date range, candle interval, and location filters.
 * @param s_start_date - The start date for the data to be fetched in string format (YYYY-MM-DD).
 * @param s_end_date - The end date for the data to be fetched in the format "YYYY-MM-DD".
 * @param i_candle - This parameter is likely related to candlestick charting, which is a type of
 * financial chart used to represent price movements of an asset. It is unclear what specific value
 * this parameter should take without more context.
 * @param region - The region parameter is an object that contains the value of the selected region. It
 * is used to filter the data by region in the API call.
 * @param district - The district parameter is a value that represents a district in a specific region.
 * It is used as a filter to retrieve data from the API endpoint.
 * @param commune - The commune parameter is a string that represents the code of a commune. It is used
 * as a filter to retrieve data from the API.
 * @param fokonatny - The parameter "fokonatny" is a code for a specific Fokontany, which is a
 * subdivision of a Commune in Madagascar.
 * @returns The function `graphAnalyticsGetCall` is returning the result of an axios GET request to a
 * specific API endpoint with the provided parameters and headers.
 */
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

/**
 * The function retrieves latitude and longitude data from an API based on specified parameters.
 * @param s_start_date - start date for filtering data
 * @param s_end_date - The end date for a search query in the civil register.
 * @param region - The region parameter is a value that represents a region in a geographic location.
 * It is used to filter data in the getMapsLatLng function.
 * @param district - The district parameter is a value that represents a district in a specific region.
 * It is used as a filter to retrieve data related to a specific district.
 * @param commune - The `commune` parameter is a variable that represents the commune code of a
 * specific location. It is used as a filter to retrieve data from the API endpoint.
 * @param fokonatny - `fokonatny` is a variable that represents the code of a specific Fokontany, which
 * is the smallest administrative division in Madagascar. It is used as a parameter in the
 * `getMapsLatLng` function to retrieve latitude and longitude coordinates for that specific Fokontany.
 * @returns The function `getMapsLatLng` returns a Promise that resolves to the result of an axios GET
 * request to a specific URL with specified parameters and headers.
 */
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

/**
 * This is an asynchronous function that makes a GET request to retrieve all users from a civil
 * register API, with optional parameters for pagination and filtering by email.
 * @param page - The page parameter is used to specify the page number of the results to be returned.
 * It is used for pagination purposes.
 * @param limit - The limit parameter is used to specify the maximum number of results to be returned
 * in a single page of the API response. It is used for pagination purposes.
 * @param email - The email parameter is used to filter the results of the API call to only return
 * users with a specific email address. If the email parameter is not provided, all users will be
 * returned.
 * @returns The function `usersGetCall` is returning a Promise that resolves to the result of an axios
 * GET request to the URL specified in `import.meta.env.VITE_BASE_URL` concatenated with the string
 * `"api/civil_register/get-all-users"`. The request includes any parameters specified in the `params`
 * object, and sets the `"Content-Type"` header to `"application/json"`. It also includes an
 */
export const usersGetCall = async (page, limit, email) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (email) params.search = email;
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

/**
 * This is an asynchronous function that makes a POST request to a specific API endpoint with provided
 * data and headers.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * It contains the information that the server needs to process the request. In this case, it is likely
 * to contain user registration information such as name, email, password, etc.
 * @returns The `userPostCall` function is returning the result of an asynchronous `axios.post` call to
 * a specific API endpoint with the provided data and headers. The function is using
 * `import.meta.env.VITE_BASE_URL` to construct the base URL for the API endpoint. The `axios-retry`
 * option is also being set to retry the request up to 5 times in case of failure. The
 */
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

/**
 * This is an asynchronous function that sends a PATCH request to update a civil register with retry
 * functionality.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * It contains the information that needs to be updated in the civil register.
 * @returns The function `uinTrackingPostCall` is returning a promise that resolves to the result of an
 * axios patch request to the URL specified in the `VITE_BASE_URL` environment variable concatenated
 * with the string `"api/civil_register/update"`. The request includes the `data` parameter as the
 * request body and sets the `"Content-Type"` header to `"application/json"`. It also includes an
 * `"axios
 */
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

/**
 * This function sends a PATCH request to update a user's information in a civil register API.
 * @param data - The data parameter is the payload that will be sent in the request body to update a
 * user's information in the civil register. It should be a JSON object containing the updated user
 * information.
 * @returns The `updateUserPostCall` function is returning a promise that resolves to the result of an
 * axios patch request to the URL specified in the `VITE_BASE_URL` environment variable concatenated
 * with the string `"api/civil_register/update-user"`. The request includes the `data` parameter as the
 * request body and sets the `"Content-Type"` header to `"application/json"`. It also includes an `"
 */
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

/**
 * This function sends a PATCH request to update a user's status using Axios.
 * @param data - The data parameter is the payload that will be sent in the request body to update the
 * user status. It should be a JSON object containing the necessary information to update the user
 * status.
 * @returns The function `updateUserStatusPostCall` is returning a promise that resolves to the result
 * of making a PATCH request to the URL specified in the `import.meta.env.VITE_BASE_URL` environment
 * variable concatenated with the string `"api/civil_register/update-user-status"`. The request
 * includes the `data` parameter as the request body and the headers `"Content-Type":
 * "application/json"`. It also
 */
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

/**
 * This is an asynchronous function that sends a POST request to delete a user from a civil register
 * API endpoint using Axios.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * It contains the information needed to delete a user from the civil register.
 * @returns The `deleteUser` function is returning a promise that resolves to the result of a POST
 * request made using the axios library. The POST request is being sent to the URL specified in the
 * `VITE_BASE_URL` environment variable, with the endpoint `/api/civil_register/delete`. The `data`
 * parameter is being sent as the request body, and the request is being made with the `"Content-Type
 */
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

/**
 * This function sends a GET request to a specific API endpoint with optional parameters for page,
 * limit, and email.
 * @param page - The page number of the results to retrieve.
 * @param limit - The limit parameter is used to specify the maximum number of results that should be
 * returned in a single page of data. This is useful for pagination, where large datasets are broken up
 * into smaller, more manageable chunks.
 * @param email - The email parameter is an optional parameter that can be passed to the function. If
 * provided, it will be used as a filter to retrieve only the records that match the specified email
 * address.
 * @returns The function `registrarGetCall` is returning the result of an axios GET request to the URL
 * `import.meta.env.VITE_BASE_URL.concat("api/registrar_register/get-all")` with the specified
 * parameters and headers. The result of the request is being returned as a Promise.
 */
export const registrarGetCall = async (page, limit, email) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (email) params.search = email;
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

/**
 * The function retrieves an appointment by ID for a registrar using Axios and parameters for page and
 * limit.
 * @param page - The page number of the appointments to retrieve.
 * @param limit - The limit parameter is used to specify the maximum number of results to be returned
 * in a single page of the API response.
 * @param id - The ID of the registrar whose appointment is being retrieved.
 * @returns The function `registrarAppointmentsGetByIdCall` is returning the result of an axios GET
 * request to a specific API endpoint with the given parameters and headers. The result of the GET
 * request is being returned.
 */
export const registrarAppointmentsGetByIdCall = async (
  page,
  limit,
  id,
  location,
  date
) => {
  let params = {};
  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (id) params.id = id;
  if (location) params.search = location;
  if (date) params.date = date;
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

/**
 * This function sends a POST request to a specific API endpoint with provided data using Axios
 * library.
 * @param data - The data parameter is the payload that will be sent in the request body to the server.
 * It contains the information that needs to be processed by the server.
 * @returns The `registrarPostCall` function is returning the result of an asynchronous `axios.post`
 * call to a specific API endpoint with the provided `data` and headers. The returned value is a
 * Promise that will resolve to the response data from the server.
 */
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

/**
 * This is an asynchronous function that sends a PATCH request to update a registrar registration using
 * Axios.
 * @param data - The data parameter is the payload that will be sent in the request body to update a
 * registrar registration. It should be a JSON object containing the fields and values to be updated.
 * @returns The function `updateRegistrarPostCall` is returning a promise that resolves to the result
 * of making a PATCH request to the URL specified by `import.meta.env.VITE_BASE_URL` concatenated with
 * the string `"api/registrar_register/update-registrar"`. The request includes the `data` object as
 * the request body and the `"Content-Type": "application/json"` header. It also includes an `"axios
 */
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

/**
 * This function sends a POST request to create a new appointment using Axios.
 * @param data - The data parameter is the payload that will be sent in the request body when making a
 * POST call to the API endpoint. It contains the information needed to create a new appointment.
 * @returns The function `registrarAppointmentPostCall` is returning a promise that resolves to the
 * result of an axios POST request to a specific API endpoint. The data being sent in the request is
 * passed as the `data` parameter to the function. The request includes headers specifying that the
 * data being sent is in JSON format, and also includes a retry configuration that will attempt the
 * request up to 5 times if
 */
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

/**
 * This function sends a PATCH request to update an appointment through an API endpoint.
 * @param data - The data parameter is the payload that will be sent in the request body to update an
 * appointment. It should be a JSON object containing the necessary information to update the
 * appointment.
 * @returns The function `registrarUpdateAppointmentPostCall` is returning a promise that resolves to
 * the result of an axios patch request to the URL specified in the `import.meta.env.VITE_BASE_URL`
 * environment variable concatenated with the string `"api/registrar_register/update-appointment"`. The
 * request includes the `data` parameter as the request body and sets the `"Content-Type"` header to
 * `"application/json"
 */
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

/**
 * This function sends a POST request to delete a registrar registration using the provided ID.
 * @param data - The `data` parameter is an object that contains the `id` property, which is used to
 * specify the ID of the registrar register that needs to be deleted.
 * @returns The `deleteRegistrar` function is returning a promise that resolves to the result of a POST
 * request made using the axios library. The POST request is sent to a URL constructed using the
 * `VITE_BASE_URL` environment variable and the `id` property of the `data` object passed as an
 * argument. The request includes a JSON object in the request body and a header specifying the content
 * type as `
 */
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

/**
 * This function makes a GET request to fetch ODK records from a specified API endpoint using Axios.
 * @returns The function `fetchOdkRecordsGetCall` is returning a promise that resolves to the result of
 * an axios GET request to the URL specified in the `VITE_BASE_URL` environment variable concatenated
 * with the string `"api/civil_register/fetch-file"`. The request includes headers specifying that the
 * content type is JSON and an axios retry configuration that retries the request up to 5 times.
 */
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

/**
 * The function retrieves data from an API endpoint with optional parameters.
 * @param page - The page number of the results to retrieve.
 * @param limit - The maximum number of results to be returned per page.
 * @param s_start_date - The start date for filtering the results of the NIU tracking call.
 * @param s_end_date - This parameter is used to filter the results based on the end date of the
 * tracking period. It is likely a date value in a specific format.
 * @param region - The region parameter is a value that represents a specific region in a country. It
 * is used to filter the results of the API call based on the selected region.
 * @param district - The district parameter is used to filter the results by the code of the district.
 * It is an optional parameter and its value should be an object with a "value" property that contains
 * the code of the district.
 * @param commune - The `commune` parameter is a filter for the code of the commune in the
 * `niuTrackingGetCall` function. It is used to retrieve data for a specific commune.
 * @param fokonatny - It is a variable that represents the selected Fokontany (a type of administrative
 * division) in the query for retrieving data from the civil register API. It is an optional parameter
 * and its value is an object that contains the code of the selected Fokontany.
 * @param niuStatus - The status of the NIU (National Identification Number) that is being tracked. It
 * is a value that is passed as a parameter to the function.
 * @returns The function `niuTrackingGetCall` is returning a Promise that resolves to an axios GET
 * request to the specified URL with the specified parameters and headers.
 */
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

export const resetPasswordCall = async (id) => {
  debugger;
  let params = {};
  if (id) params.id = id;
  return await axios.get(
    import.meta.env.VITE_BASE_URL.concat("api/civil_register/forget-password"),
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