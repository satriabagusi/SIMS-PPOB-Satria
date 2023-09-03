import HistoryTransaction from "../components/Fragments/HistoryTransaction";
import ProfileSection from "../components/Fragments/ProfileSection";
import HomeLayout from "../components/Layouts/HomeLayouts";

const TransactionHistoryPage = () => {
  return (
    <HomeLayout>
      <ProfileSection />
      <HistoryTransaction />
    </HomeLayout>
  );
};

export default TransactionHistoryPage;
