import axios from '../request'

//注册接口
export const registerApi = (name, phone, pwd) => axios.post('/api/v1/pri/user/register', {
    name,
    tel,
    pwd
})

//登录接口
export const loginApi = (phone, pwd) => axios.post('/api/v1/pri/user/login', {
    phone,
    pwd
})

export const getMember = () => axios.get('api/v1/pri/user/family')

//语音接口
export const getVoice = (voice) => axios.get('/api/v1/pri/voice', {
    params: {
        voiceId: voice
    }
})

//获得用户信息
export const getUserInfor = () => axios.get('api/v1/pri/user/find_by_token',{
    params:{
        "token":token
    }
})

//对话
export const talkApi = (talk) => axios.get('api/v1/pri/talk', {
    talk
})