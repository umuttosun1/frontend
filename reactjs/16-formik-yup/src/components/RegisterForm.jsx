import React from "react";
import { useFormik } from "formik";

function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
  });

  return (
    <div>
      <form action="">
        <div className="input-div">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="E-mail giriniz"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="">Yas</label>
          <input
            type="number"
            id="age"
            placeholder="Yasinizi giriniz"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="">Sifre</label>
          <input
            type="password"
            id="password"
            placeholder="Sifrenizi giriniz"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="">Sifre tekrari</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Sifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "start",
            }}
          >
            <input
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
              style={{ width: "10px", height: "10px" }}
            />
            <label htmlFor="">Kullanici sozlesmesini kabul ediyorum </label>
          </div>
        </div>
        <button className="btn-kaydet">Kaydet</button>
      </form>
    </div>
  );
}

export default RegisterForm;
