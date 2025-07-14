import React, { useState, useEffect, useRef } from 'react';

interface AutoTruncateBoxProps {
  text: string;
  maxLines?: number;
  ellipsis?: string;
  showToggle?: boolean;
  className?: string;
  style?: React.CSSProperties;
  width?: string | number;
}

const AutoTruncateBox: React.FC<AutoTruncateBoxProps> = ({
  text,
  maxLines = 3,
  ellipsis = '...',
  showToggle = false,
  className = '',
  style = {},
  width = '100%',
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLDivElement>(null);

  const truncateText = () => {
    if (!containerRef.current || !isTruncated) return;

    const container = containerRef.current;
    const lineHeight = parseInt(getComputedStyle(container).lineHeight, 10) || 20;
    const maxHeight = maxLines ? lineHeight * (maxLines+1) : container.clientHeight;

    container.style.height = 'auto';
    container.style.overflow = 'hidden';
    container.textContent = text;

    if (container.scrollHeight <= maxHeight) {
      setDisplayText(text);
      return;
    }

    let truncatedText = text;
    while (container.scrollHeight > maxHeight && truncatedText.length > 0) {
      truncatedText = truncatedText.slice(0, -1);
      container.textContent = truncatedText + ellipsis;
    }

    setDisplayText(truncatedText + ellipsis);
  };

  useEffect(() => {
    truncateText();
    window.addEventListener('resize', truncateText);
    return () => window.removeEventListener('resize', truncateText);
  }, [text, maxLines, isTruncated]);

  return (
    <div className={`auto-truncate-box ${className}`} style={style}>
      <div
        ref={containerRef}
        style={{
          whiteSpace: maxLines ? 'normal' : 'nowrap',
          lineHeight: '1.4',
        }}
      >
        {isTruncated ? displayText : text}
      </div>
      {showToggle && (
        <button
          onClick={() => setIsTruncated(!isTruncated)}
          style={{ marginTop: '8px', cursor: 'pointer' }}
        >
          {isTruncated ? 'Show More' : 'Show Less'}
        </button>
      )}
    </div>
  );
};

export default AutoTruncateBox;