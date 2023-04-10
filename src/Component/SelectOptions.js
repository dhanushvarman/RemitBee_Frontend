import React, { useEffect, useState } from 'react';
import { DataState } from '../Context/context';

function SelectOptions({dayIndex,timePeriod,value}) {

    const {staffMembers,Schedule,change, setChange} = DataState();

    const handleStaffSelection = (value)=>{
        Schedule[dayIndex][timePeriod] = staffMembers[value-1];
        setChange(Math.random());
    };

    return (
        <select class="form-select form-select-sm" style={{width:"100px"}} aria-label="Default select example" 
        onChange={(e)=>handleStaffSelection(e.target.selectedIndex)} value={value}>
            <option>-</option>
            {
                staffMembers.map((value)=>{
                    return <option key={value} value={value}>{value}</option>
                })
            }
        </select>
    )
}

export default SelectOptions