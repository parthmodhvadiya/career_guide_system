import React from "react";

const CareerPreferences = ({ register, errors }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Career Preferences</h3>

      <label className="block">Interested Subjects</label>
      <input {...register("int_sub")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.int_sub?.message}</p>

      <label className="block mt-2">Interested Career Area</label>
      <input {...register("int_career")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.int_career?.message}</p>

      <label className="block mt-2">Job or Higher Studies?</label>
      <select {...register("job_hs")} className="border p-2 w-full">
        <option value="">Select</option>
        <option value="Job">Job</option>
        <option value="Higher Studies">Higher Studies</option>
      </select>
      <p className="text-red-500">{errors.job_hs?.message}</p>

      <label className="block mt-2">Preferred Company Type</label>
      <input {...register("company")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.company?.message}</p>

      <label className="block mt-2">Worked in Teams?</label>
      <select {...register("teamwork")} className="border p-2 w-full">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <p className="text-red-500">{errors.teamwork?.message}</p>

      <label className="block mt-2">Suggested Job Role</label>
      <input {...register("job_role")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.job_role?.message}</p>
    </div>
  );
};

export default CareerPreferences;
