import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

function Form({ createPost }) {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body
    };
    createPost(post);
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title: </label><br />
          <input
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body: </label><br />
          <textarea
            name="body"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  post: state.posts.item
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
