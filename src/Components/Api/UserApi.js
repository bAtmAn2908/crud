import axios from 'axios'

export const UserApi = () => {

    

    const getApiData = ()=>{
         axios.get("https://reqres.in/api/users?page=2").then(res=>{
             console.log(res.data.data[0],res.data.data[1].email)
             console.log(res)
        })
         alert("API called")
    }

    const addApiData = ()=>{
        let data = {
            name : "Prajesh",
            job : "Web developer"
        }
        axios.post("https://reqres.in/api/users",data).then(res=>{
            console.log(res.data.data)
        })
    }

    const deleteData = ()=>{
        axios.delete("https://reqres.in/api/users/2").then(res=>{
            if(res.status === 204){
                alert("deleted")
            }
        })
    }

    const updateData = ()=>{

        let updateData = {
            name : "Prajesh",
            job : "Cricketer"
        }

        axios.put("https://reqres.in/api/users/2",updateData).then(res=>{
            console.log(res.data)
        })
    }
  return (
    <div>
        <button onClick={getApiData}>Get Api data</button>
        <button onClick={addApiData}>Add Api data</button>
        <button onClick={deleteData}>Delete Api data</button>
        <button onClick={updateData}>Update Api data</button>
        
    </div>

  )
}
