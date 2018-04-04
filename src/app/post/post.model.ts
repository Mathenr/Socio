export class Post {

    postId: number;

    constructor (
                public postAuthor: string,
                public postContent:string,
                public postLove: number,
                public isLoved: boolean) {

    }
}