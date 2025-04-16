import React, { useState } from "react";
import {
  Home,
  PieChart,
  Briefcase,
  BarChart2,
  Settings,
  User,
  ChevronRight,
} from "lucide-react";
import "./dashboard.css";

function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div
        className={`sidebar ${
          sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
        }`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        {/* Logo Section */}
        <div
          className={`logo-section ${
            sidebarExpanded ? "logo-section-expanded" : "logo-section-collapsed"
          }`}
        >
          <div className="logo">PM</div>
          <span className={`logo-text ${sidebarExpanded ? "block" : "hidden"}`}>
            Portfolio Master
          </span>
        </div>

        {/* Navigation Section */}
        <div className="nav-section">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <Home size={20} className="nav-icon" />
                <span
                  className={`nav-text ${sidebarExpanded ? "block" : "hidden"}`}
                >
                  Dashboard
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <PieChart size={20} className="nav-icon" />
                <span
                  className={`nav-text ${sidebarExpanded ? "block" : "hidden"}`}
                >
                  Portfolio Analytics
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-link-active">
                <Briefcase
                  size={20}
                  className={`${
                    sidebarExpanded ? "nav-icon-active" : "nav-icon"
                  }`}
                />
                <span
                  className={`nav-text nav-text-active ${
                    sidebarExpanded ? "block" : "hidden"
                  }`}
                >
                  Investments
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <BarChart2 size={20} className="nav-icon" />
                <span
                  className={`nav-text ${sidebarExpanded ? "block" : "hidden"}`}
                >
                  Performance
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <Settings size={20} className="nav-icon" />
                <span
                  className={`nav-text ${sidebarExpanded ? "block" : "hidden"}`}
                >
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* My Account Section */}
        <div className="account-section">
          <a href="#" className="account-link">
            <div className="avatar">
              <User size={18} className="avatar-icon" />
            </div>
            <div
              className={`account-info ${sidebarExpanded ? "block" : "hidden"}`}
            >
              <p className="account-name">My Account</p>
              <p className="account-email">John Doe</p>
            </div>
          </a>
        </div>

        {/* Toggle button */}
        <div
          className={`toggle-button ${
            sidebarExpanded ? "toggle-button-rotated" : ""
          }`}
          onClick={toggleSidebar}
        >
          <ChevronRight size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-title">Portfolio Dashboard</h1>
          <p className="page-subtitle">
            Welcome back! Here's your portfolio overview
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-label">Total Value</h3>
            <p className="stat-value">$245,890</p>
            <div className="stat-trend">
              <span className="trend-up">↑ 2.5%</span>
              <span className="trend-info">vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <h3 className="stat-label">Monthly Return</h3>
            <p className="stat-value">+$5,946</p>
            <div className="stat-trend">
              <span className="trend-up">↑ 1.2%</span>
              <span className="trend-info">vs last month</span>
            </div>
          </div>

          <div className="stat-card">
            <h3 className="stat-label">Asset Classes</h3>
            <p className="stat-value">5</p>
            <div className="stat-trend">
              <span className="trend-neutral">Diversified</span>
            </div>
          </div>
        </div>

        <div className="chart-grid">
          <div className="chart-card">
            <h3 className="chart-title">Portfolio Allocation</h3>
            <div className="chart-placeholder">
              {/* Placeholder for chart */}
              <div className="chart-placeholder-content">
                <PieChart size={40} className="chart-placeholder-icon" />
                <p className="chart-placeholder-text">Asset allocation chart</p>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Recent Transactions</h3>
            <div className="transaction-list">
              <div className="transaction-item">
                <div className="transaction-info">
                  <div className="transaction-icon transaction-buy">+</div>
                  <div className="transaction-details">
                    <p className="transaction-name">Buy AAPL</p>
                    <p className="transaction-date">Apr 12, 2025</p>
                  </div>
                </div>
                <span className="transaction-amount amount-positive">
                  +$2,450
                </span>
              </div>
              <div className="transaction-item">
                <div className="transaction-info">
                  <div className="transaction-icon transaction-sell">-</div>
                  <div className="transaction-details">
                    <p className="transaction-name">Sell TSLA</p>
                    <p className="transaction-date">Apr 10, 2025</p>
                  </div>
                </div>
                <span className="transaction-amount amount-negative">
                  -$1,830
                </span>
              </div>
              <div className="transaction-item">
                <div className="transaction-info">
                  <div className="transaction-icon transaction-deposit">↓</div>
                  <div className="transaction-details">
                    <p className="transaction-name">Deposit</p>
                    <p className="transaction-date">Apr 5, 2025</p>
                  </div>
                </div>
                <span className="transaction-amount amount-neutral">
                  +$5,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
