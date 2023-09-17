import React from "react";

const ErrorMessageTarget = ({ errorMessage }) => {
  return (
    <>
      <div
        style={{
          display: errorMessage !== null ? "block" : "none",
          color: "red",
          textAlign: "center",
          width: "100%",
        }}
      >
        {errorMessage}
      </div>
    </>
  );
};

export default React.memo(ErrorMessageTarget);
