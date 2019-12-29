import React, {useState} from "react";

function Form({ createPost }) {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const post = {
      title,
      body
    };
    createPost(post);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
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
export default Form;
