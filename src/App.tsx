import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageDesktop from "./pages/HomePageDesktop";
import RequestLogEditor from "./pages/RequestLogEditor";
import AnalyticsCreator from "./pages/AnalyticsCreator";
import WorkspaceEditor from "./pages/WorkspaceEditor";
import DesktopSignUp from "./pages/DesktopSignUp";
import WorkspaceCreator from "./pages/WorkspaceCreator";
import UploadScreen from "./pages/UploadScreen";
import RequestLogCreator from "./pages/RequestLogCreator";
import DesktopSignUp2 from "./pages/DesktopSignUp2";
import DesktopLogIn2 from "./pages/DesktopLogIn2";
import DesktopLogIn from "./pages/DesktopLogIn";
import Image24 from "./pages/Image24";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/request-log-editor":
        title = "";
        metaDescription = "";
        break;
      case "/analytics-creator":
        title = "";
        metaDescription = "";
        break;
      case "/workspace-editor":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-signup":
        title = "";
        metaDescription = "";
        break;
      case "/workspace-creator":
        title = "";
        metaDescription = "";
        break;
      case "/upload-screen":
        title = "";
        metaDescription = "";
        break;
      case "/request-log-creator":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-signup-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-login-2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-login":
        title = "";
        metaDescription = "";
        break;
      case "/image-24":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageDesktop />} />
      <Route path="/request-log-editor" element={<RequestLogEditor />} />
      <Route path="/analytics-creator" element={<AnalyticsCreator />} />
      <Route path="/workspace-editor" element={<WorkspaceEditor />} />
      <Route path="/desktop-signup" element={<DesktopSignUp />} />
      <Route path="/workspace-creator" element={<WorkspaceCreator />} />
      <Route path="/upload-screen" element={<UploadScreen />} />
      <Route path="/request-log-creator" element={<RequestLogCreator />} />
      <Route path="/desktop-signup-2" element={<DesktopSignUp2 />} />
      <Route path="/desktop-login-2" element={<DesktopLogIn2 />} />
      <Route path="/desktop-login" element={<DesktopLogIn />} />
      <Route path="/image-24" element={<Image24 />} />
    </Routes>
  );
}
export default App;
