
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export let useAuth = () => {
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
    return data;
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