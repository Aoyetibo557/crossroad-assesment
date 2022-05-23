import React, {useState} from 'react'
import "./styles.css";
import { IState as IProps} from "./CommitBoard";

/* A type definition for the props that will be passed into the component. */
interface commitHistory {
    commit: IProps[];
}

const CommitList: React.FC<commitHistory> = ({commit}) => {
    const [searchinput, setSearchInput] = useState("");
    
    /**
     * Return the filtered commits, and map over them to create a table row for each commit.
     * @returns The filtered commits are being returned.
     */
    const filteredCommits = () => {
        return commit.filter(com => com.commit.message.toLocaleLowerCase().includes(searchinput) ).map((itm, idx) => (
            <tr key={idx}>
                <td>
                    <img className='commitlist__img' src={itm.author.avatar_url} alt="Profile" />
                </td>
                <td><span> {itm.author.id}</span></td>
                <td><span> {itm.commit.author.name}</span></td>
                <td><span> {itm.commit.author.email} </span></td>
                <td><span> {itm.commit.message}</span></td>
                <td><span> {new Date(itm.commit.author.date).toLocaleDateString()}</span></td>
                <td>
                    <span><a href={itm.commit.url} rel="noreferrer" target="_blank">View JSON Tree</a></span>
                </td>
            </tr>
        ))
    }

  return (
    <div className='commitlist'>
        <div className='commitlist__topdiv'>
            <div>
                <h4>Welcome back, Anuoluwapo!</h4>
                <p>You currently have {commit?.length} commits for this repository</p>
            </div>

            <input 
                className='commitlist__topdiv__input' 
                type="text" 
                placeholder='Search commit Messages only' 
                value={searchinput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>


        <table>
           <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Committer__id</th>
                    <th>Author</th>
                    <th>Author Email</th>
                    <th>Description / Message</th>
                    <th>Date</th>
                    <th>URL</th>
                </tr>
           </thead>

            <tbody>
               {/* Calling the filteredCommits function and returning the filtered commits. */}
                {filteredCommits()}
            </tbody>
            
        </table>
    </div>
  )
}

export default CommitList