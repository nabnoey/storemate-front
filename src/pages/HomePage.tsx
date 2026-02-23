import { FaBox, FaUsers, FaChartLine, FaPlus, FaListUl, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Products", value: "1,250", icon: <FaBox className="text-black" />, change: "+12%" },
    { label: "Total Customers", value: "450", icon: <FaUsers className="text-black" />, change: "+5%" },
    { label: "Today's Sales", value: "$3,450", icon: <FaChartLine className="text-black" />, change: "+18%" }
  ];

  const quickActions = [
    { label: "Add Product", icon: <FaPlus />, path: "/products/add" },
    { label: "Inventory", icon: <FaListUl />, path: "/inventory" },
    { label: "Settings", icon: <FaCog />, path: "/settings" }
  ];

  return (
    <div className="space-y-12 animate-fade-in pb-12 bg-white min-h-screen">
      {/* Hero Section - Stark Minimalist */}
      <section className="relative overflow-hidden rounded-none border-b-4 border-black bg-white p-8 md:p-16 text-black">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
            Storemate <br />
            <span className="text-white bg-black px-2">System</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-xl border-l-4 border-black pl-6 italic">
            Precision inventory tracking and sales management. Minimalist. Efficient. Powerful.
          </p>
          <button 
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-black border-2 border-black hover:bg-white hover:text-black cursor-pointer uppercase tracking-widest"
            onClick={() => navigate("/products")}
          >
            Enter Dashboard
          </button>
        </div>
      </section>

      {/* Stats Grid - High Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y-2 border-black divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        {stats.map((stat, index) => (
          <div key={index} className="p-8 hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="text-3xl group-hover:invert-0 transition-all">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">{stat.label}</p>
                <div className="flex items-baseline gap-4 mt-2">
                  <h2 className="text-4xl font-black">{stat.value}</h2>
                  <span className="text-xs font-bold border border-black group-hover:border-white px-2 py-1">{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions - Grid blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center justify-center gap-4 h-48 border-2 border-dashed border-black hover:border-solid hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span className="text-3xl">{action.icon}</span>
                <span className="font-black uppercase text-sm tracking-widest">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-4 border-black p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase">System Status</h3>
            <p className="font-medium leading-relaxed">
              All modules operational. Last sync completed at 10:43 AM. 
              Efficiency rating: <span className="underline decoration-black decoration-4 offset-2">98.4%</span>
            </p>
          </div>
          <button className="mt-8 text-sm font-black underline uppercase hover:no-underline transition-all">
            View Analytics →
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center py-8 border-t-2 border-black mx-4">
        <p className="text-xs font-bold uppercase tracking-[0.5em] opacity-40">
          Storemate © 2026 // Minimal Edition
        </p>
      </div>
    </div>
  );
}

export default HomePage;