import React, { useState, useEffect } from "react";
import "./App.css";
import { getDataTerrorists } from "./api";
import SearchInput from "./NavigationSearch";


export default function LoadData() {
    const [complaints, setComplaints] = useState([]);
    const [terrorists, setTerrorist] = useState([]);

    useEffect(() => {
        getDataTerrorists().then(setTerrorist)
    }, [])

    useEffect(() => {
        getDataTerrorists().then(setComplaints)
    }, [])

    const searchUserInput = (e) => {
        setTerrorist(terrorists.filter(terrorist => terrorist.city.includes(e.target.value) || terrorist.country.includes(e.target.value)))
    }

    const searchUserBtn1 = (e) => {
        
        setTerrorist(terrorists.filter(terrorist => terrorist.iyear > e.target.value))
    }

     const searchUserBtn2 = (e) => {
        
        setTerrorist(terrorists.filter(terrorist => terrorist.iyear < e.target.value))
    }

     const searchUserBtn3 = (e) => {
        
        setTerrorist(setComplaints=(terrorists))
    }


    return (
        <div className="Archive">
            <SearchInput input1={searchUserInput} input2={searchUserInput} input3={searchUserBtn1} btn1={searchUserBtn3}></SearchInput>
            <table className="ArchiveTable">
                <thead>
                    <tr>
                        <th>eventid</th>
                        <th>iyear</th>
                        <th>country_txt</th>
                        <th>region_txt</th>
                        <th>city</th>
                        <th>summary</th>
                        <th>attacktype1_txt</th>
                        <th>targsubtype1_txt</th>
                        <th>corp1</th>
                        <th>target1</th>
                        <th>motive</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints &&
                        complaints.map((parsedData, index) => (
                            <tr key={index}>
                                <td>{parsedData[0]}</td>
                                <td className="bg-amber-200">{parsedData[1]}</td>
                                <td>{parsedData[2]}</td>
                                <td className="bg-amber-200">{parsedData[3]}</td>
                                <td>{parsedData[4]}</td>
                                <td className="bg-amber-200">{parsedData[5]}</td>
                                <td>{parsedData[6]}</td>
                                <td className="bg-amber-200">{parsedData[7]}</td>
                                <td>{parsedData[8]}</td>
                                <td className="bg-amber-200">{parsedData[9]}</td>
                                <td>{parsedData[10]}</td>

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

