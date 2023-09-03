import { useParams } from "react-router-dom";
import PayServiceForm from "../components/Fragments/PayServiceForm";
import ProfileSection from "../components/Fragments/ProfileSection";
import HomeLayout from "../components/Layouts/HomeLayouts";

const PayServicePage = () => {
  const { service_code } = useParams();

  return (
    <HomeLayout>
      <ProfileSection />
      <PayServiceForm serviceCode={service_code} />
    </HomeLayout>
  );
};

export default PayServicePage;
