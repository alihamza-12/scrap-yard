import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLoginMutation } from "../../store/apiSlice/userSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

//Zod Schema
const schema = z.object({
  email: z.string().email({ message: "InValid Email Address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot exceed 32 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const useLoginForm = () => {
  //Store Dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //RTK query Mutation
  const [userLogin, { error }] = useUserLoginMutation();

  //SetUp React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  //OnSubmit
  const onSubmit = async (data) => {
    // console.log(data);
    const userResponse = await userLogin({
      Email: data.email,
      Password: data.password,
      FullName: data.fullName,
      Address: data.address,
      PhoneNo: data.phoneNo,
      Role: data.role,
    }).unwrap();
    //Store the Api response in the Store

    //Dispatch
    // console.log(userResponse)
    dispatch(
      setCredentials({
        user: {
          FullName: userResponse.FullName,
          Address: userResponse.Address,
          Email: userResponse.Email,
          PhoneNo: userResponse.PhoneNo,
          Role: userResponse.Role,
          _id: userResponse._id,
          transactions: userResponse.transactions,
        },
        token: userResponse.token,
      })
    );
    navigate("/");
  };

  return { register, handleSubmit, errors, onSubmit, error };
};

export default useLoginForm;
