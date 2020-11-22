import { parseKraitConfig } from "./config";
import { generateInterface } from "./emitters/interfaceEmitter";
import { generateInterfaceTree } from "./parser";

const cfg = parseKraitConfig();
const treeNode = generateInterfaceTree(structure);
const cfgInterfaceName = cfg.configInterfaceName || "Config";
generateInterface(cfgInterfaceName, treeNode);
