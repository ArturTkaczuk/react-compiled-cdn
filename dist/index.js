var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Post = function Post(_ref) {
  var title = _ref.title,
      content = _ref.content,
      contentLong = _ref.contentLong;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showContent = _React$useState2[0],
      setShowContent = _React$useState2[1];

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      title
    ),
    React.createElement(
      "p",
      null,
      content
    ),
    showContent ? contentLong : React.createElement(
      "button",
      { onClick: function onClick() {
          return setShowContent(function (prev) {
            return !prev;
          });
        } },
      "Czytaj wi\u0119cej"
    )
  );
};

var posts = [{
  title: "Przepis na naleśniki",
  contentShort: "Z owocami i czekoladą",
  contentLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque nam, error vel quisquam eum voluptas cupiditate eligendi architecto tempora quis exercitationem ducimus, voluptatum labore officiis, adipisci eaque cum maxime"
}, {
  title: "Przepis na steka",
  content: "Z świeżą kolendrą!",
  contentLong: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque nam, error vel quisquam eum voluptas cupiditate eligendi architecto tempora quis exercitat abore officiis, adipisci eaque cum maxime"
}];

var postsList = posts.map(function (post, idx) {
  return React.createElement(Post, Object.assign({ key: idx }, post));
});

var Blog = function Blog() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Blog o gotowaniu"
    ),
    postsList
  );
};

ReactDOM.render(React.createElement(Blog, null), document.querySelector("#root"));