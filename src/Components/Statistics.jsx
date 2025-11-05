import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import HeaderCard from "./HeaderCard";

const Statistics = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, order: "asc" });

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((products) => {
        const formatted = products.map((item) => ({
          name: item.product_title,
          price: item.price,
          rating: item.rating,
        }));
        setData(formatted);
      })
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const handleSort = (key) => {
    const newOrder =
      sortConfig.key === key && sortConfig.order === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) =>
      newOrder === "asc" ? a[key] - b[key] : b[key] - a[key]
    );
    setSortConfig({ key, order: newOrder });
    setData(sortedData);
  };

    return (
      <div>
        <div className="">
          
          <HeaderCard headerTitle={"Statistics"} />
        </div>
        <div className="">
          <div className="flex justify-between items-center mb-4 mx-auto w-10/12">
            <h2 className="text-3xl font-bold">Statistics</h2>
            <div className="space-x-3 ">
              <button
                onClick={() => handleSort("price")}
                className="px-4 py-2 bg-[#8B27DD] text-white rounded-md hover:bg-[#741cc7] transition"
              >
                Sort by Price
              </button>
              <button
                onClick={() => handleSort("rating")}
                className="px-4 py-2 bg-[#FF3B30] text-white rounded-md hover:bg-[#e62c20] transition"
              >
                Sort by Rating
              </button>
            </div>
          </div>

          <div className="bg-base-200 p-6 rounded-2xl shadow-md w-10/12 mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#8B27DD]">
              Product Price vs Rating Statistics
            </h2>

            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  angle={-40}
                  textAnchor="end"
                  interval={0}
                  height={80}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar
                  dataKey="price"
                  name="Price"
                  barSize={30}
                  fill="#8B27DD"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="rating"
                  name="Rating"
                  stroke="#FF3B30"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};

export default Statistics;
