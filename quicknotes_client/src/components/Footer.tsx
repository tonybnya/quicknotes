import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-between text-white text-sm p-4">
        <p>&copy; {new Date().getFullYear()}</p>
        <p>Made with <span className='text-[#EC4899]'>❤</span> by <a className='text-[#EC4899]' target='_blank' href="https://github.com/tonybnya">tonybnya</a></p>
    </footer>
  )
}

export default Footer;