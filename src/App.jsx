import "./App.css";
import AchievementGallery from "./components/AchievementGallery";
import ProjectGallery from "./components/ProjectGallery";
import SingleProjectView from "./components/SingleProjectView";
import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Wrapper />} />
      <Route path="/ProjectGallery" element={<ProjectGallery />} />
      <Route path="/achievementGallery" element={<AchievementGallery />} />
      <Route path="/projects/:id" element={<SingleProjectView />} />

    </Routes>
   );
}

export default App;