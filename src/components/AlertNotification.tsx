import React from 'react'


interface AlertNotificationsType {
alertType: string
title: string
text: string
}


const AlertNotifications: React.FC<AlertNotificationsType> = ({alertType = "warning", title, text}) => {
  return (
    <div className={`alert alert-${alertType} text-center mb-5`} role="alert">
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default AlertNotifications