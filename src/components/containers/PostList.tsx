import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
// import { IPostDto } from 'src/interfaces/interfaces';
import * as _ from 'lodash';

import NewPost from './../newPost/NewPost';


 class PostList extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            isNewPost: false
        }
    }
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    setIsNewPost(value: boolean){
        this.setState({isNewPost: value});
    }
    render(){
        if(!this.props.posts || this.props.posts.length < 1)
            return null;
        
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <button className="btn btn-secondary" onClick={() => this.setState({isNewPost: true})}>Add New</button>
                        <ul className="list-group">
                            {this.renderList()}
                        </ul>
                    </div>
                    <div className="col-sm-8">
                        { this.state.isNewPost ? <NewPost onSubmitSuccess={() => this.setIsNewPost(false)}/> : null}
                    </div>
                    
                </div>
            </div>
           
        );
    }
    
    renderList(): React.ReactNode {
        return _.map(this.props.posts, post => {
           
            return (                
                <li key={post.id} className="list-group-item"
                // onClick={() => this.props.selectPost(post)}
                >
                    {post.title}
                </li>
            );
        });
    }
}

let mapStateToProps = ({posts}: any) => {
    return { posts };
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);