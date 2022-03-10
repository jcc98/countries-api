import React from "react";
import styled from "styled-components";

const FilterRegionContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  box-shadow: 0px 0px 11px 0px rgba(109, 109, 109, 0.31);
  padding: 1rem 2rem;
  cursor: default;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;

    &:hover {
      cursor: pointer;
    }
  }

  & li {
    padding: 0.3rem 0.5rem;
  }

  & li:hover {
    background-color: #f5f4f4;
  }
`;

function FilterRegion({ RegionValue }: { RegionValue: any }) {
  return (
    <FilterRegionContainer>
      <ul onClick={(e) => RegionValue(e)}>
        <li>Africa</li>
        <li>Americas</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
        <li>Remove Selection</li>
      </ul>
    </FilterRegionContainer>
  );
}

export default FilterRegion;
