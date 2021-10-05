import { useEffect, useState } from "react"

const useTeachers = () =>{
    const [teachers, setTeachers] =useState([]);
    useEffect(()=>{
        fetch('/FakeDB.js')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, [])
    return [teachers];
}
export default useTeachers;