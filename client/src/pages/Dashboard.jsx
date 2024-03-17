import { useSelector } from "react-redux";
import Navbar from "../components/Dashboard/Navbar";
import ShowTweets from "../components/Dashboard/ShowTweets";
import PostTweet from "../components/Dashboard/PostTweet";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(user);
    if (user.username == undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row  h-full w-full">
        <div className="w-3/5 overflow-y-scroll">
          <ShowTweets />
        </div>
        <div className="w-2/5">
          <PostTweet />
        </div>

        {/* SHOW TWEETS */}
        {/* POST TWEET */}
      </div>
    </div>
  );
};

export default Dashboard;
