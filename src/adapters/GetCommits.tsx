

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