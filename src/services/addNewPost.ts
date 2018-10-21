import { db } from './../firebase';
import { IPostDto } from 'src/interfaces/interfaces';

export const addPost = (post: IPostDto) => {
    return db.collection('posts').add({ 
        title: post.title,
        views: post.views,
        timestamp: Date.now()
     });
   
}

