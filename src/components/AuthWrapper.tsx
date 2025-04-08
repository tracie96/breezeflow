"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Check authentication status
  React.useEffect(() => {
    // TODO: Implement actual authentication check
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token");
      setIsAuthenticated(!!token);
    };
    
    checkAuth();
  }, []);

  // Redirect to signup if not authenticated
  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper; 