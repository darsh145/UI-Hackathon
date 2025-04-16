import React from "react";
import {
  Search,
  Bell,
  BarChart2,
  Wallet,
  PieChart,
  Package,
  User,
  LogOut,
  MoreVertical,
  Settings,
} from "lucide-react";
import "./crypto-dashboard.css";

function CryptoDashboard() {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">C</div>
        </div>
        <div className="nav-icons">
          <div className="nav-icon active">
            <BarChart2 size={24} />
          </div>
          <div className="nav-icon">
            <Wallet size={24} />
          </div>
          <div className="nav-icon">
            <PieChart size={24} />
          </div>
          <div className="nav-icon">
            <Package size={24} />
          </div>
          <div className="nav-icon user">
            <User size={24} />
          </div>
          <div className="nav-icon logout">
            <LogOut size={24} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1 className="title">Overview</h1>
          <div className="header-actions">
            <div className="action-icon">
              <Search size={20} />
            </div>
            <div className="action-icon">
              <Bell size={20} />
            </div>
            <div className="user-profile">
              <img
                src="/api/placeholder/40/40"
                alt="User avatar"
                className="avatar"
              />
              <span className="user-name">John Doe.</span>
            </div>
          </div>
        </div>

        {/* Portfolio and Assets Section */}
        <div className="dashboard-grid">
          <div className="section-header">
            <h2>Portfolio</h2>
          </div>
          <div className="section-header right">
            <h2>Your Assets</h2>
            <Settings size={18} />
          </div>

          {/* Portfolio Chart */}
          <div className="portfolio-chart">
            <div className="portfolio-balance">
              <h1 className="balance-amount">$17,643.41</h1>
              <p className="balance-label">Portfolio balance</p>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder"></div>
              <div className="chart-marker">
                <div className="marker-point"></div>
                <div className="marker-label">$27,483.00</div>
              </div>
            </div>
            <div className="time-filters">
              <span className="time-filter">1H</span>
              <span className="time-filter">24H</span>
              <span className="time-filter active">1W</span>
              <span className="time-filter">1M</span>
              <span className="time-filter">1Y</span>
              <span className="time-filter">ALL</span>
            </div>
          </div>

          {/* Asset Cards */}
          <div className="assets-container">
            <div className="asset-card bitcoin">
              <div className="asset-header">
                <div className="asset-amount">1.25 BTC</div>
                <MoreVertical size={16} />
              </div>
              <div className="asset-value">$ 2948.04</div>
              <div className="asset-footer">
                <div className="coin-icon btc-icon">₿</div>
                <div className="asset-change positive">+0.14%</div>
              </div>
            </div>

            <div className="asset-card litecoin">
              <div className="asset-header">
                <div className="asset-amount">0.32 LTC</div>
                <MoreVertical size={16} />
              </div>
              <div className="asset-value">$ 1600.04</div>
              <div className="asset-footer">
                <div className="coin-icon ltc-icon">Ł</div>
                <div className="asset-change positive">+0.31%</div>
              </div>
            </div>

            <div className="asset-card ethereum">
              <div className="asset-header">
                <div className="asset-amount">1.41 ETH</div>
                <MoreVertical size={16} />
              </div>
              <div className="asset-value">$ 2064.04</div>
              <div className="asset-footer">
                <div className="coin-icon eth-icon">Ξ</div>
                <div className="asset-change positive">+0.14%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Section */}
        <div className="market-section">
          <div className="market-header">
            <h2>Market is down 0.80%</h2>
            <div className="market-filters">
              <div className="filter-dropdown">
                <span>24h</span>
              </div>
              <div className="filter-dropdown">
                <span>Top gainers</span>
              </div>
            </div>
          </div>

          <div className="market-table">
            <div className="table-header">
              <div className="col name">Name</div>
              <div className="col price">Price</div>
              <div className="col change">Change</div>
              <div className="col market-cap">Market Cap</div>
              <div className="col watch">Watch</div>
            </div>

            <div className="table-row">
              <div className="col name">
                <div className="token-icon band">B</div>
                <div className="token-info">
                  <div className="token-name">Brand Protocol</div>
                  <div className="token-symbol">BAND</div>
                </div>
              </div>
              <div className="col price">$2.42</div>
              <div className="col change positive">+13.38%</div>
              <div className="col market-cap">$399.8M</div>
              <div className="col watch">
                <div className="bookmark"></div>
              </div>
            </div>

            <div className="table-row">
              <div className="col name">
                <div className="token-icon vet">V</div>
                <div className="token-info">
                  <div className="token-name">Ve Chain</div>
                  <div className="token-symbol">VET</div>
                </div>
              </div>
              <div className="col price">$7.48</div>
              <div className="col change positive">+11.19%</div>
              <div className="col market-cap">$152.5M</div>
              <div className="col watch">
                <div className="bookmark"></div>
              </div>
            </div>

            <div className="table-row">
              <div className="col name">
                <div className="token-icon aave">A</div>
                <div className="token-info">
                  <div className="token-name">Aave</div>
                  <div className="token-symbol">AAVE</div>
                </div>
              </div>
              <div className="col price">$0.128</div>
              <div className="col change positive">+7.57%</div>
              <div className="col market-cap">$1.2B</div>
              <div className="col watch">
                <div className="bookmark"></div>
              </div>
            </div>

            <div className="table-row">
              <div className="col name">
                <div className="token-icon wv">W</div>
                <div className="token-info">
                  <div className="token-name">Waves</div>
                  <div className="token-symbol">WV</div>
                </div>
              </div>
              <div className="col price">$30.68</div>
              <div className="col change positive">+6.80%</div>
              <div className="col market-cap">$362.8M</div>
              <div className="col watch">
                <div className="bookmark"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="promo-banner">
          <div className="promo-content">
            <h2 className="promo-title">
              Earn <span className="highlight">free</span> Crypto
            </h2>
            <h3 className="promo-subtitle">With Coinview Earn!</h3>
            <p className="promo-text">
              Learn about different cryptocurrencies and earn them for free!
            </p>
            <button className="earn-button">Earn Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoDashboard;
