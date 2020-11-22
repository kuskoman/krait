export class FileDoesNotExistError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "FileDoesNotExistError";
    Object.setPrototypeOf(this, FileDoesNotExistError.prototype);
  }
}

export class FileCannotBeReadError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "FileCannotBeReadError";
    Object.setPrototypeOf(this, FileCannotBeReadError.prototype);
  }
}
