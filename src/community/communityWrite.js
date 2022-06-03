import { useState } from "react";
import FileInput from "../components/fileInput";
import "./communityWrite.css";
import handleCreateSuccess from "./community";
import { createNotice, createPosting } from "../api/api";
import { Link } from "react-router-dom";

const INITIAL_VALUES = {
  title: "",
  content: "",
  imgFile: null,
  rating: 1,
};

const CoummunityWrite = ({
  inititalValues = INITIAL_VALUES,
  initialPreview,
  onSubmitSuccess = handleCreateSuccess,
  onCancel,
  onSubmit = createNotice,
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

  // 작성
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgUrl);
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

  // 체크 박스 하나만 선택
  // 나중에 백엔드와 post 할때 rating 은 분류 컬럼 값으로 바꿔주면 됨.
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("category");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  function submitSuccess() {
    alert("게시물 등록이 완료되었습니다! 커뮤니티 페이지로 이동됩니다.");
    window.location.href = "./Community";
  }

  return (
    <>
      <section id="announceWrite">
        <div className="announceWriteBlock">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="annWriteTitle">
                <p>제목</p>
                <input
                  className="titleInput"
                  name="title"
                  value={values.title}
                  onChange={handleInputChange}
                />
                <FileInput
                  name="imgFile"
                  value={values.imgFile}
                  initialPreview={initialPreview}
                  onChange={handleChange}
                />
              </div>
              <div className="communitySort">
                <p>게시판 선택</p>
                <input
                  className="SortInput"
                  type="checkbox"
                  name="rating"
                  value="1"
                  onClick={(e) => checkOnlyOne(e.target)}
                  onChange={handleInputChange}
                />
                <span>팁공유</span>
                <input
                  type="checkbox"
                  name="rating"
                  value="2"
                  onClick={(e) => checkOnlyOne(e.target)}
                  onChange={handleInputChange}
                />
                <span>자유</span>
                <input
                  type="checkbox"
                  name="rating"
                  value="3"
                  onClick={(e) => checkOnlyOne(e.target)}
                  onChange={handleInputChange}
                />
                <span>후기</span>
                <input
                  type="checkbox"
                  name="rating"
                  value="4"
                  onClick={(e) => checkOnlyOne(e.target)}
                  onChange={handleInputChange}
                />
                <span>신고방</span>
              </div>
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
                    onClick={() => {
                      submitSuccess();
                    }}
                    className="writeButton"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ margin: "0 40px", cursor: "pointer" }}
                  >
                    글 작성
                  </button>

                  {onCancel && (
                    <button onClick={onCancel} className="cancelBtn">
                      취소
                    </button>
                  )}
                  {!onCancel && (
                    <Link to="/community">
                      {" "}
                      <button className="backButton">되돌아가기</button>
                    </Link>
                  )}
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

export default CoummunityWrite;
