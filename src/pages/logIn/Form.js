import React, { useState } from "react";

const Form = ({ title, handleClick, createForm, form }) => {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

  return (
    <form className="d-flex fd-column ai-center jc-center form" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        value={form.email}
        onChange={createForm}
        placeholder="E-mail"
        name="email"
      />
      <input
        type="password"
        value={form.password}
        onChange={createForm}
        placeholder="Пароль"
        name="password"
      />
      <button type="submit" onClick={e => handleClick(e)}>
        {title}
      </button>
    </form>
  );
};

export default Form;
