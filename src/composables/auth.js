import {ref} from "vue";
import http from "../http";
import { useRouter} from 'vue-router';

export default function useLogin() {
    const errors = ref([])

    const loginUser = async (data) => {
        errors.value = []

        try {
            let response = await http.post('/api/v1/login', data)
            localStorage.setItem('user-token', response.data.data.token)
            window.location = 'dashboard'
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const logoutUser = async () => {
        localStorage.removeItem('user-token')
        window.location = 'dashboard'
    }

    const isLogin = () => {
        return !!localStorage.getItem('user-token')
    }

    return {
        errors,
        loginUser,
        logoutUser,
        isLogin
    }
}
