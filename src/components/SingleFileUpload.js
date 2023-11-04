import Image from 'next/image';
import React from 'react';

const SingleFileUpload = ({
  name,
  setFieldValue,
  value,
  accept,
  errorMessage,
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
      />
      {errorMessage}
      {value && (
        <div className="relative overflow-hidden">
          <Image
            src={URL.createObjectURL(value)}
            alt="Uploaded Image"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default SingleFileUpload;
