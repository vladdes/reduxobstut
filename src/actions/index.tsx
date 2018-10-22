import { getPosts } from './../services/getPosts';
import { IPostDto } from 'src/interfaces/interfaces';
import * as Globals from './../Globals';
import { addNewPost } from './../services/addNewPost';

export const selectPost = (post: any) => {
    return {
        type: Globals.SelectedPost,
        post: post
    }
} 

export const fetchPosts = () => {
    const request: Promise<IPostDto[]> = getPosts();

    return {
        type: Globals.GetPosts,
        payload: request
    };
}

export const addPost = (values: any, callback: any) => {
    const request = addNewPost(values);
    request.then(() => callback());
    return {
        type: Globals.GetPosts,
        payload: request
    }
}