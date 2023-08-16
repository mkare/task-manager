import { Container, Input, Button } from "@components/base";
import { AuthFormStyled } from "./AuthForm.styles";
import { useSelector } from "react-redux";
import { signInAsync, selectUser } from "@store/authSlice";
import { useAppDispatch } from "@store/index";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AuthForm() {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(signInAsync({ email: values.email, password: values.password }));
    },
  });

  if (user) {
    // Kullanıcı oturumu açtıysa, isteğe bağlı olarak yönlendirme yapabilirsiniz.
    // Örneğin, başka bir sayfaya yönlendirebilirsiniz.
    // return <Redirect to="/dashboard" />;
    console.log(user);
  }

  return (
    <>
      <Container>
        <AuthFormStyled onSubmit={formik.handleSubmit}>
          <h1>AuthForm</h1>
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
          />
          <Button type="submit">Submit</Button>
        </AuthFormStyled>
      </Container>
    </>
  );
}
