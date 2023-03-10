import React from 'react'
import {useForm} from 'react-hook-form'

export const StudReg = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"onChange"});

    const submit = (data) =>{
        // alert(JSON.stringify(data));
        console.log(data)
        document.getElementById("mudata").innerHTML=data;
    };

    const validation = {
      name : {required : "The name is required"},
      age : {required : "The age is required",
        min: {
          value:18,
          message:"age must be greater than 18"
        }
      },
      phone : {required : "The phone number is required",
        pattern : {
          value :  /^[6-9]{1}[0-9]{9}$/,
          message : "Phone number is invalid"
        }
      }
    }

    var countries = [
      {
          name: "India",
      },
  
      {
          name: "Uk",
      },
  
      {
          name: "USA",
      },
  
      {
          name: "Canada",
      }
    ]

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
            <label>Name</label>
            <input type="text" name="name" {...register("name",validation.name)}></input>
            {
              errors.name && <span>{errors.name.message}</span>
            }
            </div>

            <div>
            <label>Age</label>
            <input type="text" name="age" {...register("age",validation.age)}></input>
            {
              errors.age && <span>{errors.age.message}</span>
            }
            </div>

            <div>
            <label>Phone</label>
            <input type="text" name="phone" {...register("phone",validation.phone)}></input>
            {
              errors.phone && <span>{errors.phone.message}</span>
            }
            </div>

            <div>
              <label>Gender</label><br></br>
              Male<input type="radio" name="gender" value="Male" {...register("gender")}></input>
              Female<input type="radio" name="gender" value="Female" {...register("gender")}></input>
            </div>

         <div>
          <label>Hobbies: </label><br></br>
          TRAVLEING
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            {...register("hobbies")}
          ></input>
          Reading
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            {...register("hobbies")}
          ></input>
          writing
          <input
            type="checkbox"
            name="hobbies"
            value="writing"
            {...register("hobbies")}
          ></input>
        </div>

        <div>
            <label>Country</label>
            <select name="country" {...register("country")}>
            {
                    countries.map(country =>{
                        return <option value={country.name}>{country.name}</option>
                    })
            }
            </select>
          </div>



            <input type="submit" value="submit"></input>
        </form>
        <div id='mydata'></div>
    </div>
  )
}
