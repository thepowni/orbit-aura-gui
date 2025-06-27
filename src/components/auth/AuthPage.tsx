
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8c52ff]/10 via-white to-[#8c52ff]/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm onToggle={toggleMode} />
        ) : (
          <RegisterForm onToggle={toggleMode} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
