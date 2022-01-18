import PetItem from "./PetItem";
import React, { useState } from "react";

export default function PetsList(props) {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const pets = props.pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <section id="doctors" class="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div class="input-group rounded">
                <input
                  onChange={onChangeSearch}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select class="form-select" onChange={onChangeType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}

// &&
// pet.type.includes(type)
