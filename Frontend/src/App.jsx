import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiscoverPage from './Pages/DiscoverPage';
import backgroundImg from '../src/assets/background.jpg';
import ProfilePage from './Pages/ProfilePage';
import LoggedInNavbar from './Components/LoggedInNavbar';
import Dashboard from './Pages/Dashboard';
import ChatPage from './Pages/ChatPage';
import WalletPage from './Pages/WalletPage';
import UpgradePage from './Pages/UpgradePage';
import ProjectsPage from './Pages/ProjectsPage';
import OnboardingPage from './Pages/OnboardingPage';
import UserProfilePage from './Pages/UserProfilePage';
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <Navbar /> */}
          <LoggedInNavbar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1  overflow-x-hidden overflow-y-auto bg-slate-50 p-4">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/profile/update" element={<CreateUser />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/upgrade" element={<UpgradePage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
