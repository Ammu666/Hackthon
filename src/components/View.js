import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {check} from 'react-icons-kit/iconic/check'


export const View = ({todo,deleteTodo,completeTodo}) => {
  return todo.map (dolist=>
    <tr key={dolist.id}>
        <td>{dolist.id}</td>
        <td>{dolist.addtodo}</td>
        <td className='completed-btn' onClick={()=>completeTodo(dolist.id)}>
            <Icon icon={check}/></td>
        <td className='delete-btn' onClick={()=>deleteTodo(dolist.id)}>
            <Icon icon={trash}/>
        </td>
    </tr>
  )
  }
export default View
