"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function LeadPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 500) // slight delay like real sites

    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg flex overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 bg-primary text-white flex-col items-center justify-center p-6">
          <img
            src="/insurance.svg" // put your SVG in public folder
            alt="insurance"
            className="w-40 mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            Compare & Save on Insurance
          </h2>
          <p className="text-sm text-center mt-2">
            Get best plans tailored for you
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 p-6 relative">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg font-semibold mb-4">
            View Plans Instantly
          </h2>

          <form className="space-y-3">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="date"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="number"
              placeholder="Annual Income"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md font-medium hover:opacity-90"
            >
              View Plans
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            By proceeding, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}