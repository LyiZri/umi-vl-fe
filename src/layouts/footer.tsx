import { Box } from '@mui/material'
import React from 'react'
import { config } from '@/lib/config'
import KlIcon from '@/components/kl-icons'

export default function Footer() {
  const iconArr = [{
    type: "icon-a-facebook1",
    url: ""
  },
  {
    type: "icon-a-twitter2",
    url: ""
  }, {
    type: "icon-discord",
    url: ""
  }
  ]
  const IconBox = (): React.ReactNode => {
    return <Box className='flex justify-end'>
      {
        iconArr.map((item, index) => {
          return <Box className='ml-8 w-7 h-7 text-white text-center rounded-full bg-tagbg' key={index} >
            <KlIcon className='text-sm -mt-0.5 leading-7 block' type={item.type} key={index} />
          </Box>
        })
      }
    </Box>
  }

  return (
    <Box className='bg-cardbg'>
      <Box className='px-content py-16 '>
        <Box className='flex justify-between'>
          <img
            width={104}
            height={30}
            alt=""
            src={config.logo}
          />
          {
            IconBox()
          }
        </Box>
        <p className='pt-4'>A one stop destination for web3 gaming.</p>
      </Box>
      <Box className='pb-8 border-t border-black text-center'>
        <p className='text-weight-line text-xs pt-4'> Copyright © 2022 Klick. Co., Ltd. All Rights Reserved.</p>
      </Box>
    </Box>
  )
}
