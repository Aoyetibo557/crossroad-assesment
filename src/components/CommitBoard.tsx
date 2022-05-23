import React, {useState, useEffect} from 'react'
import GET_ALL_COMMITS from '../adapters/GetCommits';
import CommitList from './CommitList';
import Footer from './Footer';
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

const USER_PROFILE ="aoyetibo557";


const CommitBoard = () => {
    const [commit, setCommit] = useState<IState[]>([])

/* A hook that is used to fetch data from an API. */
    useEffect(() => {
        try{
           /* A promise that is used to fetch data from an API. */
           GET_ALL_COMMITS(USER_PROFILE).then(data => {
               setCommit(data)
           }).catch(error => {
               alert(` ${error.message}. An error occured while retrieveing commit data from`)
               console.log(error.message, "An error Occured while getting the commits")
           })
           
        }catch(err){
            console.log(err, "error from inside use effect")
        }
    }, [])
  return (
    //   BEM naming convention
    <div className='commitboard'>
        <CommitList commit={commit} />
        <Footer />
    </div>
  )
}

export default CommitBoard