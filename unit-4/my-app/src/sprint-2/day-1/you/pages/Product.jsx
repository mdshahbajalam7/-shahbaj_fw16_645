import React from 'react'
import { useParams } from 'react-router-dom'

let data = {
    1:"mouse",
    2:"keyboard",
    3:"Moniter",
    4:"cpu"
}
//     {
//         id:1,
//         name:"mouse",
//         image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
//     },
//     {
//         id:2,
//         name:"keyboard",
//         image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
//     },
//     {
//         id:3,
//         name:"Moniter",
//         image:"https://support.content.office.net/en-us/media/e8384959-ad1a-1b95-762b-2861496b886e.png"
//     },
//     {
//         id:4,
//         name:"cpu",
//         image:"https://5.imimg.com/data5/BE/JW/MY-14914674/dell-desktop-cpu-500x500.jpg"
//     }

// ]

function Product() {
    const {id}=useParams()
  return (
    <div>Product:{id}:{data[id]}</div>
  )
}

export default Product