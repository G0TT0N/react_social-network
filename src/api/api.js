import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { // заголовки, что всегда отправляются\возвращаются сервером при запросе
        'API-KEY': '1485309f-39bf-4f40-bd50-88a179c90f9c'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) // параметры придут из контейнерной компоненты
            .then(response => response.data); // необязательный респонс. Реализует прокидываение только тех данных, что использует компонента и ничего больше.
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId); // обратная совместимость на другую АПИ.
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId) // приходит из withRouter
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}); // или просто , {status}
    },
    savePhoto(photoFile) { // чтобы отправить файл на сервер, нужно сформировать объект даты
        const formData = new FormData(); // формируем объект
        formData.append("image", photoFile); // добавляем в конец файл изображения
        return instance.put(`profile/photo`, formData, { // отправляем на сервер по такому пути, такой объект, с такими настройками заголовков
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

};

