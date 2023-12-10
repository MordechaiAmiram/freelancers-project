import './App.css';
// import PrimarySearchAppBar from './components/navbar/PrimarySearchAppBar';
// import SideBarForm from './components/sideBar/SideBarForm';
// import PrivateUserProfileForm from './pages/PrivateUserProfileForm/PrivateUserProfileForm';
// import ProfileCardForm from './components/profileCard/ProfileCardForm';
// import PublicUserProfileForm from './pages/publicUserProfile/PublicUserProfileForm';
// import HomeForm from './pages/home/HomeForm';
// import LogInForm from './pages/logIn/LogInForm';
// import SignUpForm from './pages/signUp/SignUpForm';
// import SignUpFreelanceForm from './pages/signUp/SignUpFreelanceForm';
import AppRouting from './components/AppRouting';

function App() {
  return (
    <div className="App">
    <AppRouting />
      {/* <HomeForm />
      <PublicUserProfileForm />
      <ProfileCardForm />
      <LogInForm />
      <SignUpForm />
      <SignUpFreelanceForm />
      <PrivateUserProfileForm /> */}
      {/* {/* <SideBarForm /> */}
      {/* <PrimarySearchAppBar /> */}
    </div>
  );
}

export default App;
