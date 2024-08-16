import { useUser } from "@clerk/clerk-react"
import FinancialRecordForm from "./financial-record-form";
import FinancialRecordList from "./financial-record-list";

function Dashboard() {
   const  {user } = useUser(); 
  return (
    <div  className='dashboard-container'>
      <h1>Hello {user?.firstName}, Here are your finances</h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  )
}

export default Dashboard
