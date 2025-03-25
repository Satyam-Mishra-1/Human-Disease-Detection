import React , { useEffect } from 'react';
import {Route,Routes,useNavigate} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Home, Onboarding, Profile } from './pages';
import { useStateContext } from './context';
import { usePrivy } from '@privy-io/react-auth';
import MedicalRecord from './pages/records/index'
import SingleRecordDetails from './pages/records/single-record-details';
import ScreeningSchedule from './pages/ScreeningSchedule';
import UploadForm from './pages/UploadForm';

const App = () => {

    const { user, authenticated, ready, login, currentUser } = useStateContext();
    const navigate = useNavigate();


    useEffect(() => {
      if (ready && !authenticated) {
        login();
      } else if (user && !currentUser) {
        navigate("/onboarding");
      }
    }, [user, authenticated, ready, login, currentUser, navigate]);

    return (
        <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4"> 
            <div className="relative mr-10 hidden sm:flex">
              <Sidebar />
              
            </div>

            <div className="max-auto max-w-[1280px] flex-1 max-sm:w-full sm-pr-5">
                < Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/medical-records" element={<MedicalRecord />} />
                    <Route path="/medical-records/:id" element={<SingleRecordDetails />} />
                    <Route path="/screening-schedules" element={<ScreeningSchedule  />} />
                    <Route path="/upload-form" element={<UploadForm />} />

                </Routes>
            </div>

        </div>
    )
}

export default App;
