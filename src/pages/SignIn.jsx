import { styled } from "styled-components";
import bg from "../assets/bg.jpg";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/Index";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const StyledDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.4;
  }
`;
const Div = styled.div`
  width: 22rem;
  height: 20rem;
  background: #000000;
  position: absolute;
  top: 20%;
  left: 38%;
  border-radius: 0.4rem;
  @media screen and (max-width: 667px) {
    left: 12%;
    width: 18rem;
    height: 20rem;
  }
  @media screen and (max-width: 373px) {
    left: 10%;
    width: 15rem;
    height: 18rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem;
  input {
    padding: 0.5rem 1rem;
    background: #313131;
    margin-top: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    &::placeholder {
      color: silver;
    }
  }
`;
const Button = styled.button`
  background: red;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
`;
const Para = styled.p`
  margin-top: 2rem;
  color: rgb(65, 64, 64);
  font-weight: 700;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  span {
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
  }
`;
const InputPara = styled.p`
  font-size: 0.8rem;
  padding-top: 0.3rem;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;
const Select = styled.select`
  margin-top: 0.5rem;

  border: none;
  outline: none;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  color: silver;
  background: #313131;
`;

const SignIn = () => {
  const { isAuthentication, login, region, setRegion } = useContext(AppContext);
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, handleBlur, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  const Formik = {
    values,
    errors,
    handleBlur,
    touched,
    handleSubmit,
    handleChange,
  };
  console.log(Formik);

  const handleLogin = () => {
    if (!initialValues.email || !initialValues.password  === null) {
      alert(`Thanks 💖 ${Formik.values.name} For SignIn ${login()}`);
    } else {
      alert("please enter Enter Email and Password");
    }
  };

  return (
    <>
      {isAuthentication ? (
        <Navigate to={"/"} />
      ) : (
        <StyledDiv>
          <img src={bg} alt="bg" />
          <Div>
            <Form onSubmit={handleSubmit}>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: " Arial, Helvetica, sans-serif",
                }}
              >
                SignIn
              </h2>
              <input
                type="text"
                placeholder="Email or Phone Number"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="false"
              />
              {errors.email && touched.email ? (
                <InputPara>{errors.email}</InputPara>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <InputPara>{errors.password}</InputPara>
              ) : null}

              <Select
                name="region"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
              
              <option value="" disabled selected hidden>Select Your Region</option>
                <option value="No">Norway</option>
                <option value="IN">India</option>
                <option value="CA">Canada</option>
                <option value="ES">Spain</option>
                <option value="CN">China</option>
              </Select>

              <Button type="submit" onClick={handleLogin}>
                Sign In
              </Button>
              <Para></Para>
            </Form>
          </Div>
        </StyledDiv>
      )}
    </>
  );
};
export default SignIn;
