import React from "react";
import { useQuery } from "react-query";
import { ActivityIndicator, FlatList, Image, StatusBar, View } from "react-native";
import * as Style from "./styled";
import Card from "../../components/Card";
import PokeApi from "../../services/api";

export default function Home({ navigation }) {
  const { data: pokemonsInfos, isLoading } = useQuery("pokemons", async () => {
    const response = await PokeApi.get("/pokemon?offset=0&limit=100");
    const { results } = response.data;

    const getInfos = await Promise.all(
      results.map(async (item) => {
        const { id, types, name, weight, height, stats, abilities } = await Infos(
          item.url
        );

        return { id, types, name, weight, height, stats, abilities };
      })
    );

    return getInfos;
  });

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

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size={54} color={"#323232"} /></View>
      ) : (
        <FlatList
          data={pokemonsInfos}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card data={item} detail={handleDetails} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Style.Container>
  );
}
