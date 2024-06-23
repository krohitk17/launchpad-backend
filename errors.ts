import { HTTPErrorCode } from "./status";

/**
 * Represents an HTTP error.
 */
class HTTPError extends Error {
  status: HTTPErrorCode;
  props: Record<string, any> = {};
  /**
   * Creates a new instance of the HTTPError class.
   * @param message - The error message.
   * @param status - The HTTP status code associated with the error. Defaults to InternalServerError (500).
   * @param props - Additional properties to include in the error response.
   * @reference {@link HTTPErrorCode}
   */
  constructor(
    message: string,
    status: HTTPErrorCode = HTTPErrorCode.InternalServerError,
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = status;
    this.props = props;
  }
}

/**
 * Represents a Bad Request error.
 * @extends HTTPError
 */
class BadRequestError extends HTTPError {
  /**
   * Creates a new instance of the BadRequestError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Bad Request Exception",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.BadRequest;
    this.props = props;
  }
}

/**
 * Represents an Unauthorized error.
 * @extends HTTPError
 */
class UnauthorizedError extends HTTPError {
  /**
   * Creates a new instance of the UnauthorizedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Unauthorized Exception",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.Unauthorized;
    this.props = props;
  }
}

/**
 * Represents a Forbidden error.
 * @extends HTTPError
 */
class ForbiddenError extends HTTPError {
  /**
   * Creates a new instance of the ForbiddenError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Forbidden Exception",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.Forbidden;
    this.props = props;
  }
}

/**
 * Represents a Not Found error.
 * @extends HTTPError
 */
class NotFoundError extends HTTPError {
  /**
   * Creates a new instance of the NotFoundError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Not Found Exception",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.NotFound;
    this.props = props;
  }
}
/**
 * Represents a Method Not Allowed error.
 * @extends HTTPError
 */
class MethodNotAllowedError extends HTTPError {
  /**
   * Creates a new instance of the MethodNotAllowedError class.
   * @param message - The error message. Default: "Method Not Allowed Error."
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Method Not Allowed Error.",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.MethodNotAllowed;
    this.props = props;
  }
}

/**
 * Represents a Conflict error.
 * @extends HTTPError
 */
class ConflictError extends HTTPError {
  /**
   * Creates a new instance of the ConflictError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.Conflict;
    this.props = props;
  }
}

/**
 * Represents a Gone error.
 * @extends HTTPError
 */
class GoneError extends HTTPError {
  /**
   * Creates a new instance of the GoneError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.Gone;
    this.props = props;
  }
}

/**
 * Represents a Length Required error.
 * @extends HTTPError
 */
class LengthRequiredError extends HTTPError {
  /**
   * Creates a new instance of the LengthRequiredError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.LengthRequired;
    this.props = props;
  }
}

/**
 * Represents a Precondition Failed error.
 * @extends HTTPError
 */
class PreconditionFailedError extends HTTPError {
  /**
   * Creates a new instance of the PreconditionFailedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.PreconditionFailed;
    this.props = props;
  }
}

/**
 * Represents a Payload Too Large error.
 * @extends HTTPError
 */
class PayloadTooLargeError extends HTTPError {
  /**
   * Creates a new instance of the PayloadTooLargeError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.PayloadTooLarge;
    this.props = props;
  }
}

/**
 * Represents an Unsupported Media Type error.
 * @extends HTTPError
 */
class UnsupportedMediaTypeError extends HTTPError {
  /**
   * Creates a new instance of the UnsupportedMediaTypeError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.UnsupportedMediaType;
    this.props = props;
  }
}

/**
 * Represents an Unprocessable Entity error.
 * @extends HTTPError
 */
class UnprocessableEntityError extends HTTPError {
  /**
   * Creates a new instance of the UnprocessableEntityError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.UnprocessableEntity;
    this.props = props;
  }
}

/**
 * Represents a Too Many Requests error.
 * @extends HTTPError
 */
class TooManyRequestsError extends HTTPError {
  /**
   * Creates a new instance of the TooManyRequestsError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.TooManyRequests;
    this.props = props;
  }
}

/**
 * Represents an Internal Server Error.
 * @extends HTTPError
 */
class InternalServerError extends HTTPError {
  /**
   * Creates a new instance of the InternalServerError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.InternalServerError;
    this.props = props;
  }
}

/**
 * Represents a Not Implemented error.
 * @extends HTTPError
 */
class NotImplementedError extends HTTPError {
  /**
   * Creates a new instance of the NotImplementedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.NotImplemented;
    this.props = props;
  }
}

/**
 * Represents a Bad Gateway error.
 * @extends HTTPError
 */
class BadGatewayError extends HTTPError {
  /**
   * Creates a new instance of the BadGatewayError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.BadGateway;
    this.props = props;
  }
}

/**
 * Represents a Service Unavailable error.
 * @extends HTTPError
 */
class ServiceUnavailableError extends HTTPError {
  /**
   * Creates a new instance of the ServiceUnavailableError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.ServiceUnavailable;
    this.props = props;
  }
}

/**
 * Represents a Gateway Timeout error.
 * @extends HTTPError
 */
class GatewayTimeoutError extends HTTPError {
  /**
   * Creates a new instance of the GatewayTimeoutError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.GatewayTimeout;
    this.props = props;
  }
}

/**
 * Represents an HTTP Version Not Supported error.
 * @extends HTTPError
 */
class HTTPVersionNotSupportedError extends HTTPError {
  /**
   * Creates a new instance of the HTTPVersionNotSupportedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.HTTPVersionNotSupported;
    this.props = props;
  }
}

/**
 * Represents a Variant Also Negotiates error.
 * @extends HTTPError
 */
class VariantAlsoNegotiatesError extends HTTPError {
  /**
   * Creates a new instance of the VariantAlsoNegotiatesError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.VariantAlsoNegotiates;
    this.props = props;
  }
}

/**
 * Represents an Insufficient Storage error.
 * @extends HTTPError
 */
class InsufficientStorageError extends HTTPError {
  /**
   * Creates a new instance of the InsufficientStorageError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.InsufficientStorage;
    this.props = props;
  }
}

/**
 * Represents a Loop Detected error.
 * @extends HTTPError
 */
class LoopDetectedError extends HTTPError {
  /**
   * Creates a new instance of the LoopDetectedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.LoopDetected;
    this.props = props;
  }
}

/**
 * Represents a Not Extended error.
 * @extends HTTPError
 */
class NotExtendedError extends HTTPError {
  /**
   * Creates a new instance of the NotExtendedError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(message: string, props: Record<string, any> = {}) {
    super(message);
    this.status = HTTPErrorCode.NotExtended;
    this.props = props;
  }
}

/**
 * Represents a Network Authentication Required error.
 * @extends HTTPError
 */
class NetworkAuthenticationRequiredError extends HTTPError {
  /**
   * Creates a new instance of the NetworkAuthenticationRequiredError class.
   * @param message - The error message.
   * @param props - Additional properties to include in the error response.
   */
  constructor(
    message: string = "Network Authentication Required Exception",
    props: Record<string, any> = {}
  ) {
    super(message);
    this.status = HTTPErrorCode.NetworkAuthenticationRequired;
    this.props = props;
  }
}

export {
  HTTPError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
  MethodNotAllowedError,
  ConflictError,
  GoneError,
  LengthRequiredError,
  PreconditionFailedError,
  PayloadTooLargeError,
  UnsupportedMediaTypeError,
  UnprocessableEntityError,
  TooManyRequestsError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
  HTTPVersionNotSupportedError,
  VariantAlsoNegotiatesError,
  InsufficientStorageError,
  LoopDetectedError,
  NotExtendedError,
  NetworkAuthenticationRequiredError,
};
