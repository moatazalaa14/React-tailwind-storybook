import React from "react";

export const ImageUpload = () => {
  return (
    <form>
      <div className="h-14 bg-grey-shd7 rounded-md border-dashed border-accent border flex justify-center items-center cursor-pointer">
           <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16683 1.33333H10.8335V6H12.1668V1.33333C12.1668 0.598 11.5688 0 10.8335 0H2.16683C1.4315 0 0.833496 0.598 0.833496 1.33333V9.33333C0.833496 10.0687 1.4315 10.6667 2.16683 10.6667H7.50016V9.33333H2.16683V1.33333Z"
              fill="#00A8E8"
            />
            <path
              d="M4.8335 5.33333L2.8335 8H10.1668L7.50016 4L5.50016 6.66667L4.8335 5.33333Z"
              fill="#00A8E8"
            />
            <path
              d="M12.1668 7.33333H10.8335V9.33333H8.8335V10.6667H10.8335V12.6667H12.1668V10.6667H14.1668V9.33333H12.1668V7.33333Z"
              fill="#00A8E8"
            />
          </svg>
        <label for="upload_image" className="text-accent font-bold text-sm ml-2">
          Upload one ot multiple image
        </label>
        <input type="file" id="upload_image" className="hidden" />
      </div>
    </form>
  );
};
