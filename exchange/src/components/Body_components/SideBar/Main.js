import { FilterList } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import Allquestions from "./Allquestions";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <h2>All Questions</h2>
        <Link>
          <button>Ask Question</button>
        </Link>
        <div className="main-dec">
          <p>Top Questions</p>
          <div className="main-filter">
            <div className="main-tab">
              <Link>Newest</Link>
              <Link>Active</Link>
              <Link>More</Link>
              <div className="main-filter-item">
                <FilterList />
                <p>Filter</p>
              </div>
            </div>
          </div>
          <div className="questions">
            <div className="question">
              <Allquestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
