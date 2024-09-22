import { RESTDataSource } from '@apollo/datasource-rest';
import PostApi from './PostApi.js';

class UserApi extends RESTDataSource {
    baseURL = process.env.BASE_API_URL;

    async getUser(id) {
        return this.get(`users/${encodeURIComponent(id)}`);
    }

    async getUsers() {
        return this.get('users');
    }

    async createUser(userData) {
        return this.post('users', {
            body: { ...userData }
        })
    }

    async updateUser(id, userData) {
        return this.patch(`users/${encodeURIComponent(id)}`, {
            body: { ...userData }
        });
    }

    async deleteUser(id) {
        return this.delete(`users/${encodeURIComponent(id)}`);
    }

    async deleteUserRecursive(id) {
        /*
            1. Get User's Posts Ids
            2. Get all comments Ids from Post ids
            3. delete all comments.
            4. delete all posts.
            5. delete user.
        */

        try {
            const postApi = new PostApi();

            const posts = await postApi.getPostsForUser(id);
            const postIds = posts.map(item => item.id);

            if (postIds.length > 0) postIds.forEach(async (postId) => await postApi.deletePostRecursive(postId));
            this.deleteUser(id);

            return { success: true };
        } catch (err) {
            return { success: false };
        }
    }
}

export default UserApi;