import { RequireOnlyOne } from "../utils/typeUtils";
import { KraitAllowedType } from "../validator";

export const parseKraitConfig = (cfg: KraitConfig) => {
  const { structure } = cfg;

  return structure;
};

export interface KraitConfig {
  configInterfaceName?: string;
  structure: KraitStructure;
}

export interface KraitStructure {
  [name: string]: KraitObject;
}

export interface KraitBaseObject {
  required?: boolean;
  type?: KraitAllowedType | KraitAllowedType[];
  childs: {
    [name: string]: KraitObject;
  };
}

export type KraitObject = RequireOnlyOne<KraitBaseObject, "childs" | "type">;
