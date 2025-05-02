import React from 'react';
import { motion } from 'framer-motion';

function Compare() {
  const nailCareData = [
    { feature: 'Passive Daily Grooming', petcure: true, clipping: false, grinding: false, scratchBoard: false, hammock: false, handFiler: false },
    { feature: 'Fear-Free', petcure: true, clipping: false, grinding: false, scratchBoard: true, hammock: false, handFiler: false },
    { feature: 'No Restraint Needed', petcure: true, clipping: false, grinding: false, scratchBoard: true, hammock: false, handFiler: false },
    { feature: 'Stylish Home Integration', petcure: true, clipping: false, grinding: false, scratchBoard: false, hammock: false, handFiler: false },
    { feature: 'Noise-Free', petcure: true, clipping: false, grinding: false, scratchBoard: true, hammock: true, handFiler: true },
    { feature: 'Custom Sizing Available', petcure: true, clipping: false, grinding: false, scratchBoard: false, hammock: false, handFiler: false },
    { feature: 'Low Maintenance', petcure: true, clipping: false, grinding: false, scratchBoard: false, hammock: false, handFiler: false },
    { feature: 'Designed for Back & Front Paws', petcure: true, clipping: true, grinding: true, scratchBoard: false, hammock: true, handFiler: true },
  ];

  const homeDecorData = [
    { feature: 'Protects Flooring/Stairs', petcure: true, stairTreads: true, stairRunner: true, antiSlipTape: true },
    { feature: 'Files Pet Nails', petcure: true, stairTreads: false, stairRunner: false, antiSlipTape: false },
    { feature: 'Adds Home Aesthetic', petcure: true, stairTreads: true, stairRunner: true, antiSlipTape: false },
    { feature: 'Non-Slip Safety', petcure: true, stairTreads: true, stairRunner: true, antiSlipTape: true },
    { feature: 'Custom Sizing', petcure: true, stairTreads: 'sometimes', stairRunner: true, antiSlipTape: 'sometimes' },
    { feature: 'Low Profile Design', petcure: true, stairTreads: true, stairRunner: true, antiSlipTape: true },
  ];

  const renderYesNo = (value) => {
    if (value === true) return <span className="text-green-500 font-bold">✔️</span>;
    if (value === false) return <span className="text-red-400 font-bold">✖️</span>;
    return <span className="text-yellow-400 font-bold">➖</span>;
  };

  return (
    <section className="bg-pink-50 pt-24 pb-20 min-h-screen px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-pink-600 mb-4">How PetCure Stacks Up</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            See how PetCure stands apart from traditional grooming tools and everyday stair solutions.
          </p>
        </motion.div>

        {/* Nail Care Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-pink-600 text-center">PetCure vs Traditional Nail Care Solutions</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
            We compared PetCure to clipping, grinding, scratch boards, grooming hammocks, and handheld nail filers.
          </p>

          <div className="overflow-x-auto">
            <table className="comparison-table min-w-[650px]">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">PetCure</th>
                  <th>Clipping</th>
                  <th>Grinding</th>
                  <th>Scratch Board</th>
                  <th>Grooming Hammock</th>
                  <th>Hand-Held Nail Filer</th>
                </tr>
              </thead>
              <tbody>
                {nailCareData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.feature}</td>
                    <td className="highlight">{renderYesNo(row.petcure)}</td>
                    <td>{renderYesNo(row.clipping)}</td>
                    <td>{renderYesNo(row.grinding)}</td>
                    <td>{renderYesNo(row.scratchBoard)}</td>
                    <td>{renderYesNo(row.hammock)}</td>
                    <td>{renderYesNo(row.handFiler)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="my-16 border-t-4 border-pink-200 w-3/4 mx-auto rounded-full"
        />

        {/* Home Decor Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-pink-600 text-center">PetCure vs Home Safety & Decor Products</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center text-lg">
            PetCure combines nail care and stair protection—unlike carpet treads, runners, or anti-slip tape.
          </p>

          <div className="overflow-x-auto">
            <table className="comparison-table min-w-[650px]">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">PetCure</th>
                  <th>Carpet Stair Treads</th>
                  <th>Carpet Stair Runner</th>
                  <th>Anti-Slip Tape</th>
                </tr>
              </thead>
              <tbody>
                {homeDecorData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.feature}</td>
                    <td className="highlight">{renderYesNo(row.petcure)}</td>
                    <td>{renderYesNo(row.stairTreads)}</td>
                    <td>{renderYesNo(row.stairRunner)}</td>
                    <td>{renderYesNo(row.antiSlipTape)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Compare;

