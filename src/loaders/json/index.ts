import { existsSync, readFileSync } from "fs";
import {
  FileCannotBeReadError,
  FileDoesNotExistError,
} from "../../exceptions/fileExceptions";

export const loadJsonConfig = (location: string): unknown => {
  checkIfFileExists(location);
  const fileContent = readFileContent(location);
  const parsedConfig = JSON.parse(fileContent);

  return parsedConfig;
};

const checkIfFileExists = (location: string) => {
  const fileExists = existsSync(location);

  if (!fileExists) {
    const errMsg = `File in location ${location} does not exists or cannot be accessed.`;
    throw new FileDoesNotExistError(errMsg);
  }
};

const readFileContent = (location: string): string => {
  let file;

  try {
    file = readFileSync(location, "utf-8");
  } catch (e) {
    const errMsg = `File ${location} can't be read: ${e}\nPlease check if file is UTF-8 encoded`;
    throw new FileCannotBeReadError(errMsg);
  }

  return file;
};
