import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="E-mail giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="input-error">{errors.email}</p>}
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
          {errors.age && <p className="input-error">{errors.age}</p>}
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
          {errors.password && <p className="input-error">{errors.password}</p>}
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
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
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
          {errors.term && <p className="input-error">{errors.term}</p>}
        </div>
        <button type="submit" className="btn-kaydet">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
