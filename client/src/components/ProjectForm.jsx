import React, { useState } from "react";

export default function ProjectForm({ onClose }) {
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [projectManagerId, setProjectManagerId] = useState("");
  const [projectManagerName, setProjectManagerName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectOwningBU, setProjectOwningBU] = useState("");
  const [projectOwningSBU, setProjectOwningSBU] = useState("");
  const [projectType, setProjectType] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formatDateString = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const projectData = {
      project_id: projectId,
      project_name: projectName,
      project_status: projectStatus,
      projectManagerId,
      projectManagerName,
      projectDescription,
      projectOwningBU,
      projectOwningSBU,
      projectType,
      country,
      state,
      city,
      projectStartDate: formatDateString(projectStartDate),
      projectEndDate: formatDateString(projectEndDate),
    };

    try {
      const response = await fetch(
        "https://chic-enthusiasm-production.up.railway.app/project",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        }
      );

      if (response.ok) {
        alert("Project added successfully!");
        onClose();
      } else {
        const contentType = response.headers.get("content-type");
        let error;
        if (contentType && contentType.includes("application/json")) {
          error = await response.json();
        } else {
          error = { message: await response.text() };
        }
        alert(`Failed to add project: ${error.message}`);
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("An error occurred while adding the project");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-md bg-white"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project ID:
        </label>
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Name:
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Status:
        </label>
        <select
          value={projectStatus}
          onChange={(e) => setProjectStatus(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select</option>
          <option value="">Active</option>
          <option value="">Upcoming</option>
          <option value="">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Manager ID:
        </label>
        <input
          type="text"
          value={projectManagerId}
          onChange={(e) => setProjectManagerId(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Manager Name:
        </label>
        <input
          type="text"
          value={projectManagerName}
          onChange={(e) => setProjectManagerName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Description:
        </label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Owning BU:
        </label>
        <select
          value={projectOwningBU}
          onChange={(e) => setProjectOwningBU(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select</option>
          <option value="">RM</option>
          <option value="">CS</option>
          <option value="">A1</option>
          <option value="">Etc</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Owning Sub-BU:
        </label>
        <select
          value={projectOwningSBU}
          onChange={(e) => setProjectOwningSBU(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        >
          <option value="">Select</option>
          <option value="">RM1</option>
          <option value="">CS1</option>
          <option value="">A13</option>
          <option value="">Etcc</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Type:
        </label>
        <input
          type="text"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Country:
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          State:
        </label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project Start Date:
        </label>
        <input
          type="date"
          value={projectStartDate}
          onChange={(e) => setProjectStartDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Project End Date:
        </label>
        <input
          type="date"
          value={projectEndDate}
          onChange={(e) => setProjectEndDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded bg-gray-300 text-gray-700 mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border rounded bg-blue-700 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
