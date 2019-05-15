import React from 'react'
import './page.scss'

const Page: React.FC = (props: any) => {
  const param = props.match.params.parameter

  return (
    <div className="container">
      <div>
        {param ?
          <p>Page - Parameter: {param}</p>
          :
          <p>Parameter not found</p>
        }
      </div>
    </div>
  )
}

export default Page