import React from "react";

const ProfileDataRow = ({ profile }) => {
  // DO NOT DELETE the data-cy attributes. Removing them may result in less evaluation marks

  return (
    <>
      {profile.map((item) => {
        return (
           <tr data-cy={`profile-wrapper-${profile.id}`} key={item.id}>
            <td data-cy="profile-id">{item.id}.</td>
            <td data-cy="profile-image">
              <img src={item.profile_pic} alt="" />
            </td>
            <td data-cy="profile-first-name">{item.first_name}</td>
            <td data-cy="profile-last-name">{item.last_name}</td>
            <td data-cy="profile-email">{item.email}</td>
            <td data-cy="profile-gender">{item.gender}</td>
            <td data-cy="profile-country">{item.country}</td>
          </tr>
        );
      })}
    </>
  );
};

export default ProfileDataRow;
