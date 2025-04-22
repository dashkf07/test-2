import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoursePage } from './pages/course-page/course-page';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
