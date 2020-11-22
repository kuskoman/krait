import { KraitObject } from "../config";

export const getTypesFromNode = (node: KraitObject) => {
  let { type } = node;

  if (typeof type !== "object") {
    return [type];
  }

  return type;
};
