import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-8">
      <p className="text-6xl font-semibold text-center text-gray-800 mb-8">
  Hello {user?.firstName}, Here are your finances
</p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Financial Record Form */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Add a Financial Record
          </h2>
          <FinancialRecordForm />
        </div>

        {/* Financial Record List */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Your Financial Records
          </h2>
          <FinancialRecordList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
