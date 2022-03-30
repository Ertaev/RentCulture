import React, { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form className="d-flex fd-column ai-center jc-center form" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Пароль"
      />
      <button type="submit" onClick={(e) => handleClick(email, pass)}>
        {title}
      </button>
    </form>
  );
};

export default Form;
