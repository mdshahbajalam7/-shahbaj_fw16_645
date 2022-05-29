import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataget } from "../components/action";
import styles from "../pages/data.module.css";
import { getdatareq } from "../reduxs/action";
import Githubuserdisplay from "./Githubuserdisplay";

function Displaydata() {
  const [githubuser, setgithubuser] = useState("");

  const { githubrupo,isloading } = useSelector((state) => state.reducerdata);
  const { username, token, profiledata } = useSelector(
  (state) => state.reducergetdata);
  const dispatch = useDispatch();

  useEffect(() => {
    if(token.token){
      getdataget(dispatch, token.token, username);  
    }
    
  }, [ token, username]);


  const handlegithubuser = () => {
    getdatareq(dispatch, githubuser);
  };

  return (
    <>
        <div className={styles.displaydata}>
          <h1>Profile</h1>
          <div>
            <h3>Name: {profiledata.name} </h3>
            <h3>Email: {profiledata.email} </h3>
            <h3>UserName: {profiledata.username}</h3>
            <h3>Mobile Number: {profiledata.mobile}</h3>
            <h3>Discription: {profiledata.description}</h3>
          </div>
        </div>
      <div>
        <div className={styles.git}>
          <h1>Search Github user</h1>
          <input
            type="search"
            name="search"
            className={styles.usersearchinp}
            placeholder="Search user Name"
            value={githubuser}
            onChange={(e) => setgithubuser(e.target.value)}
          />
          <button onClick={handlegithubuser} className={styles.search}>
            Search
          </button>
          {isloading ? (
            <h1>Loadding..........</h1>
          ) : (
            <div>
              {githubrupo.map((elem) => (
                <Githubuserdisplay key={elem.id} {...elem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Displaydata;
