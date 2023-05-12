import { useState } from "react";
import axios from "axios";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import loadingGif from "./loading.gif";

function FileInputs() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [listReady, setListReady] = useState(false);
  const [showError, setShowError] = useState(false);
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setListReady(false);
    // upload files to backend
    const formData = new FormData();
    formData.append("file1", file1, "StudentRegistration.xlsx");
    formData.append("file2", file2, "StudentList.xlsx");
    formData.append("file3", file3, "TAList.xlsx");
    formData.append("file4", file4, "ExamDateSheet.xlsx");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/allotment",
        formData,
        { responseType: "blob" }
      );
      setListReady(true);
      setShowError(false);
      setFile(response.data);
    } catch (error) {
      setShowError(true);
      setListReady(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "InvigilatorList.xlsx");
    document.body.appendChild(link);
    link.click();
  };

  const handleFileChange = (setFile) => (event) => {
    setFile(event.target.files[0]);
  };

  const handleClearFile = (setFile) => {
    setFile(null);
  };

  return (
    <div>
      <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4 flex-1 mx-4 mt-4">
          <div className="relative flex-1 cursor-pointer">
            <input
              type="file"
              name="file1"
              onChange={handleFileChange(setFile1)}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleClearFile(setFile1)}
              className="bg-pantone-blue cursor-pointer rounded-lg text-white font-medium py-2 px-4 l w-full"
            >
              {file1 ? file1.name : "Upload Student Registration Here"}
            </button>
          </div>
          <div className="relative flex-1 cursor-pointer">
            <input
              type="file"
              name="file2"
              onChange={handleFileChange(setFile2)}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
            <button
              type="button"
              onClick={() => handleClearFile(setFile2)}
              className="bg-pantone-blue rounded-lg cursor-pointer text-white font-medium py-2 px-4 l w-full"
            >
              {file2 ? file2.name : "Upload Student List Here"}
            </button>
          </div>
          <div className="relative flex-1 cursor-pointer">
            <input
              type="file"
              name="file3"
              onChange={handleFileChange(setFile3)}
              className="absolute w-full h-full cursor-pointer opacity-0"
            />
            <button
              type="button"
              onClick={() => handleClearFile(setFile3)}
              className="bg-pantone-blue rounded-lg cursor-pointer text-white font-medium py-2 px-4 l w-full"
            >
              {file3 ? file3.name : "Upload TA List Here"}
            </button>
          </div>
          <div className="relative flex-1 cursor-pointer">
            <input
              type="file"
              name="file4"
              onChange={handleFileChange(setFile4)}
              className="absolute w-full h-full cursor-pointer opacity-0"
            />
            <button
              type="button"
              onClick={() => handleClearFile(setFile4)}
              className="bg-pantone-blue rounded-lg cursor-pointer text-white font-medium py-2 px-4 l w-full"
            >
              {file4 ? file4.name : "Upload Exam Datesheet Here"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 rounded-lg text-white font-medium py-2 px-4 mx-4 w-full"
        >
          <FileUploadIcon className="mx-1" />
          Upload Files
        </button>
      </form>
      <div className="w-full place-content-center flex my-4">
        {listReady ? (
          <button
            onClick={handleClick}
            className="bg-green-500 hover:bg-green-700 rounded-lg text-white font-medium py-2 px-4 mx-4 w-full"
          >
            <FileDownloadIcon className="mx-1" />
            Download File
          </button>
        ) : null}
      </div>
      {loading && (
        <div className="flex justify-center">
          <img src={loadingGif} alt="Loading..." className="mx-auto" />
        </div>
      )}

      {showError ? (
        <div className="my-2 text-red-600 font-bold flex place-content-center w-full">
          Error! Try Reloading & Upload Files Again
        </div>
      ) : null}
    </div>
  );
}

export default FileInputs;
