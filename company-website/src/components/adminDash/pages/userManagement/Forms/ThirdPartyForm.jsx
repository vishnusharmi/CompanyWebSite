import { useState } from "react";

const ThirdPartyForm = () => {
  const [thirdPartyData, setThirdPartyData] = useState({});

  const handleThirdPartyFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setThirdPartyData(data);
    event.target.reset();
  };

  console.log(thirdPartyData);

  return (
    <form
      onSubmit={handleThirdPartyFormSubmit}
      className="flex flex-col p-4 gap-2"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company_name" className="text-sm">
          Company Name:
        </label>
        <input
          type="text"
          name="company_name"
          id="company_name"
          placeholder="Enter Company Name"
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company_address" className="text-sm">
          Company Address:
        </label>
        <textarea
          name="company_address"
          id="company_address"
          placeholder="Enter address"
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
        ></textarea>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company_website" className="text-sm">
          Company Website:
        </label>
        <input
          type="text"
          name="company_website"
          id="company_website"
          placeholder="Enter Company Website"
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
        />
      </div>

      {/* OPTION TAG */}
      <section className="flex justify-between">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="industry_type" className="text-sm">
            Choose Industry:
          </label>
          <select
            name="industry_type"
            id="industry_type"
            className="w-50 p-2 border-2 border-blue-200 outline-none rounded-md"
          >
            <option value="google" defaultChecked>
              Google
            </option>
            <option value="microsoft">Microsoft</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="gst_number" className="text-sm">
            Enter GST Number:
          </label>
          <input
            type="text"
            name="gst_number"
            id="gst_number"
            placeholder="Enter GST Number"
            className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          />
        </div>
      </section>
      <button
        type="submit"
        className="w-fit bg-blue-600 rounded-md text-white px-4 py-2 self-center cursor-pointer mt-3"
      >
        Create Account
      </button>
    </form>
  );
};

export default ThirdPartyForm;
