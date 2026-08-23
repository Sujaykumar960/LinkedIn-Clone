import { Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendIcon from "@mui/icons-material/Send";
import axios from 'axios';
import { ToastContainer,toast} from 'react-toastify';
import { Link } from 'react-router-dom';

const Post = ({ profile, item, personalData }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [liked, setLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(item?.likes?.length || 0);


  const handleSendComment = async(e) => {
    e.preventDefault();
    if (commentText.trim().length===0) return toast.error('Comment cannot be empty');

    await axios.post(`http://localhost:4000/api/comment`,{postId: item?._id,comment: commentText},{withCredentials:true}).then((res)=>{
      setComments([res.data.comment, ...comments]);
    }).catch ((err) => {
      console.log(err);
      alert('Failed to send comment');
    });
  };

  useEffect(() => {
    setNoOfLikes(item?.likes?.length || 0);
    const selfId = personalData?._id;
    if (selfId && item?.likes) {
      const isLiked = item.likes.some((likeId) => likeId.toString() === selfId.toString());
      setLiked(isLiked);
    } else {
      setLiked(false);
    }
  }, [personalData, item]);

  const handleLikeFunc = async () => {
    await axios.post('http://localhost:4000/api/post/likeDislike', { postId: item?._id }, { withCredentials: true }).then(res => {
      if (liked) {
        setNoOfLikes((prev) => prev - 1);
        setLiked(false)
      } else {
        setLiked(true)
        setNoOfLikes((prev) => prev + 1);
      }
    }).catch(err => {
      console.log(err)
      alert('Something Went Wrong')
    })
  }

  const handleCommentBoxOpenClose = async () => {
    setComment(true)
    await axios.get(`http://localhost:4000/api/comment/${item?._id}`).then(res => {
      console.log(res)
      setComments(res.data.comments)
    }).catch(err => {
      console.log(err)
      alert('Something Went Wrong')
    })
  }

  const copyToClipboard = async() => {
    try{
      let string = `localhost:5173/profile/${item?.user?._id}/activities/${item?._id}`
      await navigator.clipboard.writeText(string)
      toast.success('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy link')
    }
  }

  const desc = item?.desc

  return (
    <Card padding={0} className={`${profile ? 'h-full' : ''} w-full flex flex-col`}>
      <div className="flex gap-3 p-4 flex-shrink-0">
        <div className="w-12 h-12 rounded-4xl">
          {profile ? (
            <img src={item?.user?.profilePic} alt="" className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer" />
          ) : (
            <Link to={`/profile/${item?.user?._id}`} className="w-12 h-12 rounded-4xl">
              <img src={item?.user?.profilePic} alt="" className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer" />
            </Link>
          )}
        </div>
        <div>
          <div className="text-lg font-semibold">{item?.user?.f_name}</div>
          <div className="text-xs text-gray-500">{item?.user?.headline}</div>
        </div>
      </div>

      {
        desc?.length > 0 && (
          <div className="text-md p-4 my-3 whitespace-pre-line">
            {seeMore ? desc : desc.slice(0, 50) + "..."}{" "}{desc?.length > 50 && (
              <span onClick={() => setSeeMore((prev) => !prev)} className="cursor-pointer text-gray-500">{seeMore ? "see less" : "see more"}</span>
            )}
          </div>
        )
      }

      {
        item?.imageLink && (
          <div className="w-full max-h-[500px] overflow-hidden">
            <img src={item?.imageLink} alt="" className="w-full h-full object-cover" />
          </div>
        )
      }


      <div className="my-2 p-4 flex justify-between items-center mt-auto">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-600">{noOfLikes} Like</div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600">{item?.comments} Comments</div>
        </div>
      </div>

      {
        !profile && (
          <div className="flex p-1">
            <div onClick={handleLikeFunc} className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
              {liked ? <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} /> : <ThumbUpOffAltIcon sx={{ fontSize: 22 }} />}
              <span>{liked ? 'Liked' : 'Like'}</span>{" "}
            </div>

            <div onClick={handleCommentBoxOpenClose} className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
              <CommentIcon sx={{ fontSize: 22 }} /> <span>Comment</span>{" "}
            </div>

            <div onClick={copyToClipboard} className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100">
              <SendIcon sx={{ fontSize: 22 }} /> <span>Share</span>{" "}
            </div>
          </div>
        )
      }

      {/* Comment Section */}
      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img src={personalData?.profilePic} alt="" className="rounded-full w-10 h-10 border-2 border-white cursor-pointer" />

            <form action="" className="w-full flex gap-2" onSubmit={handleSendComment}>
              <input value={commentText} onChange={(event)=>setCommentText(event.target.value)} type="text" placeholder="Add a comment..." className="w-full border py-3 px-5 rounded-3xl hover:bg-gray-100" />
              <button type="submit" className="cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3">Send</button>
            </form>
          </div>

          {/* Other's comment section */}
          <div className="w-full p-4">

            {
              comments.map((item, index) => {
                return (
                  <div className="my-4">
                    <Link to={`/profile/${item?.user?._id}`} className="flex gap-3">
                      <img src={item?.user?.profilePic} alt="" className="rounded-full w-10 h-10 border-2 border-white cursor-pointer" />

                      <div className="cursor-pointer">
                        <div className="text-md">{item?.user?.f_name}</div>
                        <div className="text-sm text-gray-500">{item?.user?.headline}</div>
                      </div>
                    </Link>

                    <div className="px-11 my-2">{item?.comment}</div>

                  </div>
                )
              })
            }

          </div>
        </div>
      )}

      <ToastContainer />
    </Card>
  );
};

export default Post;