import Navbar from "./Component/Navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      
    </>
  );
}
