import { __assign } from '../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

var AutoTruncateBox = function (_a) {
    var text = _a.text, _b = _a.maxLines, maxLines = _b === void 0 ? 3 : _b, _c = _a.ellipsis, ellipsis = _c === void 0 ? '...' : _c, _d = _a.showToggle, showToggle = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.style, style = _f === void 0 ? {} : _f; _a.width;
    var _h = useState(true), isTruncated = _h[0], setIsTruncated = _h[1];
    var _j = useState(text), displayText = _j[0], setDisplayText = _j[1];
    var containerRef = useRef(null);
    var truncateText = function () {
        if (!containerRef.current || !isTruncated)
            return;
        var container = containerRef.current;
        var lineHeight = parseInt(getComputedStyle(container).lineHeight, 10) || 20;
        var maxHeight = maxLines ? lineHeight * (maxLines + 1) : container.clientHeight;
        container.style.height = 'auto';
        container.style.overflow = 'hidden';
        container.textContent = text;
        if (container.scrollHeight <= maxHeight) {
            setDisplayText(text);
            return;
        }
        var truncatedText = text;
        while (container.scrollHeight > maxHeight && truncatedText.length > 0) {
            truncatedText = truncatedText.slice(0, -1);
            container.textContent = truncatedText + ellipsis;
        }
        setDisplayText(truncatedText + ellipsis);
    };
    useEffect(function () {
        truncateText();
        window.addEventListener('resize', truncateText);
        return function () { return window.removeEventListener('resize', truncateText); };
    }, [text, maxLines, isTruncated]);
    return (jsxs("div", __assign({ className: "auto-truncate-box ".concat(className), style: style }, { children: [jsx("div", __assign({ ref: containerRef, style: {
                    whiteSpace: maxLines ? 'normal' : 'nowrap',
                    lineHeight: '1.4',
                } }, { children: isTruncated ? displayText : text })), showToggle && (jsx("button", __assign({ onClick: function () { return setIsTruncated(!isTruncated); }, style: { marginTop: '8px', cursor: 'pointer' } }, { children: isTruncated ? 'Show More' : 'Show Less' })))] })));
};

export { AutoTruncateBox as default };
