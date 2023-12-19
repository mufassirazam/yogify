import NavBar from "./NavBar";
import Text from "./Text";
import AdmissionForm from "./AdmissionForm";
import { useState } from "react";

const LandingPage = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <NavBar takeit={setStatus}/>
      {
        <div
          className="h-screen bg-[url('https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:bg-[url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
          style={{ backgroundSize: "cover" }}
        >
          <div className="w-full bg-black bg-opacity-60">
            {status ? <AdmissionForm takeit={setStatus}/> : <Text takeit={setStatus} />}
          </div>
        </div>
      }
    </>
  );
};

export default LandingPage;
