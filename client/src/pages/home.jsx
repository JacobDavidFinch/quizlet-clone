import React from 'react';
import {useWindowSize} from "../hooks/useWindowSize"


export const Dashboard = () => {
  const windowSize = useWindowSize();
  return (
    <div className="dashboard">
      {windowSize && windowSize.width > 770 ? (
        <SidePanel/>
      ) : null}
    </div>
  )
}