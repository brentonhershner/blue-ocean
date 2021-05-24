import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import api from '../../../api/api';

export function ImageUploader({ setImages }) {
  const [selectedFiles, setSelectedFiles] = useState(undefined);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
    console.log(event.target.files);
    console.log(Array(event.target.files));
  };

  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key of Object.keys(selectedFiles)) {
      formData.append('file', selectedFiles[key])
    }

    api.upload(formData)
      .then((response) => {
        return api.getImageList();
      })
      .catch((error) => console.error(error));

    setSelectedFiles(undefined);
  };

  return (
    <div>
      <form onSubmit={upload} >

        <InputLabel className="btn btn-default">
          <Input
            type="file"
            name="images[]"
            accept="image/*"
            onChange={selectFile}
            inputProps={{ multiple: true }}
          />
        </InputLabel>

        <Button
          className="btn btn-success"
          disabled={!selectedFiles}
          // onClick={upload}
          type="submit"
          variant="contained"
        >
          Upload
      </Button>
      </form>

    </div>
  )
};

ImageUploader.propTypes = {
  setImages: PropTypes.func,
}

export default ImageUploader;
