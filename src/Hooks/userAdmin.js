import { useEffect, useState } from "react"


const useAdmin=(email)=>{
  const [isAdmin, setIsAdmin]=useState(false);
  const [loadingAdmin, setLoadingAdmin]=useState(true)
  useEffect(()=>{
    if(email){
      fetch(`https://doctors-portal-server-beta.vercel.app/admin/${email}`)
      .then(res=>res.json())
      .then(data=>{
  
        setIsAdmin(data.isAdmin);
        setLoadingAdmin(false)
      })
    }
  },[email]);

  return [isAdmin, loadingAdmin]


}
export default useAdmin;
