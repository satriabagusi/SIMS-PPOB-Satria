import ProfileSection from "../components/Fragments/ProfileSection";
import TopUpForm from "../components/Fragments/TopUpForm";
import HomeLayout from "../components/Layouts/HomeLayouts";

const TopUpPage = () => {
  return (
    <HomeLayout>
      <ProfileSection/>
      <TopUpForm/>
    </HomeLayout>
  );
};

export default TopUpPage;
