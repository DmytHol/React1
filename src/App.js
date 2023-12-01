/**
 * Main component of the application.
 * Renders different routes based on the URL path.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
        <Route path="/weather" element={<Weather />} />  // This route directs to the Weather component when the URL path is '/weather'
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;