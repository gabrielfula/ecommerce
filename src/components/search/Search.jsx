import React, { useEffect, useState } from "react";
import { ButtonSearch, InputSearch } from "./styles";
import { RiSearch2Line } from "react-icons/ri";
import api from "../../service/api";

export default function Search() {
  const [value, setValue] = useState();

  const changeValue = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const Sumbit = () => {
    console.log(value, "- esse é o valor");
  };

  useEffect(() => {
    api.get(`/search?q=${value}`);
  }, []);

  return (
    <>
      <InputSearch
        type="text"
        placeholder="What are you looking for ?"
        value={value}
        onChange={changeValue}
      />
      <ButtonSearch onClick={Sumbit}>
        <RiSearch2Line size={15} />
      </ButtonSearch>
    </>
  );
}
