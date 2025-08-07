import { useMemo } from 'react'
import type { responseData } from '../App'
import CardTask from './cardTask'

interface CardTodoProps {
  data: responseData[], 
  status: string, 
  bgColor: string,
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
  onDrop: (e: React.DragEvent<HTMLDivElement>, newStatus: string) => void,

}

const CardTodo = ({data, status, bgColor, onDragOver, onDrop}: CardTodoProps) => {
    
  const filterByStatus = useMemo(() => data.filter((item) => item.status == status),[status, data])

  return (
    <div className='bg-gray-200 shadow-lg rounded-lg w-full h-full'
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, status)}
    >
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