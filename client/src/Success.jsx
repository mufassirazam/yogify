import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen bg-[url('https://images.unsplash.com/photo-1615657973599-990d6e05fb8a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:bg-[url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        style={{ backgroundSize: "cover" }}
      >
        <div className="w-full bg-black bg-opacity-60">
          <div className="m-5 p-5 flex flex-col items-center justify-center h-screen">
            <h4 className="text-1xl lg:text-3xl font-bold text-white m-4">
              Payment Successful!
            </h4>
            <h1 className="text-2xl lg:text-5xl font-bold text-white m-3">
              Thank You for Enrolling!
            </h1>
            <p className="lg:w-3/5 lg:text-2xl  text-white m-3">
              🎉 Welcome to our vibrant community of wellness enthusiasts! 🧘‍♀️🌟
              <br />
              Your commitment to your journey toward holistic well-being begins
              now. Get ready to dive into invigorating yoga sessions,
              mindfulness practices, and a supportive network that's here to
              uplift and inspire you every step of the way. Feel free to explore
              our diverse resources, connect with fellow members, and embrace
              this transformative experience fully. Let the path to inner
              harmony and wellness unfold before you. We're thrilled to have you
              on board! Namaste 🙏✨
            </p>
            <button
              className="px-5 py-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => {
                navigate("/");
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
