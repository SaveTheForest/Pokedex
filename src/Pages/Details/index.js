import React from "react";
import { TouchableOpacity, StatusBar, Text, View, Image } from "react-native";
import * as Style from "./styled";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import theme from "../../theme/theme";


export default function Details({ navigation, route }) {
  const goBackIcon = <Ionicons name="arrow-back" size={32} color="#FFF" />;

  return (
    <Style.Container type={route.params.types[0].type.name}>
      <StatusBar />

      <Style.Header>
        <TouchableOpacity //componentizar esse botão de voltar
          onPress={() => navigation.goBack()}
        >
          {goBackIcon}
        </TouchableOpacity>
        <Style.PokeName>
          {route.params.name[0].toUpperCase() + route.params.name.slice(1)}
        </Style.PokeName>
        <Style.PokeID>
          {route.params.id >= 1 && route.params.id <= 9
            ? "#00" + route.params.id
            : route.params.id >= 10 && route.params.id <= 99
            ? "#0" + route.params.id
            : "#" + route.params.id}
        </Style.PokeID>
      </Style.Header>

      <Style.ImageView>
        <Image
          style={{ opacity: 0.5, position: "absolute", bottom: 10 }}
          source={require("../../assets/images/pokeball.png")}
        />
        <Style.PokeImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.id}.png`,
          }}
        />
        
      </Style.ImageView>
      <Style.Details>
        <Style.LineType>
          {route.params.types.map((item) => (
            <Style.ViewType key={item.id} type={item.type.name}>
              <Style.TypeText>
                {item.type.name[0].toUpperCase() + item.type.name.slice(1)}
              </Style.TypeText>
            </Style.ViewType>
          ))}
        </Style.LineType>

        <Style.About type={route.params.types[0].type.name}>About</Style.About>

        <Style.InfoAbouts>
          <Style.InfoWeight>
            <View style={{ flexDirection: "row" }}>
              {
                <MaterialCommunityIcons
                  name="scale-bathroom"
                  size={24}
                  color="#000"
                />
              }
              <Text>{"  " + route.params.weight / 10 + " kg"}</Text>
            </View>
            <Style.TextAboutsInfo>Weight</Style.TextAboutsInfo>
          </Style.InfoWeight>
          <Style.InfoWeight>
            <View style={{ flexDirection: "row" }}>
              {<FontAwesome5 name="ruler-vertical" size={24} color="#000" />}
              <Text>{"  " + route.params.height / 10 + " m"}</Text>
            </View>
            <Style.TextAboutsInfo>Height</Style.TextAboutsInfo>
          </Style.InfoWeight>

          <Style.InfoMoves>
            {route.params.abilities.map((item) => (
              <Text>
                {item.ability.name[0].toUpperCase() +
                  item.ability.name.slice(1)}{" "}
              </Text>
            ))}
            <Style.TextAboutsInfo>Moves</Style.TextAboutsInfo>
          </Style.InfoMoves>
        </Style.InfoAbouts>
        <Style.About type={route.params.types[0].type.name}>
          Base Stats
        </Style.About>
        <Style.BaseStatsView>
          <Style.StatsName type={route.params.types[0].type.name}>
            HP{"\n"}ATK{"\n"}DEF{"\n"}SATK{"\n"}SDEF{"\n"}SPD
          </Style.StatsName>
          <Style.Line />
          <Text >
          
          {route.params.stats.map((item) => (
              <Text>
             {item.base_stat < 100 ?"    0"+item.base_stat:"    "+item.base_stat}{"\n"}
                  
              </Text>
            ))
            
            }
            
          </Text>
          <View style={{flexDirection:'column'}}>
            

           
        {route.params.stats.map((item) => (
             

             <View key={item.stat.name} style={{marginLeft:15,paddingTop:13}}> 

               <Style.ProgressBar
               
            color={theme.colors.colorTypes[route.params.types[0].type.name]}
            progress={item.base_stat/200} width={260}
          height={5}
            borderWidth={0}

           
            
            />
          </View>
            
            ) )
            
            }
             
            </View>
          
           
        </Style.BaseStatsView>
        
           
      </Style.Details>
    </Style.Container>
  );
}
