import { Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendIcon from "@mui/icons-material/Send";

const Post = ({profile}) => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();
  };

  const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus, voluptate. Voluptas, voluptate! Doloribus.`;
  return (
    <Card padding={0} className="w-full">
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s"
            alt=""
            className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">Dummy User</div>
          <div className="text-xs text-gray-500">SDE-II Eng. @Amazon</div>
        </div>
      </div>

      <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
        {seeMore ? desc : desc.slice(0, 50) + "..."}{" "}
        <span
          onClick={() => setSeeMore((prev) => !prev)}
          className="cursor-pointer text-gray-500"
        >
          {seeMore ? "see less" : "see more"}
        </span>
      </div>

      <div className="w-[100%] h-[100%]">
        <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="" className="w-full" />
      </div>

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-600">1 Like</div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600">2 Comments</div>
        </div>
      </div>

      {
        !profile && (
          <div className="flex p-1">
        <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} />{" "}
          <span>Like</span>{" "}
        </div>
        <div onClick={() => setComment(true)} className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <CommentIcon sx={{ fontSize: 22 }} /> <span>Comment</span>{" "}
        </div>
        <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
          <SendIcon sx={{ fontSize: 22 }} /> <span>Share</span>{" "}
        </div>
      </div>
        )
      }

      {/* Comment Section */}
      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s"
              alt=""
              className="rounded-full w-10 h-10 border-2 border-white cursor-pointer"
            />
            <form
              action=""
              className="w-full flex gap-2"
              onSubmit={handleSendComment}
            >
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100"
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3"
              >
                Send
              </button>
            </form>
          </div>

          {/* Other's comment section */}
          <div className="w-full p-4">
            <div className="my-4 ">
              <div className="flex gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfTkosk_XISYGUe8YAUWMrv0kcP5a4YMcVQ&s"
                  alt="commenter_logo"
                  className="rounded-full w-10 h-10 border-2 border-white cursor-pointer"
                />
                <div className="cursor-pointer">
                  <div className="text-md">Sujay Kumar</div>
                  <div className="text-sm text-gray-500">@Netflex SDE-I</div>
                </div>
              </div>

              <div className="px-11 my-2">This is the Comment on Clone</div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
