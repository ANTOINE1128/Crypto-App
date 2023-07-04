import { FaGear } from 'react-icons/fa6';
import { PiMicrophoneFill } from 'react-icons/pi';
import { IoChevronBack } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const Navigation = () => (
  <Box>
    <NavLink to="/" className="back-arrow">
      {' '}
      <IoChevronBack size={25} className="back-arrow" />
    </NavLink>
    <NavLink to="/" className="heading">
      <h2>countries stats</h2>
    </NavLink>
    <Box>
      <PiMicrophoneFill />
      <FaGear />
    </Box>
  </Box>
);

export default Navigation;
