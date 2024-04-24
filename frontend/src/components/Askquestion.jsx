import React from "react";
import Add from "../icons/Add";
import Share from "../icons/Share";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { duration } from "moment";
import TagPicker from "rsuite/TagPicker";

const Askquestion = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const naviate = useNavigate();
  const discussionTopics = [
    "Technology",
    "Climate",
    "space exploration",
    "AI and ethics",
    "Social media",
    "Mental health",
    "Education",
    "Health",
    "Culture",
    "Politics",
    "Sports",
    "Public opinion",
    "History",
    "Economy",
    "Business",
    "Science",
    "Philosophy",
    "Art",
  ];
  const data = discussionTopics.map((item) => ({ label: item, value: item }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, tags } = e.target;
    const thread = {
      question: title.value,
      description: description.value,
      tags: tags.value.split(","),
      userId: user._id,
    };

    console.log(thread);

    const res = await axios.post(
      "http://localhost:8080/ask-question",
      thread
    );
    if (res.status === 201) {
      toast.success("Question added successfully", (duration = 2000));
      setTimeout(() => {
        naviate("/");
      }, 2000);
    }
  };

  return (
    <div className="h-full w-full xl:w-[80%]">
      <Toaster />
      <div
        className="md:mx-12 flex flex-col items-center 
      gap-4 mb-12  p-4 pb-6 rounded-md
      bg-[#28282B]  mt-12"
      >
        <h1
          className="text-2xl font-bold text-center
        text-white
        "
        >
          What's on your mind?
        </h1>

        <form onSubmit={handleSubmit} className="form w-full ">
          <div className="title">
            <label className=" text-start text-white">
              Thread Title
            </label>
            <input
              name="title"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none
                shadow-sm"
              type="text"
            />
          </div>
          <div className="desc mt-3">
            <label className="text-start text-white">
              Description
            </label>
            <textarea
              name="description"
              className="mt-2 w-full h-24 px-3 py-2 rounded outline-none border-none  shadow-sm"
              type="text"
            />
          </div>
          <div className="tages mt-3 flex flex-col">
            <label className=" text-start text-white">
              Related Tags
            </label>
            <TagPicker
              name="tags"
              className="mt-2"
              data={data}
              style={{ width: "100%" }}
            />
            {/* <input
              name="tags"
              placeholder="Enter tags seperated by comma"
              className="mt-2 w-full h-10 px-3 rounded outline-none border-none  shadow-sm"
              type="text"
            /> */}
          </div>
          <button
            type="submit"
            className="mt-8 w-fit mx-auto my-2 flex items-center gap-2 bg-black hover:bg-black/50 rounded-md shadow-sm px-8 py-2 cursor-pointer"
          >
            <Share />
            <span className="text-white">Post</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Askquestion;
