const Text = ({ takeit }) => {
  return (
    <>
      <div className="m-5 p-5 flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          Welcome to Your Yoga Journey!
        </h1>
        <h4 className="lg:w-3/5 lg:text-2xl  text-white">
          Discover yoga's transformative power in our inclusive community.
          Access diverse classNamees, mindfulness session, and exclusive
          resources. Connect with like-minded individuals, share experiences,
          and embark on a journey of wellness and inner balance. Join us today
          to start your enriching yoga adventure! Enroll now and thrive.
        </h4>
        <button
          className="px-5 py-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => {
            takeit(true);
          }}
        >
          Enroll Now
        </button>
      </div>
    </>
  );
};

export default Text;
