"use client"
import UsersTable from "./components/users-table";

const page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Users</h1>
      <UsersTable />
    </div>
  );
};

export default page;
