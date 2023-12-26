import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallComponent: React.FC = () => {
  return <Snowfall snowflakeCount={500} color='pink' />;
};

export default SnowfallComponent;