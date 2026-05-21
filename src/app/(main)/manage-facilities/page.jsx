"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import EditFacilitiesModal from "@/components/EditFacilitiesModal";
import DeleteFacilityAlert from "@/components/DeleteFacilityAlert";

const ManageFacilitiesPage = () => {
  const { data: session } = authClient.useSession();
  const owner_email = session?.user?.email;

  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Facilities");
  const [loading, setLoading] = useState(true);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [activeFacility, setActiveFacility] = useState(null);

  // FETCH DATA
  useEffect(() => {
    const loadFacilities = async () => {
      if (!owner_email) {
        setFacilities([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:5000/facility?owner_email=${owner_email}`,
        );

        if (res.ok) {
          const data = await res.json();
          setFacilities(data);
        } else {
          toast.error("Failed to load your facilities");
        }
      } catch (err) {
        console.error(err);
        toast.error("Could not connect to server");
      } finally {
        setLoading(false);
      }
    };

    loadFacilities();
  }, [owner_email]);

  const openEditModal = (facility) => {
    setActiveFacility(facility);
    setIsEditOpen(true);
  };

  const openDeleteAlert = (facility) => {
    setActiveFacility(facility);
    setIsDeleteOpen(true);
  };

  const filteredData = facilities.filter((f) => {
    const matchesSearch =
      f.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Facilities" ||
      f.facility_type?.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] dark:bg-[#080F1A] text-slate-800 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight">
              Manage My Facilities
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              {facilities.length} facilities • Only yours
            </p>
          </div>
          <button
            onClick={() => (window.location.href = "/add-facility")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            + Add New Facility
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-52 bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none"
          >
            <option>All Facilities</option>
            <option>Football Turf</option>
            <option>Cricket Net</option>
            <option>Badminton Court</option>
            <option>Basketball Court</option>
            <option>Tennis Court</option>
          </select>

          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none"
          />
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-[#0D1527] border border-slate-100 dark:border-slate-800 rounded-3xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  <th className="p-5 text-left">Facility</th>
                  <th className="p-5 text-left">Type</th>
                  <th className="p-5 text-left">Price/Hour</th>
                  <th className="p-5 text-left">Location</th>
                  <th className="p-5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center">
                      Loading your facilities...
                    </td>
                  </tr>
                ) : filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-16 text-center text-slate-400">
                      No facilities found. Add your first one!
                    </td>
                  </tr>
                ) : (
                  filteredData.map((facility) => (
                    <tr
                      key={facility._id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      <td className="p-5 font-medium">{facility.name}</td>
                      <td className="p-5">{facility.facility_type}</td>
                      <td className="p-5 font-medium">
                        ${facility.price_per_hour}
                      </td>
                      <td className="p-5 text-slate-500 dark:text-slate-400 max-w-xs truncate">
                        {facility.location}
                      </td>
                      <td className="p-5">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditModal(facility)}
                            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => openDeleteAlert(facility)}
                            className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-red-700 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isEditOpen && activeFacility && (
        <EditFacilitiesModal
          facility={activeFacility}
          onClose={() => setIsEditOpen(false)}
          onRefresh={() => window.location.reload()}
        />
      )}

      {isDeleteOpen && activeFacility && (
        <DeleteFacilityAlert
          facility={activeFacility}
          onClose={() => setIsDeleteOpen(false)}
          onRefresh={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default ManageFacilitiesPage;