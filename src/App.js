import Header from './components/Header';
import NewsList from './components/NewsList/NewsList';

function App() {
  return (
    <div className="max-w-[900px] flex flex-col my-0 mx-auto p-4 items-center">
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
