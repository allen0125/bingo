import * as React from 'react';
import axios from "axios";
import "../components/index.css"

const baseURL = "https://ip.lgtm.one/roll";

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
      <div class="horizontal">
        <div class="demo-2-item">
          <h1 align="center">Welcome to my LGTM site!</h1>
          <img class="demo-img" src={post.img_url}></img>
          <div align="center">{post.markdown_url}</div>
        </div>
      </div>
    </main >
  )
}

export const Head = () => <title>LGTM Home Page</title>


export default IndexPage