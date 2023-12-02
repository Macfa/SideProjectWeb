import { Routes, Route } from "react-router-dom";
import RootPage from './pages/root/RootPage';
import IntroPage from './pages/intro/IntroPage';
import WorkPage from './pages/work/WorkPage';

function MainLayout() {
  return (
    <div id="main">
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="work" element={<WorkPage />} />
      </Routes>
    </div>
  );
}

export default MainLayout;