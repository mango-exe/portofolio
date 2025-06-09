import React, { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

const MediaLinks = () => {
  const [copied, setCopied] = useState(false)
  const email = 'albert.emilian17@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className='flex gap-6 items-center justify-center '>
      <a
        href='https://linkedin.com/in/albert-emilian-907292212'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-blue-600 transition duration-300 '
        title='LinkedIn'
      >
        <Linkedin className='w-10 h-10' />
      </a>
      <a
        href='https://github.com/mango-exe'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white hover:text-black transition duration-300'
        title='GitHub'
      >
        <Github className='w-10 h-10' />
      </a>
      <div className='relative'>
        <button
          onClick={copyEmail}
          className='text-white hover:text-red-500 transition duration-300'
          title='Copy email to clipboard'
        >
          <Mail className='w-10 h-10  mt-[0.3em]' />
        </button>
        {copied && (
          <span className='absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-white px-2 py-1 rounded shadow-md'>
            Email copied!
          </span>
        )}
      </div>
    </div>
  )
}

export default MediaLinks
