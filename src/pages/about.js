import React from 'react';
import Banner from '../components/Banner';
import TextImageWidget from '../components/TextImageWidget';
import Team from '../components/Team';
import JoinTeam from '../components/JoinTeam';

const About = () => {

  return (
    <div>
      <TextImageWidget />
      <Team />
      <JoinTeam />
    </div>
  );
}

export default About;
