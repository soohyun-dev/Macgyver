import Navi from "../components/Navi";
import "./announceWrite.css";
import "./manager.css";
import { Link } from "react-router-dom";
import handleCreateSuccess from "../community/community";
import { useState } from "react";
import { createPosting } from "../api/api";
import FileInput from "../components/fileInput";

const INITIAL_VALUES = {
  title: "",
  content: "",
  imgFile: null,
};

const AnnounceWrite = ({
  inititalValues = INITIAL_VALUES,
  initialPreview,
  onSubmitSuccess = handleCreateSuccess,
  onCancel,
  onSubmit = createPosting,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(inititalValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);
    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await onSubmit(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    setValues(INITIAL_VALUES);
    onSubmitSuccess(review);
  };

  return (
    <>
      <Navi />

      <section>
        <div className="managerTitle">
          <p>관리자모드</p>
        </div>
      </section>

      <section id="managerCatagory">
        <Link to="/manager">
          <div className="memberManage">
            <p>회원 관리</p>
          </div>
        </Link>

        <Link to="/postManager">
          <div className="postingManage">
            <p>게시물 관리</p>
          </div>
        </Link>

        <Link to="/announceWrite">
          <div className="announceWrite">
            <p style={{ backgroundColor: "#000", color: "#fff" }}>공지 작성</p>
          </div>
        </Link>
      </section>

      <section id="announceWrite">
        <div className="announceWriteBlock">
          <div className="annWriteTitle">
            <form onSubmit={handleSubmit}>
              <div>
                <FileInput
                  name="imgFile"
                  value={values.imgFile}
                  initialPreview={initialPreview}
                  onChange={handleChange}
                />
              </div>
              <input
                name="title"
                value={values.title}
                onChange={handleInputChange}
              ></input>
              <div className="annWriteWrite">
                <textarea
                  name="content"
                  value={values.content}
                  onChange={handleInputChange}
                />
              </div>
              <section id="announceWriteSubmit">
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ margin: "0 40px", cursor: "pointer" }}
                  >
                    글 작성
                  </button>
                  {onCancel && <button onClick={onCancel}>취소</button>}
                </div>
              </section>
              {submittingError && <div>{submittingError.message}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnounceWrite;
