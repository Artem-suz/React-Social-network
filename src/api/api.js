import axios from "axios";


const API_KEY = "ddaaec03-7056-4f9b-93c8-1a8c9deb52d5"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": API_KEY,
    },

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },

    follow(id) {
        return instance
            .post(`follow/${id}`)

            .then(response => response.data)
    },

    unfollow(id) {
        return instance
            .delete(`follow/${id}`)

            .then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance
            .post(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha
            })
    },
    logout() {
        return instance
            .delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance
            .get(`profile/${id}`)

    },
    getStatus(id) {
        return instance
            .get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, {
                status: status
            })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile(profile) {
        return instance
            .put(`profile`, profile)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get(`security/get-captcha-url`)

    },
}
