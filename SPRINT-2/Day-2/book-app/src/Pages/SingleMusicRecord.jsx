import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMusicRecords } from '../Redux/AppReducer/action';


export const SingleMusicRecord = () => {

  const {id} = useParams(); //return an object which contains parameters from url
  const musicRecords = useSelector((state) => state.musicRecords);
  const [currentRecord, setCurrentRecord] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    if(musicRecords?.length === 0) {
      dispatch(getMusicRecords());
    }
  },[musicRecords?.length, dispatch])

  useEffect(() => {
    if(id) {
      const temp = musicRecords?.find((item) => item.id === Number(id)) //if book-id matched the id we are getting from parameter
      temp && setCurrentRecord(temp)
    }
  },[])

  return (
    <div>
      <h2>{currentRecord.name}</h2>
      <img src={currentRecord.img} alt="" />
      <div>{currentRecord.genre}</div>
      <div>{currentRecord.year}</div>
      <button><Link to={`/music/${currentRecord.id}/edit`}>Edit</Link></button>
    </div>
  )
}
