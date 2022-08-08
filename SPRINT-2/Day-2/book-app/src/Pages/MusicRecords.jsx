import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getMusicRecords } from '../Redux/AppReducer/action';
import styled from "styled-components";
import { useSearchParams, useLocation, Link } from "react-router-dom";

export const MusicRecords = () => {

    const dispatch = useDispatch();
    const musicRecords = useSelector((state) => state.musicRecords);
    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if(location || musicRecords.length === 0) {
            const sortBy = searchParams.get("sortBy")
            const queryParams = {
                params : {
                    genre: searchParams.getAll("genre"),
                    _sort: sortBy && "year",
                    _order: sortBy,
                }
            }
            dispatch(getMusicRecords(queryParams));
        }
    }, [location.search]); //data will be fetched with parameter in url
    console.log('location:', location)

    console.log('musicRecords:', musicRecords);

  return (
      <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridGap: "20px"}}>
        {musicRecords.length > 0 && musicRecords.map((item) => {
            return (
                <MusicRecordsWrapper key={item.id}>
                    <Link to={`/music/${item.id}`}>
                    
                    <div>{item.name}</div>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div>{item.genre}</div>
                    <div>{item.year}</div>
                    </Link>
                    </MusicRecordsWrapper>

            )
        })}
    </div>
  )
}

const MusicRecordsWrapper = styled.div`
  width: 300px;
  border: 3px solid green;
`;

