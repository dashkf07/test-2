import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoursesPage } from './pages/course-page/courses-page';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
