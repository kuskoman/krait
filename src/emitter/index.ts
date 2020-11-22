import { Indexable } from "../utils/typeUtils";

export const generateInterfaceContent = (
  treeNode: Indexable,
  intendation = 0
): string => {
  const intendationString = " ".repeat(intendation);
  let interfaceString = "{\n";
  for (const [name, property] of Object.entries(treeNode)) {
    let value: string;
    if (typeof property === "object") {
      value = generateInterfaceContent(property, intendation + 2);
    } else {
      value = property;
    }

    interfaceString += `${intendationString}  ${name}: ${value}\n`;
  }
  return interfaceString + `${intendationString}}`;
};

export const generateInterface = (
  interfaceName: string,
  nodeTree: Indexable
) => {
  const content = generateInterfaceContent(nodeTree);
  return `export interface ${interfaceName} ${content}`;
};
