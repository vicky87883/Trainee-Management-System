import React from 'react'
import "./Featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last Payment
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresult">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultamount">
                $12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemresult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultamount">
                $12.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemresult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">
                $12.4k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
