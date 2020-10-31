import { KraitConfig, parseKraitConfig } from "./src";

const config: KraitConfig = {
  structure: {
    awsPort: { type: ["number", "number[]"], required: false },
    sPort: { type: "string", required: true },
    propertyWithChilds: {
      childs: {
        nodePort: { type: "number" },
        otherWithChilds: {
          childs: {
            otherPort: { type: "boolean[]" },
          },
        },
      },
    },
  },
};

console.log(parseKraitConfig(config));
