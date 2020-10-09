import axios from '../request'

//注册接口
export const registerApi = (name, tel, pwd) => axios.post('/api/v1/pub/user/register', {
    name,
    tel,
    pwd
})

//登录接口
export const loginApi = (tel, pwd) => axios.post('/api/v1/pub/user/login', {
    tel,
    pwd
})

export const getMember = () => axios.get('api/v1/pub/user/list')

//语音接口
export const getVoice = (voice) => axios.get('/api/v1/pri/voice', {
    params: {
        voiceId: voice
    }
})


//对话
export const talkApi = (talk) => axios.get('api/v1/pri/talk', {
    talk
})