import { RESTDataSource } from '@apollo/datasource-rest';
import CommentApi from './CommentApi.js';

class PostApi extends RESTDataSource {
    baseURL = process.env.BASE_API_URL;

    async getPost(id) {
        return this.get(`posts/${encodeURIComponent(id)}`);
    }

    async getPosts() {
        return this.get('posts');
    }

    async getPostsForUser(userId) {
        const params = new URLSearchParams({ userId });
        return this.get(`posts?${params}`);
    }

    async createPost(postData) {
        return this.post('posts', { body: { ...postData } });
    }

    async updatePost(id, postData) {
        return this.patch(`posts/${encodeURIComponent(id)}`, {
            body: { ...postData }
        });
    }

    async deletePost(id) {
        return this.delete(`posts/${encodeURIComponent(id)}`);
    }

    async deletePostRecursive(id) {
        try {
            const commentApi = new CommentApi();

            const comments = await commentApi.getCommentsForPostId(id);
            const commentIds = comments.map(comment => comment.id);

            if (commentIds.length > 0) commentIds.forEach(async (commentId) => await commentApi.deleteComment(commentId));
            this.deletePost(id);

            return { success: true };
        } catch (err) {
            return { success: false };
        }
    }
}

export default PostApi;