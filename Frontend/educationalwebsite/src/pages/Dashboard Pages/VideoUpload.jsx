import React from "react";

const VideoUpload = () => {
  const courseUploadData = localStorage.getItem("courseUpload");

  if (!courseUploadData) {
    window.location.href = "/dashboard";
    return null;
  }

  return (
    <div>
      <h1>Helo world</h1>
    </div>
  );
};

export default VideoUpload;
