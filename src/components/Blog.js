import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  return (
    <>
      <h2>blog detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>Go to next page</Link>
    </>
  );
};

export default Blog;
