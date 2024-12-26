"use client";

import { MyUserContextProvider } from "@/src/hooks/useUser";

interface UserProviderProps {
	children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
