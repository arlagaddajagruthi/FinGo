import { Suspense } from "react";
import DashboardPage from "./page";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold text-pink-600 mb-5">Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
