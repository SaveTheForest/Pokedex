import React from "react";

import * as Style from "./styled";
export default function Card({ data, detail }) {
  return (
    <Style.Container
        onPress={()=> detail(data)}
     type={data.types[0].type.name}>
      
      <Style.PokeID type={data.types[0].type.name}>
        {data.id >= 1 && data.id <= 9
          ? "#00" + data.id
          : data.id >= 10 && data.id <= 99
          ? "#0" + data.id
          : "#" + data.id}
      </Style.PokeID>
      <Style.PokeImage
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
      />
      <Style.NameArea type={data.types[0].type.name}>
        <Style.PokeName>{data.name[0].toUpperCase()+data.name.slice(1)}</Style.PokeName>
      </Style.NameArea>
    </Style.Container>
  );
}
