import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Post";
import pexel from "./images/pexels.jpg";

const posts = [
  {
    image: pexel,
    id: 1,
    author: "cokejnr",
    title: "10 Misconceptions Your Boss Has About Music",
    published: "Thursday, 26 January 2023",
    tags: [
      {
        name: "Music",
        id: "ox1",
      },
      {
        name: "Lifestyle",
        id: "ox2",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
