"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
// import { signUp } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="Sign-Up"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={()=>{}}
  />
);

export default Page;