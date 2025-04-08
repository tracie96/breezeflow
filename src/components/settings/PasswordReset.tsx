import React, { useState } from "react";
import EyeIcon from "@/components/ui/EyeIcon";

interface PasswordResetProps {
  userData?: {
    name?: string;
    email?: string;
    bio?: string;
    password?: string;
  };
  onUpdateUserData?: (data: any) => void;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ userData, onUpdateUserData }) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match");
      return;
    }
    
    // Validate current password if we have stored password
    const storedPassword = userData?.password || localStorage.getItem("userPassword");
    if (storedPassword && passwordData.currentPassword !== storedPassword) {
      alert("Current password is incorrect");
      return;
    }
    
    // Store new password in localStorage
    if (onUpdateUserData) {
      onUpdateUserData({ password: passwordData.newPassword });
    } else {
      localStorage.setItem("userPassword", passwordData.newPassword);
    }
    
    console.log("Password reset submitted:", passwordData);
    
    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    
    alert("Password updated successfully");
  };

  return (
    <div className="flex flex-col w-full gap-8 border bg-[#101828] p-6 rounded-2xl border-[#1D2939]">
      <div className="flex justify-between items-start w-full">
        <h2 className="text-white text-2xl font-medium gap-2 flex-1">
          Reset password
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end gap-10 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="currentPassword"
              className="text-white text-sm font-medium leading-5"
            >
              Current Password
            </label>
            <div className="flex h-[60px] justify-between items-center w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939] bg-transparent">
              <input
                id="currentPassword"
                name="currentPassword"
                type={showPasswords.currentPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                className="text-[#475467] text-base font-light leading-6 bg-transparent border-none outline-none w-full"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("currentPassword")}
                className="focus:outline-none"
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="newPassword"
              className="text-white text-sm font-medium leading-5"
            >
              New Password
            </label>
            <div className="flex h-[60px] justify-between items-center w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939] bg-transparent">
              <input
                id="newPassword"
                name="newPassword"
                type={showPasswords.newPassword ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="text-[#475467] text-base font-light leading-6 bg-transparent border-none outline-none w-full"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="focus:outline-none"
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="confirmPassword"
              className="text-white text-sm font-medium leading-5"
            >
              Confirm New Password
            </label>
            <div className="flex h-[60px] justify-between items-center w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939] bg-transparent">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPasswords.confirmPassword ? "text" : "password"}
                value={passwordData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter new password"
                className="text-[#475467] text-base font-light leading-6 bg-transparent border-none outline-none w-full"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                className="focus:outline-none"
              >
                <EyeIcon />
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="border bg-[#0048FF] text-white text-center text-lg font-medium tracking-[-0.2px] px-6 py-4 rounded-2xl border-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PasswordReset; 