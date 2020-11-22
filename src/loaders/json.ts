import { checkIfFileExists, readFileContent } from "../utils/fileUtils";

export const loadJsonConfig = (location: string): unknown => {
  checkIfFileExists(location);
  const fileContent = readFileContent(location);
  const parsedConfig = JSON.parse(fileContent);

  return parsedConfig;
};
