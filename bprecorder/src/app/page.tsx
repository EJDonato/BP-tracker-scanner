"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [heartRate, setHeartRate] = useState("");

  const handleSubmit = () => {
    if (!name || !systolic || !diastolic || !heartRate) {
      alert("Please fill in all fields");
      return;
    }

    const record = {
      name,
      systolic,
      diastolic,
      heartRate,
    };

    alert("Submitted BP Record: " + JSON.stringify(record, null, 2));

    try {
      const params = new URLSearchParams({
        name,
        systolic,
        diastolic,
        heartRate,
      });

      const url = `https://script.google.com/macros/s/AKfycbzN601L4ndjVOakfb4rKaiI4JH5rldiQpVdGiTmJ9KFJ-b4QDIGB-TiJFOmj73Af_PH/exec?${params.toString()}`;

      window.location.href = url;
    } catch (err) {
      console.error(err);
      alert("Failed to submit");
    }

    // optional: reset form
    setName("");
    setSystolic("");
    setDiastolic("");
    setHeartRate("");
  };

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start gap-6">
        <h1 className="text-4xl font-bold">BP Tracker</h1>

        <div className="bg-gray-100 shadow-md rounded-6 p-5 flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Name
            </label>
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="" disabled>
                Select name
              </option>
              <option value="Bhong">Bhong</option>
              <option value="Geo">Geo</option>
              <option value="Jhane">Jhane</option>
              <option value="Elton">Elton</option>
            </select>
          </div>

          {/* Systolic */}
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Systolic
            </label>
            <input
              type="number"
              placeholder="mmHg"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={systolic}
              onChange={(e) => setSystolic(e.target.value)}
            />
          </div>

          {/* Diastolic */}
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Diastolic
            </label>
            <input
              type="number"
              placeholder="mmHg"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={diastolic}
              onChange={(e) => setDiastolic(e.target.value)}
            />
          </div>

          {/* Heart Rate */}
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Heart Rate
            </label>
            <input
              type="number"
              placeholder="/min"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-linear-to-b from-blue-400 to-blue-800 p-3 rounded-2xl text-white shadow-md"
        >
          Submit Record
        </button>
      </main>
    </div>
  );
}
