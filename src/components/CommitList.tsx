import React from 'react'
import "./styles.css";
import { IState as IProps} from "./CommitBoard";


const CommitList: React.FC<IProps> = () => {


    
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
        </table>

        {/* {commit.map((item, idx) => (
            <div>
                {}
            </div>
        ))} */}
    </div>
  )
}

export default CommitList