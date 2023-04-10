import React, { useState } from 'react'
import { DataState } from '../Context/context';
import axios from 'axios';
import { config } from '../config';

function Title() {

    const { Response, Schedule, setSchedule, Prev, setPrev, Next, setNext } = DataState();

    const [Loading, setLoading] = useState(false);

    const previous = () => {

        setPrev(prev => prev - 1);

        if (Prev >= 0) {
            setSchedule(Response[Prev].shifts);
            setNext(Prev);
        } else {
            alert("There is no Previous Data")
        }
        console.log(Prev,Next)
    }

    const next = () => {

        setNext(prev => prev + 1)

        console.log(Next);

        if (Next !== (Response.length)) {
            setSchedule(Response[Next].shifts);
            setPrev(Next);
        } else {
            return alert("This is the Final Data")
        }
    }

    const save = async()=>{
        try {
            setLoading(true);
            await axios.post(`${config.api}/upload`,Schedule);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <button className='btn btn-warning btn-sm mt-3' onClick={previous}><i class="fa-solid fa-backward me-2" style={{ color: "white" }}></i>Previous</button>
                    <button className='btn btn-info btn-sm mt-3 ms-3' onClick={next}>Next<i class="fa-solid fa-forward ms-2" style={{ color: "white" }}></i></button>
                </div>
                <div className='col-md-4 heading'>
                    <span>SCHEDULE</span>
                </div>
                <div className='col-md-4 save'>
                    {
                        Loading ?<button class="btn btn-success btn-sm mt-3" type="button" disabled>
                        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Saving...
                      </button>
                        :
                        <button className='btn btn-success btn-sm mt-3' onClick={save}><i class="fa-solid fa-cloud-arrow-up me-2"></i>Save</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Title