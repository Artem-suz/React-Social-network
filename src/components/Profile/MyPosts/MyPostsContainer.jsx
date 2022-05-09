import { connect } from 'react-redux'
import { addPost, } from '../../../redux/profile-reducer.js'
import MyPosts from './MyPosts'



let mapStateToProps = (state) => {
    return (
        {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText,
            
        }
    )
}


let MyPostsContainer = connect(mapStateToProps, {addPost,})(MyPosts)

export default MyPostsContainer