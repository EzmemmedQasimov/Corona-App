import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import Card from "./Card";
import {API_TOKEN, API_URL} from "../const";

const CoronaForCountry = () => {

    const [data,setData] = useState([]);
    const [queryText,setQueryText] = useState("");
    const [loading,setLoading] = useState(true);

    const fetchData = async ()=>{
        setLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(() => {
        fetchData()
    }, [queryText])
    return (
        <>
            <div className="mb-4">
                <input value={queryText} onChange={(e) => {
                    setQueryText(e.target.value)
                }}
                       placeholder="Search ..."
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"/>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {loading && <p>Loading ...</p>}
                {data.map((data) => {
                    return (
                        <Card key={data.country} country={data.country} totalDeaths={data.totalDeaths}
                              totalCase={data.totalCases} totalRecovered={data.totalRecovered}/>
                    )
                })}
            </div>
        </>
    )
}


export default CoronaForCountry