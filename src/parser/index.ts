import { KraitStructure } from "../config";
import { Indexable } from "../utils/typeUtils";
import { getTypesFromNode } from "./nodeTypes";

export const generateInterfaceTree = (structure: KraitStructure) => {
  const treeNode: Indexable = {};
  for (let [name, object] of Object.entries(structure)) {
    if (object.childs) {
      treeNode[name] = generateInterfaceTree(object.childs);
    } else {
      const types = getTypesFromNode(object);
      if (!object.required) {
        name = `${name}?`;
      }
      treeNode[name] = types.join(" | ");
    }
  }

  return treeNode;
};
