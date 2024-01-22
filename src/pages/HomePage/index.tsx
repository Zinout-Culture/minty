import { useEffect, useState } from 'react'

import Modal from '../../components/Modal'

import Functions from '../../helpers/functions'

import userIcon from '../../assets/user.svg'
import searchIcon from '../../assets/search.svg'
import editIcon from '../../assets/edit.svg'
import infoIcon from '../../assets/info.svg'

import mockData from '../../mocks/data.json'

interface IData {
  id: string
  code: string
  lastname: string
  name: string
  score: number
  obs: string
  isOpen: boolean
}

const HomePage = () => {
  const [data, setData] = useState<IData[]>([])
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleToggle = (index: number): void => {
    data[index].isOpen = !data[index].isOpen
    setData([...data])
  }

  const handleModal = (index: number) => {
    console.info(data[index])
    setOpen(true)
  }

  useEffect(() => {
    setData(mockData.students)
  }, [])

  return (
    <div data-testid="HomePage" className="px-6 flex flex-col">
      <div className="flex gap-2 w-full py-2">
        <input className="bg-white rounded p-2 text-neutral-800 text-sm w-full focus:outline-none" />
        <div
          className="bg-green-500 rounded flex justify-center items-center"
          style={{ width: 50 }}
        >
          <img src={searchIcon} width={30} height={30} />
        </div>
      </div>

      {data.map((item: IData, index: number) => (
        <div
          key={index}
          className="flex flex-col justify-center py-4 border-t border-slate-500"
          onClick={() => handleToggle(index)}
        >
          <div className="flex justify-between gap-2">
            <div className="flex">
              <img src={userIcon} width={20} height={20} />
              <div className="flex gap-1 items-center">
                <span className="text-xs font-bold">{Functions.sanitizeCase(item.lastname)}</span>
                <span className="text-xs">{Functions.sanitizeCase(item.name)}</span>
              </div>
            </div>

            <span className="font-bold">{item.score}</span>
          </div>

          {item.isOpen && (
            <div className="pl-4 pr-4 pt-4 flex flex-col items-start">
              <div className="flex justify-between w-1/2">
                <span className="text-sm font-bold">Nota:</span>
                <span className="text-sm">{item.score}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold">Observación:</span>
                <span className="text-sm text-start">{item.obs}</span>
              </div>
              <div className="flex pt-3 w-full justify-around">
                <img src={editIcon} height={25} width={25} onClick={() => handleModal(index)} />
                <img src={infoIcon} height={25} width={25} onClick={() => handleModal(index)} />
              </div>
            </div>
          )}
        </div>
      ))}

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <span>esto es un modal</span>
      </Modal>
    </div>
  )
}

export default HomePage
