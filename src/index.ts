import { parseKraitConfig } from "./config";

const cfg = parseKraitConfig();
const treeNode = generateInterfaceTree(structure);
const cfgInterfaceName = cfg.configInterfaceName || "Config";
return generateInterface(cfgInterfaceName, treeNode);
