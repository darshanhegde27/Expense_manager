import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HomeData } from '../../Redux/Reducers/Homepage_data';

export default function Home() {
  const user = useSelector(HomeData);
  const dispatch = useDispatch();

  return <div>{console.log(user)}</div>;
}
