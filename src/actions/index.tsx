import { getPosts } from './../services/getPosts';
import { IPostDto } from 'src/interfaces/interfaces';
import * as Globals from './../Globals';

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
    }
}

export const addPost = () => {
    const request: Promise<IPostDto[]> = getPosts();

    return {
        type: Globals.GetPosts,
        payload: request
    }
}