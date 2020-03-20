import React from 'react';
import ButtonM from './Button.component';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import './Button.style.css';

export default {
  title: 'button',
};

// export const DashbordActive = () => <ButtonM icon={faThLarge} text="DashBoard" active={true}    />;
// export const DashbordInactive = () => <ButtonM icon={faThLarge} text="DashBoard"  active={false} />;
export const Dashbord = () => <ButtonM icon={faThLarge} text="DashBord" />;
export const CropDetails = () => (
  <ButtonM icon={faSeedling} text="Crop Details" />
);
export const AddCrop = () => <ButtonM icon={faPlusCircle} text="Add Crop" />;
export const LogOut = () => <ButtonM icon={faUserCircle} text="LogOut" />;
