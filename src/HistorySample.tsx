import React, { useEffect } from 'react'
import * as H from 'history'


function HistorySample({ history }: { history: H.History }): JSX.Element {

  const goBack = () => {
    history.goBack()
  }

  const goHome = () => {
    history.push('/')
  }

  useEffect(() => {
    console.log(history)
    const unblock = history.block('정말 나가니?')
    return () => {
      unblock()
    }
  }, [history])

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  )

}

export default HistorySample