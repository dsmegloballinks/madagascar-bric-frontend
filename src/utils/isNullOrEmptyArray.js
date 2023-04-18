import { isNullArray } from "./isNullArray";
import { isEmptyArray } from "./isEmptyArray";

export function isNullOrEmptyArray(array) {
  if (isNullArray(array)) return true;
  else if (isEmptyArray(array)) return true;
  else return false;
}
