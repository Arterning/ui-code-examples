import request from './index';

// 这个文件专门定义请求参数的，和响应的类型
// 验证码的响应类型约束
interface CaptchaAPIResponse {
    msg: string;
    img: string;
    code: number;
    capchaEnabled: boolean;
    uuid: string;
}
// 登录请求参数类型约束1
interface LoginAPIRequest {
    username: string;
    password: string;
    code: string;
    uuid: string;
}
// 登录的响应类型约束
interface LoginAPIResponse{
    msg: string;
    code: number;
    token: string;
}

// 验证码请求
export const CaptchaAPI = ():Promise<CaptchaAPIResponse> => request.get('/prod-api/captchaImage')

// 登录请求
export const LoginAPI = (params:LoginAPIRequest):Promise<LoginAPIResponse> => request.post('/prod-api/login',params)