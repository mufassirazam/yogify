import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdmissionForm = ({ takeit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Anonymous",
    email: "abc@xyz.com",
    month: "January",
    age: 18,
    batch: "6AM-7AM",
    amount: 500,
  });

  const [emailError, setEmailError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate email
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    if (!formData.email.match(validRegex)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    try {
      const response = await fetch("http://localhost:3001/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle response from backend
      if (data.success) {
        navigate("/success");
      } else {
        alert("Payment failed. Please try again." + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen m-3">
        <div className="p-10 rounded-md bg-white shadow-2xl">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-row flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-full-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-full-name"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full  px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="text"
                  placeholder="abc@xyz.com"
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>
              {emailError ? (
                <p className="text-red-500 text-xs italic">
                  Please enter a valid email.
                </p>
              ) : null}
              <div className="w-full  px-3 mb-6 md:mb-3 py-1">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2"
                  for="grid-month"
                >
                  Payment for Month
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-month"
                    onChange={handleChange}
                    name="month"
                    required
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-age"
                >
                  Age
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-age"
                  type="number"
                  placeholder="18"
                  min={18}
                  max={65}
                  onChange={handleChange}
                  name="age"
                  required
                />
                <p className="text-gray-600 text-xs italic m-2">
                  Age must be between 18 and 65.
                </p>
              </div>
              <div className="w-full  px-3 mb-6 md:mb-1">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-timings"
                >
                  Timings
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-timings"
                    onChange={handleChange}
                    name="batch"
                    required
                  >
                    <option value="6AM-7AM">6 AM - 7 AM</option>
                    <option value="7AM-8AM">7 AM - 8 AM</option>
                    <option value="8AM-9AM">8 AM - 9 AM</option>
                    <option value="5PM-6PM">5 PM - 6 PM</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-amount"
                >
                  Amount
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-amount"
                  type="text"
                  value={500}
                  readOnly
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => takeit(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
