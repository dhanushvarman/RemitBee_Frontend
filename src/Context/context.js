import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { config } from "../config";

const DataContext = createContext();

const Provider = ({ children }) => {

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const staffMembers = ["X1", "X2", "X3", "X4", "X5", "X6", "X7"];

    const [Schedule, setSchedule] = useState([
        {
            Morning_UpStairs: "",
            Morning_DownStairs: "",
            Morning_ParkingLot: "",
            Lunch_A: "",
            Lunch_B: "",
            Lunch_C: "",
            Lunch_D: "",
            Afternoon_UpStairs: "",
            Afternoon_DownStairs: "",
            Afternoon_ParkingLot: "",
        },
        {
            Morning_UpStairs: "",
            Morning_DownStairs: "",
            Morning_ParkingLot: "",
            Lunch_A: "",
            Lunch_B: "",
            Lunch_C: "",
            Lunch_D: "",
            Afternoon_UpStairs: "",
            Afternoon_DownStairs: "",
            Afternoon_ParkingLot: "",
        },
        {
            Morning_UpStairs: "",
            Morning_DownStairs: "",
            Morning_ParkingLot: "",
            Lunch_A: "",
            Lunch_B: "",
            Lunch_C: "",
            Lunch_D: "",
            Afternoon_UpStairs: "",
            Afternoon_DownStairs: "",
            Afternoon_ParkingLot: "",
        },
        {
            Morning_UpStairs: "",
            Morning_DownStairs: "",
            Morning_ParkingLot: "",
            Lunch_A: "",
            Lunch_B: "",
            Lunch_C: "",
            Lunch_D: "",
            Afternoon_UpStairs: "",
            Afternoon_DownStairs: "",
            Afternoon_ParkingLot: "",
        },
        {
            Morning_UpStairs: "",
            Morning_DownStairs: "",
            Morning_ParkingLot: "",
            Lunch_A: "",
            Lunch_B: "",
            Lunch_C: "",
            Lunch_D: "",
            Afternoon_UpStairs: "",
            Afternoon_DownStairs: "",
            Afternoon_ParkingLot: "",
        }
    ]);

    const [Response, setResponse] = useState();
    const [count,setCount] = useState([]);
    const [Prev,setPrev] = useState(0);
    const [Next,setNext] = useState(0);

    const [change, setChange] = useState('');

    useEffect(()=>{
        async function push(){
            try {
                const result = await axios.get(`${config.api}/schedule`);
                const length = result.data.length;
                setResponse(result.data);
                setSchedule(result.data[length-1].shifts);
                setPrev(length-2);
            } catch (error) {
                console.log(error)
            }
          }

          push();
    },[])

    

    return <DataContext.Provider value={{ Schedule, setSchedule, staffMembers, daysOfWeek,count,setCount,change, setChange,Response, setResponse,Prev,setPrev,Next,setNext }}>
        {children}
    </DataContext.Provider>
};

export const DataState = () => {
    return useContext(DataContext);
};

export default Provider