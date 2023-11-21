'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function FileUpload() {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = e => {
    setMessage('');
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage('only images accepted');
      }
    }
  };
  const removeImage = i => {
    setFile(files.filter(x => x.name !== i));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen px-2 bg-gray-300">
        <div className="p-3 md:w-1/2 w-[360px] bg-white rounded-md">
          <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
            {message}
          </span>
          <div className="relative items-center w-full h-32 bg-gray-300 border-2 border-gray-400 border-dotted rounded-md cursor-pointer">
            <input
              type="file"
              onChange={handleFile}
              className="absolute z-10 w-full h-full bg-green-200 opacity-0"
              multiple="multiple"
              name="files[]"
            />
            <div className="absolute top-0 flex items-center justify-center w-full h-full bg-gray-200 z-1">
              <div className="flex flex-col">
                <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                <span className="text-[12px]">{`Drag and Drop a file`}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {files.map((file, key) => {
              return (
                <div key={key} className="relative overflow-hidden">
                  <button
                    onClick={() => {
                      removeImage(file.name);
                    }}
                    className="absolute cursor-pointer mdi mdi-close right-1 hover:text-white"
                  >
                    x
                  </button>
                  <Image
                    className="w-20 h-20 rounded-md"
                    src={URL.createObjectURL(file)}
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
