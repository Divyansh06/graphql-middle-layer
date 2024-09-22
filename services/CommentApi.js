import { RESTDataSource } from '@apollo/datasource-rest';

class CommentApi extends RESTDataSource {
    baseURL = process.env.BASE_API_URL;

    async getComments(id) {
        return this.get(`comments/${encodeURIComponent(id)}`);
    }

    async getComments() {
        return this.get('comments');
    }

    async getCommentsForPostId(postId) {
        const params = new URLSearchParams({ postId });
        return this.get(`comments?${params}`)
    }

    async createComment(commentData) {
        return this.post('comments', {
            body: { ...commentData }
        })
    }

    async updateComment(id, commentData) {
        return this.patch(`comments/${encodeURIComponent(id)}`, {
            body: { ...commentData }
        });
    }

    async deleteComment(id) {
        return this.delete(`comments/${encodeURIComponent(id)}`);
    }
}

export default CommentApi;