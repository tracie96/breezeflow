import React, { useState, useEffect } from "react";

interface ProfileSettingsProps {
  userData: {
    name?: string;
    email?: string;
    bio?: string;
  };
  onUpdateUserData: (data: any) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ userData, onUpdateUserData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Initialize form with userData when available
    if (userData) {
      const nameParts = (userData.name || "").split(" ");
      setFormData({
        firstName: nameParts[0] || "Paul",
        lastName: nameParts.slice(1).join(" ") || "David",
        email: userData.email || "paul@breezelearn.com",
      });
    }
  }, [userData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update userData in parent component and localStorage
    onUpdateUserData({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
    });
    console.log("Profile data submitted:", formData);
  };

  return (
    <div className="flex flex-col w-full gap-8 border bg-[#101828] p-6 rounded-2xl border-[#1D2939]">
      <h2 className="text-white text-2xl font-medium gap-4">
        Profile Settings
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end gap-10 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 w-full max-md:flex-col">
            <div className="flex flex-col gap-1.5 flex-1">
              <label
                htmlFor="firstName"
                className="text-white text-sm font-medium leading-5"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="text-[#FCFCFD] text-base font-light leading-6 h-[60px] w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939] bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label
                htmlFor="lastName"
                className="text-white text-sm font-medium leading-5"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="text-[#FCFCFD] text-base font-light leading-6 h-[60px] w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939] bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="email"
              className="text-white text-sm font-medium leading-5"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled
              className="text-[#98A2B3] text-base font-light leading-6 h-[60px] bg-[#222530] w-full p-5 rounded-[14px] border-[1.5px] border-[#1D2939]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="border bg-[#0048FF] text-white text-center text-lg font-medium tracking-[-0.2px] px-6 py-4 rounded-2xl border-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings; 