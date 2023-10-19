import MainPage from '../pages/MainPage/MainPage';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps) {
  return (
    <MainPage offersCount={placesCount}/>
  );
}

export default App;
