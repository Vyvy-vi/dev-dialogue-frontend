import React, { useState } from "react";

const TextboxInput = ({ onSubmit, placeholder, label }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      {label && <label htmlFor="textbox">{label}</label>}
      <textarea
        id="textbox"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextboxInput;
