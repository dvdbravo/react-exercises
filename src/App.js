import "./styles.css";
import Title from "./Components/Title";
import List from "./List";
import Search from "./Search";

function getUserInfo(jsonText) {
  let jsonProp = jsonText[6];
  console.log(jsonProp);
}

// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then((json) => {
//     const jsonTest = getUserInfo(json);
//   });

const App = () => {
  const stories = [
    {
      title: "React",
      url: "http:www.youtube.com",
      objectID: 0
    },
    {
      title: "React2",
      url: "http:www.youtube.com",
      objectID: 1
    },
    {
      title: "React3",
      url: "http:www.youtube.com",
      objectID: 2
    }
  ];
  const handleSearch = (event) => {
    console.log(target.event.value);
  };
  return (
    <div className="App">
      <Title />
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <Search onSearch={handleSearch} />
      <List list={stories} />
    </div>
  );
};

export default App;
