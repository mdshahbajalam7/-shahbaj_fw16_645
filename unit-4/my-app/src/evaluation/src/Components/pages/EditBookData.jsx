// import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const [updateData,setupdateData]=useState({})
  const handleUpdate = (e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    setupdateData()
  };

  const upadtedata = async()=>{
    let res = await fetch (`http://localhost:8080/books/${"id"}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify()
    })
  }

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
