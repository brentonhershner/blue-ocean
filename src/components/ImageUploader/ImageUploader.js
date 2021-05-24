import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import api from '../../api/api';

export function ImageUploader({ images, setImages }) {
  const [selectedFiles, setSelectedFiles] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const imageList = await api.getImageList();
      setImages(imageList);
    }
    fetchData();
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];


    api.upload(currentFile)
      .then((response) => {
        return api.getImageList();
      })
      .catch((error) => console.error(error));

    setSelectedFiles(undefined);
  };

  return (
    <div>

      <InputLabel className="btn btn-default">
        <Input type="file" onChange={selectFile} />
      </InputLabel>

      <Button
        className="btn btn-success"
        disabled={!selectedFiles}
        onClick={upload}
        variant="contained"
      >
        Upload
      </Button>

    </div>
  )
};

ImageUploader.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func,
}

export default ImageUploader;
