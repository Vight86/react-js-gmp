/* eslint-disable camelcase */
import { isNaN, useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import React from 'react';
import CustomTextArea from '../CustomTexArea/CustomTextArea';
import s from './CustomForm.scss';
import Button from '../Button/Button';
import CustomInput from '../CustomInput/CustomInput';
import SelectButton from '../SelectButton/SelectButton';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

const CustomForm = ({ movieInfo, onSubmit }) => {
  const {
    id, title = '', release_date = '', poster_path = '', vote_average = '', genres = [], runtime = '', overview = '',
  } = movieInfo;

  const formik = useFormik({
    initialValues: {
      id: id ?? title + release_date,
      title,
      release_date,
      poster_path,
      vote_average,
      genres,
      runtime,
      overview,
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Enter title'),
      release_date: Yup.string().required('Enter release date'),
      poster_path: Yup.string().required('Enter poster url'),
      vote_average: Yup.number().required('Enter rating'),
      genres: Yup.array().required('Select at least one genre'),
      runtime: Yup.number().required('Enter runtime'),
      overview: Yup.string().required('Enter description'),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form
      className={s.customForm}
      onChange={formik.handleChange}
    >
      <CustomInput
        id="title"
        type="text"
        name="title"
        value={formik.values.title}
        placeholder="Enter title"
        label="Title"
        theme="primary"
        errorMessage={formik.touched.title && formik.errors.title}
      />
      <CustomInput
        type="date"
        name="release_date"
        value={formik.values.release_date}
        placeholder="Enter title"
        label="release date"
        theme="primary"
        errorMessage={formik.touched.release_date && formik.errors.release_date}
      />
      <CustomInput
        type="url"
        name="poster_path"
        value={formik.values.poster_path}
        placeholder="https://"
        label="Movie url"
        theme="primary"
        errorMessage={formik.touched.poster_path && formik.errors.poster_path}
      />
      <CustomInput
        type="text"
        name="vote_average"
        value={(isNaN(parseFloat(formik.values.vote_average)) ? '' : parseFloat(formik.values.vote_average))}
        placeholder="7.8"
        label="Rating"
        theme="primary"
        errorMessage={formik.touched.vote_average && formik.errors.vote_average}
      />
      <SelectButton
        theme="primary"
        label="genres"
        value={formik.values.genres.join(', ')}
        placeholder="Select genre"
      >
        {['Horror', 'Comedy', 'Criminal'].map((genre) => (
          <CustomCheckbox
            key={genre}
            name="genres"
            value={genre}
            label={genre}
          />
        ))}

      </SelectButton>
      <CustomInput
        name="runtime"
        type="text"
        value={(isNaN(parseFloat(formik.values.runtime)) ? '' : parseFloat(formik.values.runtime))}
        placeholder="minutes"
        label="Runtime"
        theme="primary"
        errorMessage={formik.touched.runtime && formik.errors.runtime}
      />
      <span className={s.textArea}>
        <CustomTextArea
          name="overview"
          value={formik.values.overview}
          errorMessage={formik.touched.overview && formik.errors.overview}
        />
      </span>
      <span className={s.buttons}>
        <Button
          type="reset"
          theme="secondary"
          isWide={false}
          onClick={formik.handleReset}
        >
          Reset
        </Button>
        <Button
          type="submit"
          theme="primary"
          isWide={false}
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>
      </span>
    </form>
  );
};

CustomForm.propTypes = {
  movieInfo: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
};

CustomForm.defaultProps = {
  movieInfo: {},
};

export default CustomForm;
