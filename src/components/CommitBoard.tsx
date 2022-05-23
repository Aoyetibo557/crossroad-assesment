import React, {useState, useEffect} from 'react'
import GET_ALL_COMMITS from '../adapters/GetCommits';
import CommitList from './CommitList';
import "./styles.css";


/* An interface that is used to define the shape of the data that is being fetched from the API. */
export interface IState {
    author:{
        id: number,
        email:string,
        avatar_url:string,
    },
    committer: {
        name: string,
    },
    commit: {
        author: {
            name: string,
            email:string,
            date: string, 
        },
        message: string,
        url: string, 
    }
}


const CommitBoard = () => {
    const [commit, setCommit] = useState<IState[]>([])

/* A hook that is used to fetch data from an API. */
    useEffect(() => {
        try{
           GET_ALL_COMMITS("aoyetibo557").then(data => {
               setCommit(data)
           })
           
        }catch(err){
            console.log(err, "error from inside use effect")
        }
    }, [])
  return (
    //   BEM naming convention
    <div className='commitboard'>
        <CommitList commit={commit} />
    </div>
  )
}

export default CommitBoard