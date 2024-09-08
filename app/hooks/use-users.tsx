import { useState, useEffect } from "react";
import UserService from "../services/user-service";

const useGetAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await UserService.getAllUsers();
      setUsers(response.data);
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
