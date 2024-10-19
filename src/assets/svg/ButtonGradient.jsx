const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Red to Black Gradient */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" /> {/* Red */}
          <stop offset="100%" stopColor="#000000" /> {/* Black */}
        </linearGradient>

        {/* Black to Dark Grey Gradient */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#000000" /> {/* Black */}
          <stop offset="100%" stopColor="#4A4A4A" /> {/* Dark Grey */}
        </linearGradient>

        {/* Dark Grey to Light Grey Gradient */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#4A4A4A" /> {/* Dark Grey */}
          <stop offset="100%" stopColor="#D3D3D3" /> {/* Light Grey */}
        </linearGradient>

        {/* Black to Dark Red Gradient */}
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#000000" /> {/* Black */}
          <stop offset="100%" stopColor="#8B0000" /> {/* Dark Red */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
