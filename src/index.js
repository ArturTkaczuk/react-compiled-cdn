const Post = ({ title, content, contentLong }) => {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      {showContent ? (
        contentLong
      ) : (
        <button onClick={() => setShowContent((prev) => !prev)}>
          Czytaj więcej
        </button>
      )}
    </div>
  );
};

const posts = [
  {
    title: "Przepis na naleśniki",
    contentShort: "Z owocami i czekoladą",
    contentLong:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque nam, error vel quisquam eum voluptas cupiditate eligendi architecto tempora quis exercitationem ducimus, voluptatum labore officiis, adipisci eaque cum maxime",
  },
  {
    title: "Przepis na steka",
    content: "Z świeżą kolendrą!",
    contentLong:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque nam, error vel quisquam eum voluptas cupiditate eligendi architecto tempora quis exercitat abore officiis, adipisci eaque cum maxime",
  },
];

const postsList = posts.map((post, idx) => <Post key={idx} {...post} />);

const Blog = () => (
  <div>
    <p>Blog o gotowaniu</p>
    {postsList}
  </div>
);

ReactDOM.render(<Blog />, document.querySelector("#root"));
