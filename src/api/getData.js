import axios from '../request'

//注册接口
export const registerApi = (name, pwd, phone, familyId) => axios.post('/api/v1/pri/user/register', {
    name,
    pwd,
    phone,
    familyId
})

//登录接口
export const loginApi = (phone, pwd) => axios.post('/api/v1/pri/user/login', {
    phone,
    pwd
})

export const getMember = () => axios.get('api/v1/pri/user/family')

//语音接口
export const getAudio = (token) => axios.get('api/v1/pri/user/audioplay', {
    params: {
        "token": token
    },
    responseType: "blob"
})

//获得用户信息
export const getUserInfor = (token) => axios.get('api/v1/pri/user/find_by_token', {
    params: {
        "token": token
    }
})

//对话
export const talkApi = (talk) => axios.get('api/v1/pri/talk', {
    talk
})