import React from 'react'
import { useMemo } from 'react'

type User = {
    id: number,
    name: string,
    age: number

}

function UserList() {
    const users = useMemo<User[]>(
        () => [
            { id: 1, name: 'Nguyễn Văn A', age: 17 },
            { id: 2, name: 'Trần Thị B', age: 20 },
            { id: 3, name: 'Lê Văn C', age: 22 },
            { id: 4, name: 'Phạm Thị D', age: 18 },
            { id: 5, name: 'Hoàng E', age: 25 },
        ],
        []
    )
    const animal = useMemo(() => users.filter(u => u.age > 18), [users])

      return (
    <div>
      <h2>Danh sách người dùng (trên 18 tuổi)</h2>
      {animal.length === 0 ? (
        <p>Không có người dùng phù hợp.</p>
      ) : (
        <ul>
          {animal.map(u => (
            <li key={u.id}>
              {u.name} - {u.age} tuổi
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}





export default function Exercise02() {
    return (
        <div>
            <UserList></UserList>
                
        </div>
    )
}
