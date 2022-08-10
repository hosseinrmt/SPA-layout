const Post = (props) => {
  const id = props.match.params.id || 1;
  return (
    <>
      <h2>post detail - {id}</h2>
      <div>{JSON.stringify(props.match.params)}</div>
    </>
  );
};

export default Post;
