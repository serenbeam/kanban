import { useMemo } from 'react'
import type { responseData } from '../App'
import CardTask from './cardTask'

interface CardTodoProps {
  data: responseData[], 
  status: string, 
  bgColor: string
}

const CardTodo = ({data, status, bgColor}: CardTodoProps) => {
    
  const filterByStatus = useMemo(() => data.filter((item) => item.status == status),[status, data])

  return (
    <div className='bg-gray-200 shadow-lg rounded-lg w-full h-full'>
      <div className={`w-full h-10 rounded-t-lg flex justify-center items-center ${bgColor}`}>
        <p className='text-center font-bold text-white'>{status}</p>
      </div>
      {filterByStatus?.map((item) => (
        <CardTask 
          key={item?.title} 
          title={item?.title} 
          status={item?.status} 
          type={item?.type} 
          dev={item?.developer}
        />
      ))}
    </div>
  )
}

export default CardTodo