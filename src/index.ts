export const parseKraitConfig = (cfg: KraitConfig) => {
  const { structure } = cfg;
  const treeNode = generateInterfaceTree(structure);
  return treeNode;
};

export const generateInterfaceTree = (structure: KraitStructure) => {
  const treeNode: Indexable = {};
  for (const [name, object] of Object.entries(structure)) {
    if (object.childs) {
      treeNode[name] = generateInterfaceTree(object.childs);
    } else {
      let { type } = object;
      if (!object.required) {
        type += " | undefined";
        treeNode[name] = type;
      }
    }
  }

  return treeNode;
};

export interface KraitConfig {
  structure: KraitStructure;
}

export interface KraitStructure {
  [name: string]: KraitObject;
}

export interface KraitBaseObject {
  required?: boolean;
  type?: KraitAllowedType;
  childs: {
    [name: string]: KraitObject;
  };
}

export type KraitObject = RequireOnlyOne<KraitBaseObject, "childs" | "type">;

export type KraitAllowedType =
  | "string"
  | "string[]"
  | "number"
  | "number[]"
  | "boolean"
  | "boolean[]"
  | "any"
  | "unknown";

// source: https://stackoverflow.com/questions/40510611/typescript-interface-require-one-of-two-properties-to-exist
type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

interface Indexable {
  [x: string]: any;
}
