import React from "react";

const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
      <label className="block">Self-Learning Capability?</label>
      <select {...register("slc")} className="border p-2 w-full">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <p className="text-red-500">{errors.slc?.message}</p>

      <label className="block mt-2">Extra Courses Did</label>
      <input {...register("ec")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.ec?.message}</p>

      <label className="block mt-2">Certifications</label>
      <input {...register("certs")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.certs?.message}</p>
    </div>
  );
};

export default PersonalDetails;
