import React, { useEffect } from "react";
import ProfileDataRow from "../Components/ProfileDataRow";
import {useSelector, useDispatch} from "react-redux"
import { getDataError, getDataRequest, getDataSuccess } from "../Redux/action";
import axios from "axios";

const Homepage = () => {

  const userData = useSelector((state) => state.profileData)
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getDataRequest());
    axios.get("http://localhost:8080/profile")
    .then((res) => dispatch(getDataSuccess(res.data)))
    .catch((err) => dispatch(getDataError(err)))
  }

  useEffect(() => {
    if(userData?.length === 0)
    {
      getData();
    }
  }, []);
  console.log('userData:', userData)


  return (
    <div>
      <table style={{ margin: "auto" }}>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          <ProfileDataRow profile={userData} />
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
