import { useState } from "react";

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({});

  const handleEmployeeFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setEmployeeData(data);
    event.target.reset();
  };

  console.log(employeeData);

  return (
    <form
      action=""
      className="flex flex-col p-4 gap-2"
      onSubmit={handleEmployeeFormSubmit}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="username" className="text-sm">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          required
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
            required
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
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact_number" className="text-sm">
          Contact Number:
        </label>
        <input
          type="phone"
          name="contact_number"
          id="contact_number"
          placeholder="Enter contact number"
          maxLength={10}
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="address" className="text-sm">
          Address:{" "}
        </label>
        <textarea
          name="address"
          id="address"
          placeholder="Enter address"
          className="outline-none border-2 border-blue-200 rounded-md px-4 py-2"
          required
        ></textarea>
      </div>

      <input
        type="file"
        name="image_url"
        id="image_url"
        className="file:bg-blue-400 file:px-3 file:py-2 file:cursor-pointer file:text-white file:rounded-md file:mr-4"
        required
      />

      <div className="flex items-center gap-4">
        <p>Choose a gender:</p>
        <section className="flex gap-2">
          <label htmlFor="male" className="justify-self-center">
            Male:
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            className="cursor-pointer"
            required
          />
        </section>
        <section className="flex gap-2">
          <label htmlFor="female">Female:</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            className="cursor-pointer"
            required
          />
        </section>
        <section className="flex gap-2">
          <label htmlFor="other">Other:</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            className="cursor-pointer"
            required
          />
        </section>
      </div>
      <button
        type="submit"
        className="w-fit bg-blue-600 rounded-md text-white px-4 py-2 self-center cursor-pointer mt-3"
      >
        Create Account
      </button>
    </form>
  );
};

export default EmployeeForm;
