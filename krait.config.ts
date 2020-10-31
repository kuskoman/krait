import { KraitConfig, parseKraitConfig } from "./src";

const config: KraitConfig = {
  structure: {
    s3Port: { type: "string", required: true },
    awsPort: { type: "number", required: false },
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
