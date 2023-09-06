export class PostPreviewDto {
    id: number;
    title: string;
    description: string;
    image: string;
}

export class PostsDto {
    offset: number;
    totalCount: number;
    posts: PostPreviewDto[];
}