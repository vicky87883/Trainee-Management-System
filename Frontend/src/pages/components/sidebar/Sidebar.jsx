import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./Sidebar.scss"
import IMG from "../../../statics/imgs/hsvp.png"
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="top"><span className="logo">
        <img src={IMG} alt="" width="100px"/>
          </span></div>
          <hr />
        <div className="center"><ul>
          <p className="title">MAIN</p>
          <li><span><GridViewIcon className="icons"/> Dashboard</span>
        </li>
        <p className="title">LISTS</p>
        
        <li><span><AccountCircleIcon className="icons"/><a href="login">Users</a></span>
          </li><li><span><AddBusinessIcon className="icons"/>Products</span>
          </li><li><span><BorderColorIcon className="icons"/>Orders</span>
          </li><li><span><DeliveryDiningIcon className="icons"/>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          
          <li><span><QueryStatsIcon className="icons"/>Stats</span>
          </li><li><span><NotificationsActiveIcon className="icons"/>Notifications</span>

          </li>
          <p className="title">SERVICES</p>
          
          <li><span><MonitorHeartIcon className="icons"/>System Health</span>
          </li><li><span><PsychologyIcon className="icons"/>Logs</span>
          </li><li><span><SettingsApplicationsIcon className="icons"/>Settings</span>
          </li>
          <p className="title">USERS</p>
          <li><span><AccountCircleOutlinedIcon className="icons"/>Profile</span>
          </li><li><span><LogoutOutlinedIcon className="icons"/>Logout</span>
          </li></ul>
          </div>
        <div className="bottom">
          <div className="coloroption"></div>
          <div className="coloroption"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
