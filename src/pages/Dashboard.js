import React from "react";
import Footer from "../components/footer";
import Head from "../components/head";
import List from "../components/list";
import Seacrh from "../components/search";
function Dashboard() {
  return (
    <div className="w-full">
      <Head />
      <Seacrh />
      <List />
      <Footer />
    </div>
  );
}
export default Dashboard;
