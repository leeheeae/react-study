import React from 'react';

const data = {
  leeheeae: {
    name: '이희애',
    desciption: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    desciption: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desciption}</p>
    </div>
  );
};

export default Profile;
