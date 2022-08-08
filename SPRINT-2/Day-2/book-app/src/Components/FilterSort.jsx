import React, {useState,useEffect} from 'react'
// import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import {useDispatch} from "react-redux";

export const FilterSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialGenreParams = searchParams.getAll("genre");
    const urlSort = searchParams.getAll("sort");
    const [category, setCategory] = useState(initialGenreParams || []);
    const [sortBy, setSortBy] = useState(urlSort || "");

    const handleCheckbox = (e) => {
        let option = e.target.value;
        let newCategory = [...category];

        if (category.includes(option)) {  //If already present, remove it
          newCategory.splice(newCategory.indexOf(option), 1);  // remove 1 elemet from index --> option
        } 

        else {  //add to array
          newCategory.push(option);
        }
        setCategory(newCategory);
  };
  console.log('category:', category);

  const handleSort = (e) => {
    setSortBy(e.target.value)
  }

  useEffect(() => {
    if(category || sortBy) {
       const params = {};
       category && (params.genre = category);
       sortBy && (params.sortBy = sortBy) 

        setSearchParams({genre: category, sortBy: sortBy})
    }
  },[category, setSearchParams,sortBy]);
    

  return (
    <div>
        <h3>Filter</h3>
        <div>
        <div>
          <input
            type="checkbox"
            value="K-Pop"
            defaultChecked={category.includes("K-Pop")}
            onChange={handleCheckbox}
          />
          <label>K-Pop</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Country"
            defaultChecked={category.includes("Country")}
            onChange={handleCheckbox}
          />
          <label>Country</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Pop"
            defaultChecked={category.includes("Pop")}
            onChange={handleCheckbox}
          />
          <label>Pop</label>
        </div>

        <div>
          <input
            type="checkbox"
            value="Holiday"
            defaultChecked={category.includes("Holiday")}
            onChange={handleCheckbox}
          />
          <label>Holiday</label>
        </div>

       
        <div>
          <input
            type="checkbox"
            value="Heavy Metal"
            defaultChecked={category.includes("Heavy Metal")}
            onChange={handleCheckbox}
          />
          <label>Heavy Metal</label>
        </div>
      </div>


        <h3>Sort</h3>
        <div  onChange={handleSort} >
        <input type="radio" value='asc' name="sortBy" defaultChecked={sortBy === "asc"} /> Ascending
        <input type="radio" value='desc' name="sortBy" defaultChecked={sortBy === "desc"} /> Decending
      </div>
    </div>
  )
}
