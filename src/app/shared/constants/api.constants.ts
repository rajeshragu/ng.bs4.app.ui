export class ApiConstants {
    static _ROOT: string = "/api";

    static _SECURITY_BASE = `${ApiConstants._ROOT}/security`;
    static _SUPPLIER_BASE = `${ApiConstants._ROOT}/supplier`;

    static _SECURITY_AUTHENTICATE = `${ApiConstants._SECURITY_BASE}/authenticate`;
    static _SUPPLIER_SEARCH = `${ApiConstants._SUPPLIER_BASE}/search`;
}
