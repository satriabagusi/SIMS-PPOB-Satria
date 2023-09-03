import Navbar from "./Navbar";



const HomeLayout = (props) => {
  const { children } = props;

  return (
    <div>
        <Navbar  />
        {children}
    </div>
  );
};

export default HomeLayout;
