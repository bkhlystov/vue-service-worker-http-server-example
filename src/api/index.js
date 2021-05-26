import axios from 'axios';
import qs from 'qs';

export const urls = {
    login: '/v1/login',
};

class ApiClient {

    async login() {

        const users_data = await this.request( 'post', urls.login, {
            name: "bohdan01",
            password: "GlobalLogic86",
        });

        return users_data;
    }

    async request(method, url, data, params) {
        let response;

        try {
            response = await axios({
                method,
                url,
                data,
                params,
                paramsSerializer(params) {
                    return qs.stringify(params, {arrayFormat: 'brackets'})
                },
            });
        } catch (e) {
            throw e;
        }

        return response.data;
    }
}

export default new ApiClient();