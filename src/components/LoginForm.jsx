import React from "react";
import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);

    const form = evt.target;
    console.log(form.elements);
    const { login, password } = form.elements;

    // Посилання на DOM-елементи
    console.log(login, password);

    // Значення полів
    console.log(login.value, password.value);
    const data = {
      login: login.value,
      password: password.value,
    };
    onLogin(data);
    // Скидаємо значення полів після відправки
    form.reset();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
