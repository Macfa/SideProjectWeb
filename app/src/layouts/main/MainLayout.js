import { Routes, Route } from "react-router-dom";
import RootPage from './component/root/RootPage';
import IntroPage from './component/intro/IntroPage';
import WorkPage from './component/work/WorkPage';
import WorkViewPage from './component/work/WorkViewPage';
import PlanPage from './component/plan/PlanPage';
import './MainLayout.scss';

function MainLayout() {
  return (
    <div id="main" className="">
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/work/*" element={<WorkViewPage />} />
      </Routes>
    </div>
  );
}

export default MainLayout;