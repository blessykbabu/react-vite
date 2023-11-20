import axios from "axios"
export default function AxiosComponent(){
    axios 
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log("get response:" ,response.data)
    })
    .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)

    })
    const PostData={
        "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }

    }
    axios
    .post('https://jsonplaceholder.typicode.com/users',PostData)
    .then((response)=>{
        console.log("post response:" ,response.data)
    })
    .catch((error)=>{
        console.log("post eror:",error.message? error.message:error)

    });
    return <div>axios</div>

}