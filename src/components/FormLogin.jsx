import { useState } from "react";

const FormLogin = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
    length: 5,
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    // Очищаємо форму
    setValues({
      login: "",
      password: "",
    });
  };
  /*функція для кожного поля
   const handleLoginChange = (event) => {
    setValues({
      ...values,
      login: event.target.value,
      length: event.target.value.length,
    });
  };

  const handlePwdChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  }; */
  return (
    <form onSubmit={handleSubmit}>
      {/* <p>{values.length}</p> */}
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
        /* onChange={handleLoginChange} */
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        /* onChange={handlePwdChange} */
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default FormLogin;
