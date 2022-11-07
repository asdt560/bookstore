import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import BookContainer from './components/BookContainer';
import Categories from './components/CategoriesDisplay';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
