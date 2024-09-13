import FooterNav from "./_components/footerNav";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className=" bg-gradient h-full w-full flex flex-col gap-y-10 items-center justify-center">
      <Navbar />
      {children}
      {/* <FooterNav /> */}
    </div>
  );
};

export default ProtectedLayout;
