import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

function Posts({ posts, fetchPosts }) {

  useEffect(() =>  fetchPosts(), [fetchPosts]);

  const postItems = posts && posts.map((value, index) => (
    <div key={index + 1}>
      <h3>{index + 1}. {value.title}</h3>
      <p>{value.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
