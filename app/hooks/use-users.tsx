import { useState, useEffect } from "react";
import UserService from "../services/user-service";

type User = {
  id: number;
  name: string;
  avatar: string;
  jobTitle: string;
};

const useGetAllUser = () => {
  const [users, setUsers] = useState<{ admin: User[]; users: User[] }>({
    admin: [],
    users: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await UserService.getAllUsers();
      console.log("response?.users?.admin" , response?.users?.admin)
      setUsers({
        admin: response?.users?.admin || [],
        users: response?.users?.normal || [],
      });
      setError("");
    } catch (err) {
      setError("Error fetching users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { users, loading, error };
};

export default useGetAllUser;
