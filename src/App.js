import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BananaCounter from './BananaCounter';
import Weather from './Weather';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<BananaCounter />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;