export class Post {

    postId: number;
    postAuthor: string;
    postContent: string;
    postLove: number;
    isLoved: boolean;

    constructor (postId, postAuhtor, postContent, postLove) {
        this.postId = postId;
        this.postAuthor = postAuhtor;
        this.postContent = postContent;
        this.postLove = postLove;
    }
}