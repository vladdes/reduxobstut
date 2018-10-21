import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
// import { IPostDto } from 'src/interfaces/interfaces';
import * as _ from 'lodash';


 class PostList extends React.Component<any, any> {
    constructor(props: any){
        super(props);
       
    }

    componentWillMount(){
        this.props.fetchPosts();
    }
    render(){
        if(!this.props.posts || this.props.posts.length < 1)
            return null;
        console.log(this.props);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
    
    renderList(): React.ReactNode {
        return _.map(this.props.posts, post => {
            console.log(post);
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