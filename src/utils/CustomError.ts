class CustomError extends Error {
  private _status: number;

  constructor(message: string, status: number) {
    super(message);
    this._status = status;
  }
  
  public get status(): number {
    return this._status;
  }
}

export default CustomError;