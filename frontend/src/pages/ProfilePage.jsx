import React from "react";
import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card";

export default function ProfilePage() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <p>No user data available.</p>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card>
        <CardHeader>
          <CardTitle>Profile: {currentUser.username}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Token:</strong>{" "}
            {currentUser.accessToken
              ? `${currentUser.accessToken.substring(0, 20)}...`
              : "No token"}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <div>
            <strong>Authorities:</strong>
            <ul className="list-disc list-inside">
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
