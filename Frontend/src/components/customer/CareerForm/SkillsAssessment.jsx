import React from "react";

const SkillsAssessment = ({ register, errors }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Skills Assessment</h3>

      <label className="block">Communication Skills (0-100)</label>
      <input type="number" {...register("cs")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.cs?.message}</p>

      <label className="block mt-2">Logical Quotient Rating (0-10)</label>
      <input type="number" {...register("lq")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.lq?.message}</p>

      <label className="block mt-2">Hackathons Attended</label>
      <input type="number" {...register("hack")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.hack?.message}</p>

      <label className="block mt-2">Coding Skills (0-10)</label>
      <input type="number" {...register("coding")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.coding?.message}</p>

      <label className="block mt-2">Public Speaking Points (0-10)</label>
      <input type="number" {...register("ps")} className="border p-2 w-full" />
      <p className="text-red-500">{errors.ps?.message}</p>
    </div>
  );
};

export default SkillsAssessment;
