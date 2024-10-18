import React from 'react';

function Reverse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 15 16" {...props}>
      <path
        d="M4.375 6.12501H0.625C0.45924 6.12501 0.300269 6.05916 0.183058 5.94195C0.0658481 5.82474 0 5.66577 0 5.50001V1.75001C0 1.58425 0.0658481 1.42528 0.183058 1.30807C0.300269 1.19086 0.45924 1.12501 0.625 1.12501C0.79076 1.12501 0.949731 1.19086 1.06694 1.30807C1.18415 1.42528 1.25 1.58425 1.25 1.75001V3.99142L2.39297 2.84845C3.78688 1.44752 5.68 0.65734 7.65625 0.651575H7.69766C9.65709 0.646527 11.5396 1.41363 12.9375 2.78673C13.0516 2.9035 13.1155 3.06029 13.1156 3.22358C13.1156 3.38686 13.0517 3.54367 12.9375 3.66045C12.8234 3.77722 12.6681 3.8447 12.5049 3.84845C12.3416 3.85219 12.1834 3.7919 12.0641 3.68048C10.8989 2.53679 9.33033 1.89775 7.69766 1.90158H7.6625C6.01577 1.90664 4.43834 2.56498 3.27656 3.73204L2.13359 4.87501H4.375C4.54076 4.87501 4.69973 4.94086 4.81694 5.05807C4.93415 5.17528 5 5.33425 5 5.50001C5 5.66577 4.93415 5.82474 4.81694 5.94195C4.69973 6.05916 4.54076 6.12501 4.375 6.12501ZM14.375 9.87501H10.625C10.4592 9.87501 10.3003 9.94086 10.1831 10.0581C10.0658 10.1753 10 10.3343 10 10.5C10 10.6658 10.0658 10.8247 10.1831 10.942C10.3003 11.0592 10.4592 11.125 10.625 11.125H12.8664L11.7234 12.268C10.5619 13.4349 8.98475 14.0932 7.33828 14.0984H7.30313C5.67045 14.1023 4.10189 13.4632 2.93672 12.3195C2.87851 12.26 2.80898 12.2127 2.73222 12.1804C2.65546 12.1481 2.57302 12.1314 2.48974 12.1314C2.40646 12.1314 2.32402 12.1481 2.24727 12.1804C2.17051 12.2127 2.10099 12.26 2.04278 12.3196C1.98457 12.3792 1.93886 12.4497 1.90832 12.5272C1.87778 12.6047 1.86303 12.6875 1.86494 12.7708C1.86685 12.854 1.88538 12.9361 1.91944 13.012C1.9535 13.088 2.0024 13.1565 2.06328 13.2133C3.46115 14.5864 5.34369 15.3535 7.30313 15.3484H7.34375C9.31973 15.3425 11.2125 14.5523 12.6062 13.1516L13.75 12.0086V14.25C13.75 14.4158 13.8158 14.5747 13.9331 14.692C14.0503 14.8092 14.2092 14.875 14.375 14.875C14.5408 14.875 14.6997 14.8092 14.8169 14.692C14.9342 14.5747 15 14.4158 15 14.25V10.5C15 10.3343 14.9342 10.1753 14.8169 10.0581C14.6997 9.94086 14.5408 9.87501 14.375 9.87501Z"
        fill="black"
      />
    </svg>
  );
}

const MemoReverse = React.memo(Reverse);
export default MemoReverse;
