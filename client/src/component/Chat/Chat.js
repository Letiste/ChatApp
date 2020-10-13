import React, {useState, useEffect} from "react"
import queryString from 'query-string'
import io from 'socket.io-client'

const ENDPOINT = 'localhost:5000'
let socket

export default function Chat({location}) {
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")

  useEffect(() => {
    const {name, room} = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', {name, room})
  }, [ENDPOINT, location.search])

  return (
    <h1>Chat</h1>
  )
}