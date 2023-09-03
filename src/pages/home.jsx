

import BannerPromo from "../components/Fragments/BannerPromo";
import ProfileSection from "../components/Fragments/ProfileSection";
import ServiceList from "../components/Fragments/ServiceList";
import HomeLayout from "../components/Layouts/HomeLayouts";



const HomePage = () => {
  return (
    <div>

    <HomeLayout>

        <ProfileSection />

        <ServiceList />

        <BannerPromo />


    </HomeLayout>

    </div>
  );
};

export default HomePage;
