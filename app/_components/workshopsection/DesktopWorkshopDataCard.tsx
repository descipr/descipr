import React from 'react'
import WorkshopDataCard from './WorkshopDataCard';
import { workshops } from '@/constants';


const DesktopWorkshopDataCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workshops.map((workshop, index) => (
        <WorkshopDataCard key={index} {...workshop} />
      ))}
    </div>
  )
}

export default DesktopWorkshopDataCard
