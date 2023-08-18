import "./App.css";
import Card from "./Components/Card";
import useFetchRespo from "./queries/repo";

function App() {
  const { data } = useFetchRespo();
  console.log(data);

  return (
    <div className="App">
      {data?.map((repo) => (
        <Card
          repo={repo}
          key={repo.id}
          addToFavorites={() => {}}
          isFavorite
          removeFromFavorites={() => {}}
        />
      ))}
    </div>
  );
}

export default App;
