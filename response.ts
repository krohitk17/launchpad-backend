import { HTTPErrorCode } from "./status";

class ErrorResponse {
  status: HTTPErrorCode | number;
  message: string;

  constructor(message: string, status: HTTPErrorCode | number = 500) {
    this.status = status;
    this.message = message;
  }
}
