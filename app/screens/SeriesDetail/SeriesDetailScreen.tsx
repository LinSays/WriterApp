import React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text } from "components";
import { Colors, Font } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./SeriesDetailScreen.navigationOptions";
import styles from "./SeriesDetailScreen.styles";
import imagePath from "../../constant/imagePath";

const SeriesDetailScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();

  const genres = [
    { genre: "Comedy" },
    { genre: "Sci-Fi" },
    { genre: "Crime" },
    { genre: "Action" },
  ];
  const dreamcasts = [
    { castName: "Keanu Reeves", realName: "John Wick", avatar: "avatar3" },
    { castName: "Laetitia Casta", realName: "Laetitia Casta", avatar: "avatar2" },
    { castName: "Keanu Reeves", realName: "John Wick", avatar: "avatar3" },
    { castName: "Laetitia Casta", realName: "Laetitia Casta", avatar: "avatar2" },
    { castName: "Keanu Reeves", realName: "John Wick", avatar: "avatar3" },
    { castName: "Laetitia Casta", realName: "Laetitia Casta", avatar: "avatar2" },
  ];
  const tags = [
    { tag: "Comedy" },
    { tag: "Cops" },
    { tag: "Thriller" },
    { tag: "Fantasy" },
    { tag: "Action" },
    { tag: "Romance" },
  ];

  const smiliarMovies = [
    { title: "John Wick1", thumb: "similar1" },
    { title: "John Wick2", thumb: "similar2" },
    { title: "Speed", thumb: "similar3" },
    { title: "Professional", thumb: "similar1" },
    { title: "Speed", thumb: "similar3" },
    { title: "Professional", thumb: "similar1" },
  ];
  return (
    <ScrollView style={{ backgroundColor: Colors.GradTop }}>
      <Image source={imagesPath["seriesThumb"]} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <MaterialIcons name="arrow-back" color={Colors.white} size={20} />
          </TouchableOpacity>
          <View style={styles.rightActions}>
            <TouchableOpacity onPress={() => navigator.openEditSeries()}>
              <Icon
                name="Edit_white"
                width="20"
                height="20"
                fill="none"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="upload" size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.movieTitle}>
          <View>
            <Text.Primary
              style={{
                fontSize: Font.FontSize.TagTitle + 2,
                lineHeight: Font.FontLineHeight.TagTitle,
                textAlignVertical: "center",
              }}
            >
              {"John Wick Series"}
            </Text.Primary>
            <Text.Tertiary>{"5 seasons, 30 episodes"}</Text.Tertiary>
          </View>

          <TouchableOpacity onPress={() => navigator.openSeriesPlay()}>
            <LinearGradient
              style={styles.screenPlay}
              colors={[Colors.GradLeft, Colors.GradRight]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 0.0 }}
            >
              <Icon name="File" width={96} height={96} fill="none" style={{ top: 13, left: 13 }} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Logline"}</Text.TagTitle>
            <Text.Tertiary>
              {
                "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
              }
            </Text.Tertiary>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Tagline"}</Text.TagTitle>
            <Text.Tertiary>{"Don't Hunt What You Can't Kill."}</Text.Tertiary>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Writer"}</Text.TagTitle>
            <View style={styles.writers}>
              <View style={styles.writer}>
                <Image
                  source={imagePath["avatar"]}
                  style={{ width: 24, height: 24, borderRadius: 12 }}
                />
                <Text.Secondary
                  style={{ lineHeight: Font.FontLineHeight.Tertiary, marginHorizontal: 8 }}
                >
                  {"Julia Ellei"}
                </Text.Secondary>
              </View>
            </View>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Synopsis"}</Text.TagTitle>
            <Text.Tertiary>
              {
                "John runs through New York as time runs out on his 'grace period'. He tuns into an alley and sees the Tick-Tock Man, one of the Bowery King's spies. He gets into a taxi, but the roads are gridlocked.... Show More."
              }
            </Text.Tertiary>
            <Text.Tertiary style={{ color: Colors.blue }}>{"Show more"}</Text.Tertiary>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Genres"}</Text.TagTitle>
            <ScrollView style={styles.genres} horizontal={true}>
              {genres.map((genre, index) => (
                <View style={styles.genre} key={index}>
                  <Text.Primary
                    style={{ lineHeight: Font.FontLineHeight.Tertiary, marginHorizontal: 8 }}
                  >
                    {genre.genre}
                  </Text.Primary>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Dream Cast"}</Text.TagTitle>
            <ScrollView style={styles.casts} horizontal={true}>
              {dreamcasts.map((dreamcast, index) => (
                <View style={styles.cast} key={index}>
                  <Image
                    source={imagePath[dreamcast.avatar]}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                  />
                  <Text.Primary style={{ textAlign: "center", marginTop: 10 }}>
                    {dreamcast.castName}
                  </Text.Primary>
                  <Text.Primary style={styles.castName}>{dreamcast.realName}</Text.Primary>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.contentItem}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>{"Tags"}</Text.TagTitle>
            <ScrollView style={styles.genres} horizontal={true}>
              {tags.map((tag, index) => (
                <View style={styles.genre} key={index}>
                  <Text.Primary
                    style={{ lineHeight: Font.FontLineHeight.Tertiary, marginHorizontal: 8 }}
                  >
                    {tag.tag}
                  </Text.Primary>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={[styles.contentItem, { marginBottom: 20 }]}>
            <Text.TagTitle style={{ fontSize: 22, marginBottom: 8 }}>
              {"Similar Movies"}
            </Text.TagTitle>
            <ScrollView style={styles.casts} horizontal={true}>
              {smiliarMovies.map((similarMovie, index) => (
                <View style={[styles.cast, { marginTop: 6 }]} key={index}>
                  <Image
                    source={imagePath[similarMovie.thumb]}
                    style={{ width: 80, height: 100, borderRadius: 16 }}
                  />
                  <Text.Primary style={{ textAlign: "center", marginTop: 10 }}>
                    {similarMovie.title}
                  </Text.Primary>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

SeriesDetailScreen.navigationOptions = navigationOptions();

export default SeriesDetailScreen;
