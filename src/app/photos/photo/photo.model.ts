export interface Photo {

    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowCommnets: boolean;
    likes: number;
    comments: number;
    userId: number;
}