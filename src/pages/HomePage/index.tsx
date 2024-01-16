import { useEffect, useState } from 'react'

import Functions from '../../helpers/functions'

import userIcon from '../../assets/user.svg'
import mockData from '../../mocks/data.json'

interface IData {
  id: string
  code: string
  lastname: string
  name: string
  score: number
  obs: string
}

const HomePage = () => {
  const [data, setData] = useState<IData[]>([])

  useEffect(() => {
    setData(mockData.students)
  }, [])

  return (
    <div data-testid="HomePage" className="p-6">
      {data.map((item: IData, index: number) => (
        <div key={index} className="flex items-center py-4 border-t border-slate-500 gap-2">
          <img src={userIcon} width={20} height={20} />
          <div className="flex gap-1 items-center">
            <span className="text-xs font-bold">{Functions.sanitizeCase(item.lastname)}</span>
            <span className="text-xs">{Functions.sanitizeCase(item.name)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage
