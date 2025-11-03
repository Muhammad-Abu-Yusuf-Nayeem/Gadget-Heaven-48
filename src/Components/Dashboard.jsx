import HeaderCard from "./HeaderCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import Cart from "./Cart";
const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("cart");
  return (
    <div>
      <div className="pb-4 bg-[#9538E2] mb-auto">
        <HeaderCard headerTitle={"Dashboard"} />
      </div>
      <div className="  border-white  gap-16  ">
        <Tabs className=" ">
          <TabList className="flex gap-4 justify-center bg-[#9538E2] pb-8">
            {/* Cart Tab */}
            <Tab
              onClick={() => setSelectedTab("cart")}
              className={`btn rounded-full text-xl px-16 py-6 ${
                selectedTab === "cart"
                  ? "bg-white text-[#8b27dd] font-bold border-white"
                  : "btn-outline text-white border-white rounded-full"
              }`}
            >
              Cart
            </Tab>

            {/* Wish List Tab */}
            <Tab
              onClick={() => setSelectedTab("wishlist")}
              className={`btn rounded-full text-xl px-16 py-6 ${
                selectedTab === "wishlist"
                  ? "bg-white text-[#8b27dd] font-bold border-white"
                  : "btn-outline text-white border-white rounded-full"
              }`}
            >
              Wish List
            </Tab>
          </TabList>
          <TabPanel className="bg-base-300  mt-8 px-32 mx-auto ">
            <Cart></Cart>
          </TabPanel>
          <TabPanel>
            <h2>Wish lists are here</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
