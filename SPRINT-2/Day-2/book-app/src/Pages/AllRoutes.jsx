import React from 'react';
import {Routes, Route} from "react-router-dom";
import { EditMusicRecord } from './EditMusicRecord';
import { HomePage } from './HomePage';
import { Login } from './Login';
import { MusicRecords } from './MusicRecords';
import { SingleMusicRecord } from './SingleMusicRecord';

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music/:id" element={<SingleMusicRecord />} />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
    </div>
  )
}
