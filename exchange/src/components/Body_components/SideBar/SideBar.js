import React from "react";
import Public from "@mui/icons-material/Public";
import Stars from "@mui/icons-material/Stars";
import Work from "@mui/icons-material/Work";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-options">
            <link>Home</link>
          </div>
          <div className="sidebar-options">
            <link>PUBLIC</link>
            <div className="link">
              <div className="link-tag">
                <Public />
                <link>Question</link>
              </div>
              <div className="tag">
                <link>Tags</link>
                <link>Users</link>
              </div>
            </div>
          </div>

          <div className="sidebar-options">
            <link>COLLECTIVES</link>
            <div className="link">
              <div className="link-tag">
                <Stars />
                <link>Explore Collectives</link>
              </div>
              {/* <div className="tag">
                <link>Tags</link>
                <link>Users</link>
              </div> */}
            </div>
          </div>

          <div className="sidebar-options">
            <link>FIND A JOB</link>
            <div className="link">
              <div className="link-tag">
                <link>Question</link>
              </div>
              <div className="tag">
                <link>Jobs</link>
                <link>Companies</link>
                <link>Discussions</link>
              </div>
            </div>
          </div>

          <div className="sidebar-options">
            <link>TEAMS</link>
            <div className="link">
              <div className="link-tag">
                <Work />
                <link>Companies</link>
              </div>
              <div className="tag">
                <link>Tags</link>
                <link>Users</link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
