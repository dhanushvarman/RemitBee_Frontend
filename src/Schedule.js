import React, { useEffect } from 'react'
import SelectOptions from './Component/SelectOptions'
import { DataState } from './Context/context'

function Schedule() {

    const {Schedule,setChange} = DataState();

    useEffect(()=>{
        setChange(Math.random());
    },[Schedule])

    return (
        <div className='container mt-4'>
            <table class="table table-striped table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Morning UpStairs</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Morning_UpStairs"} dayIndex={index} value={Schedule[index].Morning_UpStairs}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Morning Down Stairs</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Morning_DownStairs"} dayIndex={index} value={Schedule[index].Morning_DownStairs}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Morning Parking Lot </th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Morning_ParkingLot"} dayIndex={index} value={Schedule[index].Morning_ParkingLot}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Lunch A</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Lunch_A"} dayIndex={index} value={Schedule[index].Lunch_A}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Lunch B</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Lunch_B"} dayIndex={index} value={Schedule[index].Lunch_B}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Lunch C</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Lunch_C"} dayIndex={index} value={Schedule[index].Lunch_C}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Lunch D</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Lunch_D"} dayIndex={index} value={Schedule[index].Lunch_D}/></td>
                            })
                        }
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Afternoon Up Stairs</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Afternoon_UpStairs"} dayIndex={index} value={Schedule[index].Afternoon_UpStairs}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Afternoon Down Stairs</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Afternoon_DownStairs"} dayIndex={index} value={Schedule[index].Afternoon_DownStairs}/></td>
                            })
                        }
                    </tr>
                    <tr>
                        <th scope="row">Afternoon Parking Lot</th>
                        {
                            new Array(5).fill(null).map((value,index)=>{
                                return <td key={index}><SelectOptions timePeriod={"Afternoon_ParkingLot"} dayIndex={index} value={Schedule[index].Afternoon_ParkingLot}/></td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Schedule