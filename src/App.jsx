import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LockScreen from "./pages/LockScreen";
import Account from "./pages/Account";
import Music from "./pages/Music";
import Games from "./pages/Games";
import Layout from "./Layout";
import Camera from "./components/Camera";
import Card from "./components/Card";
import Excel from "./components/Excel";
import Xbox from "./components/Xbox";
import InternetExplorer from "./components/InternetExplorer";
import Mail from "./components/Mail";
import Maps from "./components/Maps";
import OneDrive from "./components/OneDrive";
import Outlook from "./components/Outlook";
import Panoroma from "./components/Panoroma";
import Phone from "./components/Phone";
import Photo from "./components/Photo";
import PowerPoint from "./components/PowerPoint";
import Skype from "./components/Skype";
import Storyteller from "./components/Storyteller";
import SubwaySurfer from "./components/SubwaySurfer";
import TempleRun from "./components/TempleRun";
import Video from "./components/Video";
import Vine from "./components/Vine";
import Windows from "./components/Windows";
import Word from "./components/Word";
import MyCalendar from "./components/Calender";
import { useLocation } from "react-router-dom";
import GolangProfile from "./pages/GolangProfile";
import JavascriptProfile from "./pages/JavascriptProfile";

const App = () => {
  const location = useLocation();
  return (
    <div className=" mx-2 my-1   border-orange-500 rounded border-[6px]">
      <Layout location={location}>
        <Routes className=" md:hidden flex">
          <Route path="/" element={<LockScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/music" element={<Music />} />
          <Route path="/games" element={<Games />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/card" element={<Card />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/calender" element={<MyCalendar />} />
          <Route path="/xbox" element={<Xbox />} />
          <Route path="/explorer" element={<InternetExplorer />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/music" element={<Music />} />
          <Route path="/onedrive" element={<OneDrive />} />
          <Route path="/outlook" element={<Outlook />} />
          <Route path="/panoroma" element={<Panoroma />} />
          <Route path="/golang" element={<GolangProfile />} />
          <Route path="/js" element={<JavascriptProfile />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/powerpoint" element={<PowerPoint />} />
          <Route path="/skype" element={<Skype />} />
          <Route path="/storyteller" element={<Storyteller />} />
          <Route path="/subway" element={<SubwaySurfer />} />
          <Route path="/templerun" element={<TempleRun />} />
          <Route path="/video" element={<Video />} />
          <Route path="/vine" element={<Vine />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/word" element={<Word />} />
          <Route path="/xbox" element={<Xbox />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
