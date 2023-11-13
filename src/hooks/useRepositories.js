//import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";


const useRepositories = () => {
    const {data={}, error, loading, refetch} = useQuery(GET_REPOSITORIES)
    const {repositories = null} = data

    if(error) console.log(error)
    // const [repositories, setRepositories] = useState(null)

// const myIp = "192.168.1.185"

// const fetchRepositories = async () => {
    //     const response = await globalThis.fetch(`http://${myIp}:5000/api/repositories`)
    //     const json =  await response.json()
    //     setRepositories(json)
    // }
    
    // useEffect(()=>{
        //     fetchRepositories()
        // },[])
        
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []
    //console.log(repositoryNodes)
        
    return {repositories: repositoryNodes, loading, refetch}
}

export default useRepositories