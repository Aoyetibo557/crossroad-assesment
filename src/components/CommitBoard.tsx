import React, {useState, useEffect} from 'react'
import GET_ALL_COMMITS from '../adapters/GetCommits';
import CommitList from './CommitList';
import "./styles.css";


export interface IState {
    id: number,
    name: string,
}


const CommitBoard = () => {
    const [commit, setCommit] = useState<IState[]>([])

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
        {/* <CommitList commit={commit} /> */}

        {commit.map(itm => (
            <p>
                {itm.id}
            </p>
        ))}
    </div>
  )
}

export default CommitBoard