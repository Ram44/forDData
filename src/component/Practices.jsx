// const [email, setemail] = useState("");
// const [password, setpassword] = useState("");
// const[data,setData]=useState([]);//empty arrya
// const FormSubmit=(e)=>{
//   e.preventDefault();
//   const newData={email:email,password:password};
//   setData([...data,newData]);
//   console.log(data)
// }
// // const month =["one","two","three","four"];
// // // const updateMonth=month.splice(1,1,"ram");
// // // console.log(month);
// // const indexOfMonth=month.indexOf("two");
// // if(indexOfMonth!==-1){
// //    //const updateMonth=month.splice(indexOfMonth,1,"ten");
// //    const deleteMonth=month.splice(indexOfMonth,1,);
// //    const deleteMonthall=month.splice(indexOfMonth,Infinity,);//delete all aftet two
// //    console.log(month);
// // }else{
// //   console.log("no such  data  found")
// // }
// const  rawData=[2,3,4,5,6,7,8,9];
// // const squareData=rawData.map((cureentarray,index,array)=>{
// // return cureentarray>5
// // });
// const array1=rawData.map((element,index,array)=>{
// return `ement is ${element} and index ${index} and ${array}`;

// })
// console.log(array1);
// return (
//   <>

//     <form action=""  id="fomrControl" onSubmit={FormSubmit}>
//       <div>
//         <label htmlFor="label">Email</label>

//         <input type="text" name="email" id="email" autoComplete="off" value={email}
//         onChange={(e)=>setemail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="label">Password</label>
//         <input type="Password" name="Password"  id="password" autoComplete="off" value={password}
//           onChange={(e)=>setpassword(e.target.value)}
//         />
//       </div>
//       <button type="submit" id="btn">Submit</button>
//     </form>
//     <div>
//       {
//         data.map((data)=>{
//           return(
//             <div>
//               {/* https://www.java67.com/2019/07/top-5-free-nodejs-courses-for-web-development.html?fbclid=IwAR3JM3HCCRDV1cO0hqOc9-B1V7id4b8gcN6INaNRIfMQrltv6etlsQUDs_8 */}
//             <p key={data.email.toString()}>{data.email}</p>
//             <p key={data.password.toString()}>{data.password}</p>
//             </div>
//           )
//         })
//       }
//     </div>