import React from 'react'
import { RouteComponentProps } from 'react-router'

type MatchParams = {
  username: string
}

const profileData: { [key: string]: { name: string, description: string } } = {
  Jell: {
    name: 'Jellive',
    description: 'It\'s me!'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
}

const Profile: React.FunctionComponent<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { username } = match.params
  const profile = profileData[username]
  if (!profile) {
    return <div>없는 유저임요</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile