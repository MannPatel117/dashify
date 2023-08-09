import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async registeruser(email:any, data: any){
    localStorage.setItem(String(email), JSON.stringify(data))
    return true;
  }

  async loginUser(email:any, data:any){
    const user = await this.fetchUser(String(email)); 
    if(user==null)
    {
      alert("User Does Not Exist");
    }
    else
    {
      console.log(user);
      if(data.password == user.password)
      {
        console.log("SUCCESS")
      }
      else
      {
        console.log("REGRET");
      }
    }
    
  }

  async fetchUser(email: string){
    const userInfo=localStorage.getItem(email);
    let userData= JSON.parse(userInfo);
    return userData;
  }
}
