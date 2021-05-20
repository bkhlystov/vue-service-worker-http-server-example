import axios from 'axios';
import qs from 'qs';

export const urls = {
    login: '/api/login',
};

class ApiClient {

    async login() {

        const users_data = await this.request( 'get', urls.login);

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