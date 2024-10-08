import React from 'react'

export default function () {
  return (
        <footer className="flex flex-col sm:flex-row justify-around bg-navbarfooter text-letrasNavFooter font-semibold p-4">
        <div className="m-4 p-2">
          <p className="text-2xl">Cites:</p>
          <p>Home</p>
          <p>Cities</p>
        </div>

        <div className="m-4 p-2">
          <p className="text-2xl">Contact Us</p>
          <p>123 Street, City</p>
          <p>Email: contact@mytinerary.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </footer>
  )
}
