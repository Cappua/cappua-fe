import React from "react";
import ReactDOM from "react-dom";

const displayUploadMessage = () => {
  const uploadMessageContainer = document.querySelector(".upload-message");
  uploadMessageContainer.insertAdjacentHTML("afterend", "<p>Uploading...</p>");
};

export default displayUploadMessage;
