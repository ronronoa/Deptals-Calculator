/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import {Trash2} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

export default function Deptals() {
    const [subjects, setSubjects] = useState([
        {
            grade: "",
            units: "",
        }
    ]);

    const [deptalsGrade, setDeptalsGrade] = useState("")
    const [result, setResult] = useState("")
    const [hasError, setHasError] = useState(false)

    const handleSubjectChange = (index, field, value) => {
        const newSubjects = [...subjects];
        newSubjects[index][field] = value
        setSubjects(newSubjects)
    }

    const addSubject = () => {
        setSubjects([...subjects, {grade: "", units: ""}])
    }

    const removeSubject = (indexToRemove) => {
        const updatedSubjects = subjects.filter((_, index) => index !== indexToRemove)
        setSubjects(updatedSubjects)
    }

    const clearInput = () => {
      const clearSubject = subjects.map(() => ({grade: "", units: ""}))
      setSubjects(clearSubject)
      setResult('')
      setDeptalsGrade('')
    }
 
    const calculate = () => {
        const emptyFields = subjects.some(s => s.grade.trim() === "" || s.units.trim() === '')
          if(emptyFields || deptalsGrade.trim() === "") {
            setResult('')
            setHasError(true)
            return () => 
              setHasError(false)
          }

        const computed = subjects.map(s => ({
            grade: parseFloat(s.grade),
            units: parseFloat(s.units),
            product: parseFloat(s.grade) * parseFloat(s.units)
        }))

        const totalWeighted = computed.reduce((sum, s) => sum + s.product, 0);
        const totalUnits = computed.reduce((sum, s) => sum + s.units, 0);
        const gwa = totalWeighted / totalUnits;

        const rtgPart = gwa * 0.6;
        const deptalsPart = parseFloat(deptalsGrade) * 0.4;
        const finalResult = rtgPart + deptalsPart;

        setResult({
          gwa: gwa.toFixed(3),
          rtg: rtgPart.toFixed(3),
          deptals: deptalsPart.toFixed(3),
          final: finalResult.toFixed(3),
          passed: finalResult <= 2 ? "PASSED" : "FAILED",
          message: finalResult <= 2 ? "CONGRATS, PASADO KA TOL!" : "ANG BUHAY AY 'DI KARERA",
        });
    }

  return (
    <>
    <motion.div 
    className="min-h-screen"
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5}}
    >
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-extrabold text-5xl mb-2 md:mt-4">
            Deptals Calculator
          </h1>
          <p className=''>Your go-to tool for fast and accurate grade calculations.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 p-6 max-w-3xl mx-auto border shadow-md border-gray-200 relative">
        {hasError && (
          <AnimatePresence>
          <motion.div 
          className="absolute flex flex-col top-10 md:top-5 left-1/2 -translate-1/2 mt-4 bg-red-500 border border-gray-200 text-white shadow-md px-4 sm:px-4 py-2 rounded-md z-50"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
          >
            <strong className='relative'>Error:</strong>
            <span className="">Please fill in all field.</span>
            <motion.button 
            className="px-2 py-1 bg-black rounded-md text-white cursor-pointer text-sm absolute right-3"
            onClick={() => setHasError(false)}
            whileTap={{ y: 1}}
            >
              X
            </motion.button>
          </motion.div>
          </AnimatePresence>
        )}
          <div className="w-full md:w-1/2 space-y-4">
            {subjects.map((subject, index) => (
              <>
                <div key={index} className="flex gap-2">
                  <input
                    type="number"
                    step="1"
                    placeholder="Grade"
                    value={subject.grade}
                    onChange={(e) =>
                      handleSubjectChange(index, "grade", e.target.value)
                    }
                    className="border p-2 w-1/2"
                  />

                  <input
                    type="number"
                    step="1"
                    placeholder="Units"
                    value={subject.units}
                    onChange={(e) =>
                      handleSubjectChange(index, "units", e.target.value)
                    }
                    className="border p-2 w-1/2"
                  />

                  {subjects.length > 1 && (
                    <button
                      className="bg-red-500 text-white p-2 rounded cursor-pointer"
                      onClick={() => removeSubject(index)}
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              </>
            ))}
            <div className="flex items-center justify-between sm:pr-4 md:pr-15 md:px-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={addSubject}
            >
              + Add Subject
            </button>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={clearInput}
            >
              - Clear
            </button>
            </div>

            <input
              type="number"
              step="1"
              placeholder="Deptals Grade"
              value={deptalsGrade}
              onChange={(e) => setDeptalsGrade(e.target.value)}
              className="border p-2 w-full"
            />

            <button
              className="bg-green-500 text-white px-4 py-2 w-full rounded cursor-pointer"
              onClick={calculate}
            >
              Calculate
            </button>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded shadow-md space-y-2">
            <h2 className="text-lg font-bold mb-2">Computation Result</h2>
            <p className="border p-4 border-gray-200 shadow-md rounded">
              GWA: <span className="font-bold">{result.gwa}</span>
            </p>
            <p className="border p-4 border-gray-200 shadow-md rounded">
              RTG: (GWA * 0.6): <span className="font-bold">{result.rtg}</span>
            </p>
            <p className="border p-4 border-gray-200 shadow-md rounded">
              DEPTALS: (Grade * 0.4):{" "}
              <span className="font-bold">{result.deptals}</span>
            </p>
            <p className="border p-4 border-gray-200 shadow-md rounded">
              Final Result: <span className="font-bold">{result.final}</span>
            </p>
            <p className="border p-4 border-gray-200 shadow-md rounded">
              Status:{" "}
              <span
                className={
                  result.passed === "PASSED"
                    ? "text-green-500 font-bold"
                    : "text-red-500 font-bold"
                }
              >
                {result.passed}
              </span>
            </p>
              <p className="flex flex-col mt-4 ml-2">
              Message:
              <span
                className={`border p-4 rounded border-gray-200 shadow-md my-2 font-bold ${
                  result.passed === "PASSED" ? "text-green-700" : "text-red-500"
                }`}
              >
                {result.message}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 text-sm text-gray-600 border-t pt-4 md:block hidden">
          <p>
            <strong>Disclaimer:</strong> This project is designed for
            educational or personal use only. All data you input is processed
            locally in your browser and is <strong>not stored</strong>, tracked,
            or transmitted to any server.
          </p>
          <p>
            The owner and developer of this website{" "}
            <strong>
              do not collect or have access to any of your information
            </strong>
            . Your privacy and data security are completely respected and
            protected.
          </p>
        </div>
      </div>
      </motion.div>
    </>
  );
}
