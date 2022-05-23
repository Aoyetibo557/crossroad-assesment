import React from 'react'
import "./styles.css";
import { IState as IProps} from "./CommitBoard";

interface commitHistory {
    commit: IProps[];
}

const CommitList: React.FC<commitHistory> = ({commit}) => {

  return (
    <div className='commitlist'>
        <div className='commitlist__topdiv'>
            <h4>Welcome back, Anuoluwapo!</h4>
            <p>You currently have {commit?.length} commits for this repository</p>
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
                
                {commit?.map((itm, idx) => (
                    <tr key={idx}>
                        <td>
                            <img className='commitlist__img' src={itm.author.avatar_url} alt="Profile" />
                        </td>
                        <td>{itm.author.id}</td>
                        <td>{itm.commit.author.name}</td>
                        <td>{itm.commit.author.email}</td>
                        <td>{itm.commit.message}</td>
                        <td>{new Date(itm.commit.author.date).toLocaleDateString()}</td>
                        <td>
                            <a href={itm.commit.url} rel="noreferrer" target="_blank">View JSON Tree</a>
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
  )
}

export default CommitList