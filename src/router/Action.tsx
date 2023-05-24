/* This is a higher-order function that takes in a `routes` parameter of type `any`. It returns an
asynchronous function that takes in any number of arguments using the spread operator `...args`. */
export default (routes: any) => async (...args: any) => {
  const { action } = await routes();
  return action ? action(...args) : null;
};