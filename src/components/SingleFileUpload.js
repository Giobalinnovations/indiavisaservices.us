import Image from 'next/image';
import React from 'react';

const SingleFileUpload = ({
  name,
  setFieldValue,
  value,
  accept,
  errorMessage,
  id,
}) => {
  const handleFileChange = event => {
    const file = event.target.files[0];
    setFieldValue(name, file);
  };

  return (
    <div>
      <input
        type="file"
        accept={accept}
        name={name}
        onChange={handleFileChange}
        // className="hidden"
        id={id}
      />
      {errorMessage}
    </div>
  );
};

export default SingleFileUpload;
