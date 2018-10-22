import { db } from './../firebase';
import { IPostDto } from 'src/interfaces/interfaces';

export const addNewPost = (post: IPostDto) => 
    db.collection('posts').add({ 
        title: post.title,
        views: post.views,
        content: post.content,
        timestamp: Date.now()
     });



