import React from 'react'
import qs from 'qs'

const About = ({ location }: { location: Location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const detail = query.detail === 'true'

  return (
    <div>
      <h1>소개</h1>
      <p>대충 소개하는 글</p>
      {detail && <p>쿼리가 있구나?</p>}
    </div>
  )
}

export default About