import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './redux/reducers/ActionCreators'
import { userSlice } from './redux/reducers/UserSlice'

function App() {
  const { users, isLoading, error, count } = useAppSelector(
    (state) => state.userReducer
  )
  const { increment } = userSlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <div>count - {count}</div>
        <button onClick={() => dispatch(increment(1))}>inc</button>
      </div>
      <div>
        {isLoading
          ? 'идет загрузка...'
          : users.map((user) => (
              <div>
                user {user.id}: {user.name}, email: {user.email}
              </div>
            ))}

        {error ? 'ошибка' : null}
      </div>
    </div>
  )
}

export default App
