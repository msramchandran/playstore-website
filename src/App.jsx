import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/app/:appSlug"
          element={
            <MainLayout>
              <AppDetail />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
