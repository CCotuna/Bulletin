import React from 'react';

function Notifications({ notifications }) {
  return (
    <div className="absolute top-20 right-4 bg-white shadow-lg w-96 p-4 rounded-lg z-50">
      <h3 className="text-xl font-semibold mb-4">Notifications</h3>
      <ul className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li key={index} className="border-b pb-2">
              <p className="text-sm">{notification}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No notifications available.</li>
        )}
      </ul>
    </div>
  );
}

export default Notifications;
