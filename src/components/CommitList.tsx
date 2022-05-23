import React from 'react'
import "./styles.css";
import { IState as IProps} from "./CommitBoard";

interface commitHistory {
    commit: IProps[];
}

const CommitList: React.FC<commitHistory> = ({commit}) => {

  return (
    <div className='commitlist'>
        <table>
            <tr>
                <th>Commit</th>
                <th>Author</th>
                <th>Description</th>
                <th>Date</th>
                <th>URL</th>
            </tr>

            
            {commit?.map(itm => (
                <tr>
                    <td>{itm.author.id}</td>
                    <td>{itm.commit.author.name}</td>
                    <td>{itm.commit.message}</td>
                    <td>{new Date(itm.committer.date).toLocaleString()}</td>
                    <td>{itm.commit.url}</td>
                </tr>
            ))}
            
        </table>
    </div>
  )
}

export default CommitList