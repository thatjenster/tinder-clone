import './styles/styles.css'
import Header from './components/Header'
import Cards from './components/Cards'
import SwipeButton from './components/SwipeButton'

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <SwipeButton />
    </div>
  );
}

export default App;
