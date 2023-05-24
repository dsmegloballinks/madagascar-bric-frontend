/* This is a higher-order function that takes in a `routes` parameter of type `any`. It returns an
asynchronous function that takes in any number of arguments (`...args: any`) and awaits the
`routes()` function. If the `routes()` function returns an object with an `Error` property, it calls
the `Error` function with the arguments passed in and returns the result. Otherwise, it returns
`null`. This function is likely used for error handling in a routing system. */
export default (routes: any) => async (...args: any) => {
  const { Error } = await routes();
  return Error ? Error(...args) : null;
};