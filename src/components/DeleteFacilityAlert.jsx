"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const DeleteFacilityAlert = ({ facility, onClose, onRefresh }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      
      // 1. Safely retrieve token from storage
      const token = localStorage.getItem("token");
      
      // 2. Fetch the backup identifier email context
      const userEmail = facility?.owner_email || localStorage.getItem("user_email") || "";

      // 3. Configure headers to satisfy verifyToken middleware format
      const headers = {};
      if (token && token !== "undefined" && token !== "null") {
        headers["Authorization"] = `Bearer ${token}`;
      } else {
        headers["Authorization"] = "Bearer dev-delete-fallback";
      }

      // 4. Pass the email context in the query path since DELETE requests shouldn't have a body payload
      const res = await fetch(
        `http://localhost:5000/facility/${facility._id}?email=${encodeURIComponent(userEmail)}`,
        {
          method: "DELETE",
          headers: headers,
        }
      );

      if (res.ok) {
        toast.success("Facility deleted successfully!");
        onRefresh();
        onClose();
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.message || "Failed to delete facility");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 w-full max-w-md rounded-2xl p-6 shadow-2xl">
        <div className="mb-4">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="text-red-500">⚠</span> Delete Facility?
          </h4>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          This will permanently delete <strong>{facility?.name}</strong> and all
          its data. This action cannot be undone.
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={deleting}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-90 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? "Deleting..." : "Delete Facility"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFacilityAlert;
