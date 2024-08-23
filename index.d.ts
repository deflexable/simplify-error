
export function simplifyError(error: string, message: string): SimpleError;

export function simplifyCaughtError(error: any): SimpleError;

interface SimpleError {
    simpleError: {
        error: string;
        message: string;
    }
}