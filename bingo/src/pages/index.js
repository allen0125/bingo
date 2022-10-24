// Step 1: Import React
import * as React from 'react';
import axios from "axios";

// Step 2: Define your component
const baseURL = "https://ip.lgtm.one/rand";

const IndexPage = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <main>
      <div>
        <h1>Welcome to my LGTM site!</h1>
        <img src={post.img_url}></img>
        <div>{post.markdown_url}</div>
      </div>
    </main >
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>LGTM Home Page</title>


// Step 3: Export your component
export default IndexPage