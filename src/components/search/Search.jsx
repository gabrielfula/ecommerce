import React, { useState } from "react";
import { ButtonSearch, InputSearch } from "./styles";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const changeValue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const Sumbit = (e) => {
    e.preventDefault();

    if (!value) return;

    navigate(`/search?q=${value}`);
    console.log(value);
    setValue("");
  };

  return (
    <form onSubmit={Sumbit}>
      <InputSearch
        type="text"
        placeholder="What are you looking for ?"
        value={value}
        onChange={changeValue}
      />
      <ButtonSearch>
        <RiSearch2Line size={15} />
      </ButtonSearch>
    </form>
  );
}
