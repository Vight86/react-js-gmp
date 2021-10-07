import { useState } from 'react';
import CustomTextArea from '../CustomTexArea/CustomTextArea';
import s from './CustomForm.scss';
import Button from '../Button/Button';
import CustomInput from '../CustomInput/CustomInput';
import SelectButton from '../SelectButton/SelectButton';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const CustomForm = ({ movieInfo }) => {
  const [title, setTitle] = useState(movieInfo.title);
  const [date, setDate] = useState(movieInfo.year);
  const [url, setUrl] = useState(movieInfo.url);
  const [rating, setRating] = useState(movieInfo.rating);
  const [time, setTime] = useState(movieInfo.time);
  const [description, setDescription] = useState(movieInfo.description);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <form className={s.customForm}>
      <CustomInput
        type="text"
        value={title}
        handleChange={handleTitleChange}
        placeholder="Enter title"
        label="Title"
        theme="primary"
      />
      <CustomInput
        type="date"
        value={date}
        handleChange={handleDateChange}
        placeholder="Enter title"
        label="release date"
        theme="primary"
      />
      <CustomInput
        type="url"
        value={url}
        handleChange={handleUrlChange}
        placeholder="https://"
        label="Movie url"
        theme="primary"
      />
      <CustomInput
        type="text"
        value={rating}
        handleChange={handleRatingChange}
        placeholder="7.8"
        label="Rating"
        theme="primary"
      />
      <SelectButton
        theme="primary"
        label="genre"
        placeholder="Select genre"
      >
        <CustomCheckbox label="Action" />
        <CustomCheckbox label="Drama" />
      </SelectButton>
      <CustomInput
        type="text"
        value={time}
        handleChange={handleTimeChange}
        placeholder="minutes"
        label="Runtime"
        theme="primary"
      />
      <span className={s.textArea}>
        <CustomTextArea
          value={description}
          handleChange={handleDescriptionChange}
        />
      </span>
      <span className={s.buttons}>
        <Button
          theme="secondary"
          isWide={false}
        >
          Reset
        </Button>
        <Button
          theme="primary"
          isWide={false}
        >
          Submit
        </Button>
      </span>
    </form>
  );
};

CustomForm.propTypes = {
  movieInfo: PropTypes.objectOf(PropTypes.any),
};

CustomForm.defaultProps = {
  movieInfo: {},
};

export default CustomForm;
