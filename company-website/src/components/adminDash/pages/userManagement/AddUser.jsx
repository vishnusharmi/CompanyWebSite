const AddUser = () => {
  return (
    <div>
      <form action="" className="bg-red-100 flex flex-col gap-4 p-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-ful p-2 outline-none border-2 border-gray-400 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-ful p-2 outline-none border-2 border-gray-400 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-ful p-2 outline-none border-2 border-gray-400 rounded-md"
        />
        {/* NEED TO CHANGE THE NAME ATTR */}
        <input
          type="file"
          name="file"
          className="w-full file:bg-blue-500 file:w-fit file:py-2 file:px-4 file:rounded-md file:self-center file:text-white file:cursor-pointer"
        />

        <select name="role" className="w-full p-2 border rounded">
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="User">User</option>
        </select>

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 w-fit py-2 px-4 rounded-md self-center text-white hover:bg-blue-600 transition-all cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddUser;
