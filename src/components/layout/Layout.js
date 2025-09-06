import PrimaryNav from '../sections/PrimaryNav';
import SecondaryNav from '../sections/SecondaryNav'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
  
      {/* Navbar */}
      <div className="relative z-20">
        <SecondaryNav />
        <PrimaryNav />
      </div>

      {/* Main content */}
      <main className="relative z-10">{children}</main>
      </div>

  );
};

export default Layout;