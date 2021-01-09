import React from "react";

export const SingleProgress = (props) => {
  const { width } = props;
  return (
    <>
      <div
        className={`-rotate-180 w-1 h-${width} ${
          width == 56 ? "bg-success-shd1" : "bg-primary-shd1"
        } rounded-sm`}
      ></div>
      
      {/* <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 0C36 4.72759 35.0688 9.40888 33.2597 13.7766C31.4505 18.1443 28.7988 22.1129 25.4558 25.4558C22.1129 28.7988 18.1443 31.4505 13.7766 33.2597C9.40888 35.0688 4.72758 36 0 36V28.8C3.78207 28.8 7.5271 28.0551 11.0213 26.6077C14.5155 25.1604 17.6903 23.039 20.3647 20.3647C23.039 17.6903 25.1604 14.5155 26.6077 11.0213C28.0551 7.52711 28.8 3.78207 28.8 0H36Z" fill="#FE544A"/>
</svg> */}

    </>
  );
};
