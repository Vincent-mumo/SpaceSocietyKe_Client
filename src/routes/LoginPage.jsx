import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-[calc(100vh-80px)] bg-cover bg-center"
      style={{ backgroundImage: `url('/space5.jpg')` }}
    >
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
