import Index from "./components/Homepage/templates/Index";
import Page from "./components/Homepage/templates/Page";
import Companey from "./components/Homepage/modules/Companey";
import Location from "./components/Homepage/modules/Location";
import Video from "./components/Homepage/modules/Video";
import Group from "./components/Homepage/modules/Group";
import Personal from "./components/Homepage/modules/Personal";
import Request from "./components/Homepage/modules/Request";
import GroupLesson from "./components/Homepage/modules/GroupLesson";
import PersonalLesson from "./components/Homepage/modules/PersonalLesson";
import Seminar from "./components/Homepage/modules/Seminar";
import Interview from "./components/Homepage/modules/Interview";
import Review from "./components/Homepage/modules/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={process.env.public_url}>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/homepage" index element={<Index />} />
          <Route path="/homepage/:p" element={<Page />}>
            <Route path="companey" element={<Companey />} />
            <Route path="location" element={<Location />} />
            <Route path="video" element={<Video />} />
            <Route path="group" element={<Group />} />
            <Route path="Personal" element={<Personal />} />
            <Route path="request" element={<Request />} />
            <Route path="groupLesson" element={<GroupLesson />} />
            <Route path="personalLesson" element={<PersonalLesson />} />
            <Route path="seminar" element={<Seminar />} />
            <Route path="interview" element={<Interview />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
