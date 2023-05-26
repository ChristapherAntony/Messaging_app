const createErrorClass = (name: string, statusCode: number) => {
    return class extends Error {
        statusCode: number;
        constructor(message: string) {
            super(message);
            this.name = name;
            this.statusCode = statusCode;
        }
    };
};

export const ERROR = {
    HttpError: createErrorClass('HttpError', 500),
    UserExistsError: createErrorClass('UserExistsError', 409), 
    NotFoundError: createErrorClass('NotFoundError', 404),
    BadRequestError: createErrorClass('BadRequestError', 400),
    InvalidInputError: createErrorClass('InvalidInputError', 422),
    PasswordMismatchError: createErrorClass('PasswordMismatchError', 400), // New error class
    OTPExpiredError: createErrorClass('OTPExpiredError', 400),
};
