import React, { useEffect, useState } from "react";

import * as Style from "./styled";

import Card from "../../components/Card";
import PokeApi from "../../services/api";
import { FlatList, Image, StatusBar } from "react-native";

export default function Home({ navigation }) {
  const [pokemonsInfos, setPokemonsInfos] = useState([]);

  const handleDetails = (item) => {
    navigation.navigate("Details", {
      id: item.id,
      name: item.name,
      height: item.height,
      types: item.types,
      weight: item.weight,
      stats: item.stats,
      abilities: item.abilities,
    });
  };

  useEffect(() => {
    async function pokeLoad() {
      const response = await PokeApi.get("/pokemon?offset=0&limit=299");
      const { results } = response.data;

      const getInfos = await Promise.all(
        results.map(async (item) => {
          const { id, types, name, weight, height, stats, abilities } =
            await Infos(item.url);

          return { id, types, name, weight, height, stats, abilities };
        })
      );

      setPokemonsInfos(getInfos);
    }

    pokeLoad();
  }, []);
  async function Infos(url) {
    const response = await PokeApi.get(url);
    const { id, types, name, weight, height, stats, abilities } = response.data;

    return {
      id,
      types,
      name,
      weight,
      height,
      stats,
      abilities,
    };
  }
  return (
    <Style.Container>
      <StatusBar />
      <Style.Header>
        <Image
          style={{ width: 44, height: 44 }}
          source={require("../../assets/images/pokemon.png")}
        />
        <Style.LogoName>Pokédex</Style.LogoName>
      </Style.Header>

      <FlatList
        data={pokemonsInfos}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: pokemonsInfos }) => (
          <Card data={pokemonsInfos} detail={handleDetails} />
        )}
      />
    </Style.Container>
  );
}
