import { existsSync, readFileSync } from "fs";
import {
  FileDoesNotExistError,
  FileCannotBeReadError,
} from "../exceptions/fileExceptions";

export const checkIfFileExists = (location: string) => {
  const fileExists = existsSync(location);

  if (!fileExists) {
    const errMsg = `File in location ${location} does not exists or cannot be accessed.`;
    throw new FileDoesNotExistError(errMsg);
  }
};

export const readFileContent = (location: string): string => {
  let file;

  try {
    file = readFileSync(location, "utf-8");
  } catch (e) {
    const errMsg = `File ${location} can't be read: ${e}\nPlease check if file is UTF-8 encoded`;
    throw new FileCannotBeReadError(errMsg);
  }

  return file;
};
