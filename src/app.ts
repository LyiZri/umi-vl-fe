import type { RequestConfig } from "@umijs/max";

export const request: RequestConfig = {
    timeout: 15000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': "multipart/form-data"
    },
    // other axios options you want
    errorConfig: {
        errorHandler() {
        },
        errorThrower() {
        }
    },
    requestInterceptors: [],
    responseInterceptors: []
};