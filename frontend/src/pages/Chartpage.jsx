// //ChatPage
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export const ChatPage = () => {
//   const [chats, setChats] = useState([])

//   const fetchChats = async () => {
//     const { data } = await axios.get(`/api/chat`)
//     // console.log(data)
//     setChats(data)
//   }
//   console.log(chats)

//   useEffect(() => {
//     fetchChats();
//   }, [])
//   return (
//     <div>
//       {chats.map((chat, id) => (
//         <div key={chat._id}>{chat.chatName}</div>
//       ))}
//     </div>
//   )
// }

import React from 'react'

export const Chartpage = () => {
  return (
    <div>Chartpage</div>
  )
}


