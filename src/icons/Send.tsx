import React from "react";

const Send = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M1.3335 2V14L14.6668 8L1.3335 2ZM2.66683 4.0625L11.4181 8L2.66683 11.9375V8.81771L8.66683 8L2.66683 7.18229V4.0625Z" />
    </svg>
  );
};

const MemoSend = React.memo(Send);
export default MemoSend;
