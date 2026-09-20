
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = () => {
   let dispatch = useDispatch();
    let navigate = useNavigate();

     const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onRegisterSubmit = async (data) => {
    console.log("Register submitted:", data);
    return data;
  };

   const onLoginSubmit = async (data) => {
    console.log("Login submitted:", data);
    const result = await dispatch(loginEmployee(data));
    console.log("Login result:", result);
    return result;
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
    };
}