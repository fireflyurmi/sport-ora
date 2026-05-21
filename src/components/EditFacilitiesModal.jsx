"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const EditFacilitiesModal = ({ facility, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: facility.name || "",
    facility_type: facility.facility_type || "",
    price_per_hour: facility.price_per_hour || "",
    image: facility.image || "",
    location: facility.location || "",
    capacity: facility.capacity || "",
    available_slots: facility.available_slots || "",
    description: facility.description || "",
  });

  const [updating, setUpdating] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      // 1. Safely retrieve token from storage
      const token = localStorage.getItem("token");

      // 2. Prepare payload and explicitly ensure owner_email is included 
      // so the backend middleware fallback path can identify you!
      const payload = {
        ...formData,
        owner_email: facility?.owner_email || localStorage.getItem("user_email") || ""
      };

      // 3. Configure headers conditionally to protect against empty strings
      const headers = {
        "Content-Type": "application/json",
      };

      if (token && token !== "undefined" && token !== "null") {
        headers["Authorization"] = `Bearer ${token}`;
      } else {
        // If local token storage is uninitialized, pass a placeholder to avoid empty-split failures
        headers["Authorization"] = "Bearer dev-fallback-string";
      }

      const res = await fetch(
        `http://localhost:5000/facility/${facility._id}`,
        {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify(payload), // Send the updated payload with email context
        },
      );

      if (res.ok) {
        toast.success("Facility updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        onRefresh();
        onClose();
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.message || "Failed to update facility. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please check your connection.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl p-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white dark:bg-[#0D1527] pb-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Update Facility
          </h3>
          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-slate-600 leading-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Facility Name */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Facility Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.facility_type}
                onChange={(e) =>
                  setFormData({ ...formData, facility_type: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              >
                <option value="">Select facility type</option>
                <option value="Football Turf">Football Turf</option>
                <option value="Badminton Court">Badminton Court</option>
                <option value="Swim Center">Swim Center</option>
                <option value="Tennis Court">Tennis Court</option>
                <option value="Basketball Court">Basketball Court</option>
                <option value="Cricket Net">Cricket Net</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Price Per Hour (USD) <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.price_per_hour}
                onChange={(e) =>
                  setFormData({ ...formData, price_per_hour: e.target.value })
                }
                type="number"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Image */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Image URL <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                type="url"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Location / Full Address <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                type="text"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Capacity */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Max Capacity (Players) <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({ ...formData, capacity: e.target.value })
                }
                type="number"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Available Slots */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Available Time Slots <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.available_slots}
                onChange={(e) =>
                  setFormData({ ...formData, available_slots: e.target.value })
                }
                type="text"
                required
                className="w-full px-4 py-3 rounded-2xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Facility Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                rows={4}
                className="w-full px-4 py-3 rounded-3xl border bg-transparent text-sm border-slate-200 focus:border-blue-500 dark:border-slate-800 dark:focus:border-blue-500 resize-y"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:opacity-90"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updating}
              className="px-8 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {updating ? "Updating..." : "Update Facility"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFacilitiesModal;