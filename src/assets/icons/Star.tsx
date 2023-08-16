const Star = (props: { size?: number; color?: string; [key: string]: any }) => {
  const { size, color, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Star;
