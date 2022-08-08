import React from "react";
import { FilterSort } from "../Components/FilterSort";
import { MusicRecords } from "./MusicRecords";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <div>
      <HomePageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <MusicRecordsWrapper>
          <MusicRecords />
        </MusicRecordsWrapper>
      </HomePageWrapper>
    </div>
  );
};

const HomePageWrapper = styled.div`
  display: flex;
  height: 100vh; //view height
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 3px solid black;
  margin-right: 80px;
`;

const MusicRecordsWrapper = styled.div`
  width: 100%;
  border: 3px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content)); //fit for every sce
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;
