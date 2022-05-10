import { useState } from "react";
import FileInput from "../components/fileInput";
import "./communityWrite.css";
import handleCreateSuccess from "./community";
import { createPosting } from "../api/api";

const INITIAL_VALUES = {
  title: "",
  content: "",
  imgFile: null,
};

const CoummunityWrite = ({
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

export default CoummunityWrite;
