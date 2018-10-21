import { db } from './../firebase';
import { IPostDto } from 'src/interfaces/interfaces';

export const getPosts = () => 
    db.collection('posts').get()
    .then((snapshot: any) =>{       
        let entities = snapshot.docs.map((element: any)  => {
            let data = element.data();
            
            return {
                id: element.id,
                title: data.title,
                views: data.views
            } as IPostDto
        });
       
        return entities;
    });
    


