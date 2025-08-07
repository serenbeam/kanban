import { useEffect, useMemo, useState } from 'react'
import './App.css'
import CardTodo from './components/cardTodo'
import { statusTask } from './utils/constant';
import { useDebounce } from './hooks/useDebounce';

export interface responseData {
  title: string;
  developer: string;
  priority: string;
  status: string;
  type: string;
  estimatedd_SP: number;
  actual_SP: number;
}

function App() {
  const [data, setData] = useState<responseData[]>([]);
  const [search, setsearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const handleDrop = (e: React.DragEvent, newStatus: responseData['status']) => {
    const title = e.dataTransfer.getData('title')
    setData(prev =>
      prev.map(task =>
        task.title === title ? { ...task, status: newStatus } : task
      )
    )
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }
  
  const getData = async () => {
    try{
      const response = await fetch(`https://mocki.io/v1/282222c9-43cf-4d92-9ba0-0e0d1447f403`);
      const result = await response.json()
      setData(result?.data)
    } catch(error: any) {
      console.log(error?.message)
    }
  }

  const searchData = useMemo(() => {
    if(search) {
      return data.filter((item) => item.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
    } else {
      return data
    }
  }
  ,[search, data])

  useEffect(() => {
    getData()
  },[])

  return (
    <>
    <div className='flex justify-start mt-3 mb-3'>
      <input 
        className="pl-3 pr-1 py-1 border rounded placeholder-gray-500"
        type="text" 
        placeholder='search' 
        value={search}
        onChange={e => setsearch(e.target.value)}
        />
    </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 px-4 py-2'>
        {statusTask?.map((item) => (
          <CardTodo 
            key={item.key} 
            onDragOver={handleDragOver} 
            onDrop={e => handleDrop(e, item?.status)} 
            bgColor={item.bgColor} 
            status={item.status} data={searchData}
            />
        ))} 
      </div>
    </>
  )
}

export default App
