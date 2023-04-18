import { isEmpty } from "./isEmpty";
import { isNull } from "./isNull";

export function isNullOrEmpty(str) {
  if (str === undefined) return true;
  else if (isNull(str)) return true;
  else if (isEmpty(str)) return true;
  else return false;
}
