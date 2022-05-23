
// export default function formatDate = (date:) => {
//      `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
//         date.getSeconds(),
//     ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`
// }



/**
 * It takes a user name as a parameter and returns a promise that resolves to an array of commits.
 * </code>
 * @param {string} user - string
 */
export default async function GET_ALL_COMMITS(user: string) {
    // const URL = `https://api.github.com/users/${user}/repos`
   try{
        const URL = `https://api.github.com/repos/${user}/crossroad-assesment/commits`    
        const response = await fetch(URL);
        const data = await response.json();
        if(response.ok) {
            console.log(data)
            return data
        }else{
            return
        }
   }catch(error) {
       return Promise.reject(error)
   }
}