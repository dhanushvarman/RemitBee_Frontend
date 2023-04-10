import React, { useEffect, useState } from 'react'
import { DataState } from './Context/context'
import axios from 'axios';

function Load() {

  const { Schedule,setCount,change} = DataState();
  const [Value, setValue] = useState([]);
  const [Total, setTotal] = useState();

  useEffect(()=>{

    setCount([]);

    var array = [];

    for (var obj of Schedule) {

      const arr = Object.values(obj);
      let value = {
        X1:0,
        X2:0,
        X3:0,
        X4:0,
        X5:0,
        X6:0,
        X7:0,
      };
  
      for (const num of arr) {
        value[num] = value[num] ? value[num] + 1 : 1;
      }
      array.push(value); 
    }
    setValue(array);

  },[change]);

  useEffect(()=>{

    var total = {};

    for (var arr of Value){
      for(var keys in arr){
        total[keys] = Value.reduce((curr,acc)=>{
          return curr = curr + (acc[keys] == undefined ? 0 : acc[keys])
        },0)
      }
    }

    setTotal(total)

  },[Value])

  return (
    <div className='container mt-4'>
            <table class="table table-striped table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">Staff Member</th>
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">X1</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X1 == undefined ? 0 : Value[index].X1}</td>
                            })
                        }
                        <th scope="row">{Total?.X1}</th>
                    </tr>
                    <tr>
                        <th scope="row">X2</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X2 == undefined ? 0 : Value[index].X2}</td>
                            })
                        }
                        <th scope="row">{Total?.X2}</th>
                    </tr>
                    <tr>
                        <th scope="row">X3</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X3 == undefined ? 0 : Value[index].X3}</td>
                            })
                        }
                        <th scope="row">{Total?.X3}</th>
                    </tr>
                    <tr>
                        <th scope="row">X4</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X4 == undefined ? 0 : Value[index].X4}</td>
                            })
                        }
                        <th scope="row">{Total?.X4}</th>
                    </tr>
                    <tr>
                        <th scope="row">X5</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X5 == undefined ? 0 : Value[index].X5}</td>
                            })
                        }
                        <th scope="row">{Total?.X5}</th>
                    </tr>
                    <tr>
                        <th scope="row">X6</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X6 == undefined ? 0 : Value[index].X6}</td>
                            })
                        }
                        <th scope="row">{Total?.X6}</th>
                    </tr>
                    <tr>
                        <th scope="row">X7</th>
                        {
                            new Array(5).fill(null).map((_,index)=>{
                                return <td key={index}>{Value[index]?.X7 == undefined ? 0 : Value[index].X7}</td>
                            })
                        }
                        <th scope="row">{Total?.X7}</th>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default Load