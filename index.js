import React, { useState, useEffect } from "react";

function CustomMarkdownTag({
  content,
  readMoreChars,
  customClassNames,
  color,
}) {
  const [expanded, setExpanded] = useState(false);
  const [charsToShow] = useState(readMoreChars);

  useEffect(() => {
    setExpanded(false);
  }, [content]);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  const parseMarkdown = (text) => {
    if (typeof text !== "string") {
      return "";
    }

    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => {
        return `<a href="${url}" target="_blank" style="color: ${
          color || "black"
        }; color: ${color || "black"};">${text}</a>`;
      })
      .replace(
        /!\[(.*?)\]\((.*?)\)/g,
        '<img alt="$1" src="$2" target="_blank"/>'
      )
      .replace(
        /`(.*?)`/g,
        '<span style="background-color: #f0f0f0; padding: 2px 4px; border-radius: 2px;">$1</span>'
      )
      .replace(/\n/g, "<br/>");
  };
  // .replace(/(\r\n|\r|\n|\t)/g, "<br>");

  const renderMarkdown = () => {
    if (typeof content !== "string") {
      return null;
    }

    const readMoreLessText = expanded ? "Show less..." : "...Read more";
    const displayedText = expanded
      ? parseMarkdown(content)
      : parseMarkdown(content?.slice(0, charsToShow));

    return (
      <div className={`${customClassNames}`}>
        <span dangerouslySetInnerHTML={{ __html: displayedText }} />
        {content?.length > charsToShow && (
          <span
            onClick={toggleContent}
            className="read-more"
            style={{ color: color }}
          >
            {readMoreLessText}
          </span>
        )}
      </div>
    );
  };

  return <div>{renderMarkdown()}</div>;
}

export default CustomMarkdownTag;
