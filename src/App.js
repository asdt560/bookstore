import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import BookContainer from './components/BookContainer';
import Categories from './components/Categories';

function App() {
  return (
    <body>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
