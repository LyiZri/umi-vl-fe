import React from 'react'

const KlInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input type="text" {...props} className={`bg-transparent font-mulish focus-visible:ring-0 focus-visible:outline-none text-white ${props.className}`} />
}
export default KlInput