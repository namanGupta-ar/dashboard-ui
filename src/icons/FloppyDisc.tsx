import React from 'react';

function FloppyDisc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
      <path d="M0 0.941223H0.94125V15.0587H0V0.941223Z" fill="inherit" />
      <path
        d="M9.41193 1.88245H11.2941V4.70588H9.41193V1.88245Z"
        fill="inherit"
      />
      <path
        d="M15.0587 0V0.94125H13.1765V5.64719H12.2353V0.94125H6.5881V5.64719H12.2353V6.58812H3.76466V5.64719H2.82341V0.94125H0.941223V0L15.0587 0Z"
        fill="inherit"
      />
      <path
        d="M3.76474 7.52939H12.2354V8.47064H3.76474V7.52939Z"
        fill="inherit"
      />
      <path d="M4.70596 11.294H5.64721V12.2353H4.70596V11.294Z" fill="inherit" />
      <path
        d="M13.1765 15.0587V8.47061H12.2353V9.41186H3.76466V8.47061H2.82341V15.0587H0.941223V16H15.0587V15.0587H13.1765ZM12.2353 15.0587H3.76466V10.3528H12.2353V15.0587Z"
        fill="inherit"
      />
      <path
        d="M9.41193 13.1766H11.2941V14.1175H9.41193V13.1766Z"
        fill="inherit"
      />
      <path d="M6.58807 11.294H11.294V12.2353H6.58807V11.294Z" fill="inherit" />
      <path
        d="M4.70596 13.1766H8.47065V14.1175H4.70596V13.1766Z"
        fill="inherit"
      />
      <path d="M15.0588 0.941223H16V15.0587H15.0588V0.941223Z" fill="inherit" />
    </svg>
  );
}

const MemoFloppyDisc = React.memo(FloppyDisc);
export default MemoFloppyDisc;
