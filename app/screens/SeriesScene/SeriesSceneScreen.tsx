import React from "react";
import { ScrollView, View, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { vw, vh } from "react-native-css-vh-vw";
import { GradientCircularProgress } from "react-native-circular-gradient-progress";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Icon, Text, Input, Button } from "components";
import { Colors, Font } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./SeriesSceneScreen.navigationOptions";
import styles from "./SeriesSceneScreen.styles";
import imagePath from "../../constant/imagePath";

const SeriesSceneScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  const deviceWidth = Dimensions.get("window").width;

  const [modalRemoveHero, setModalRemoveHero] = React.useState(false);
  const [modalHero, setModalHero] = React.useState(false);
  const [modalNewActor, setModalNewActor] = React.useState(false);
  const [modalDelActor, setModalDelActor] = React.useState(false);
  const [modalConfirmSave, setModalConfirmSave] = React.useState(false);

  const heros = [
    {
      name: "John Wick",
      actorName: "Keanu Reeves",
      desc: "Ex killer, suffering after his daughter dies.",
      avatar: "avatar3",
      active: true,
    },
    {
      name: "Jessica Jones",
      actorName: "Laetitia Casta",
      desc: "Ex killer’s wife, suffering after his daughter dies.",
      avatar: "avatar2",
      active: false,
    },
    {
      name: "Elizabet Watson",
      actorName: "Margot Robbie",
      desc: "Ex killer’s wife, suffering after his daughter dies.",
      avatar: "avatar4",
      active: false,
    },
  ];

  const saveScene = () => {
    setModalConfirmSave(false);
    navigator.goBack();
  };
  return (
    <View style={{ backgroundColor: Colors.GradTop, height: vh(100) }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalConfirmSave(true)}>
            <MaterialIcons name="arrow-back" color={Colors.blue} size={20} />
          </TouchableOpacity>
          <View style={styles.headerTextGroup}>
            <Text.Header>{"Scene 1"}</Text.Header>
          </View>
        </View>
        <View style={styles.info}>
          <Feather name="info" size={20} color={Colors.white} style={{ marginRight: 10 }} />
          <Text.Tertiary style={{ flex: 1 }}>
            {
              "In this scene, it is recommended to reveal the world of the protagonist. Show his friends, love, creativity, hobbies and smoothly move to tragedy."
            }
          </Text.Tertiary>
        </View>
        <Input value={""} placeholder={"Scene Title"} />
        <TextInput
          value={
            "Watch Molly's Game yesterday, good movie, just a little too long for me Kevin Costner was excellent, as per usual."
          }
          placeholder={"Enter your text here"}
          placeholderTextColor={Colors.white1}
          style={{
            height: 120,
            backgroundColor: Colors.inputBack,
            padding: 16,
            borderRadius: 8,
            textAlignVertical: "top",
            color: Colors.white,
            lineHeight: 24,
          }}
          numberOfLines={3}
          multiline={true}
        />
        <View style={styles.avatarGroup}>
          <TouchableOpacity style={styles.circleBtn} onPress={() => setModalHero(true)}>
            <MaterialCommunityIcons
              name="plus"
              size={24}
              color={Colors.blue}
              style={{ textAlign: "center", paddingVertical: 12 }}
            />
          </TouchableOpacity>
          <View style={styles.avatar}>
            <Image
              source={imagePath["avatar3"]}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
            <TouchableOpacity
              onPress={() => setModalRemoveHero(true)}
              style={{ position: "absolute", top: -2, right: -2 }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "rgba(255, 69, 58, 1)",
                  padding: 2,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="ios-close" size={16} color={Colors.white} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.avatar}>
            <Image
              source={imagePath["avatar2"]}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
            <TouchableOpacity
              onPress={() => setModalRemoveHero(true)}
              style={{ position: "absolute", top: -2, right: -2 }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "rgba(255, 69, 58, 1)",
                  padding: 2,
                  borderRadius: 10,
                }}
              >
                <Ionicons name="ios-close" size={16} color={Colors.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 50, marginHorizontal: 16, width: "100%" }}>
          <Button.Primary
            onPress={() => navigator.goBack()}
            textType={"Primary"}
            style={{ alignItems: "center", height: 48 }}
          >
            <Text.TagTitle style={{ fontWeight: "700", marginTop: -4 }}>
              {"Save Scene"}
            </Text.TagTitle>
          </Button.Primary>
        </View>
      </View>

      {/* RemoveHero Modal */}
      <Modal
        isVisible={modalRemoveHero}
        swipeDirection="down"
        onSwipeComplete={() => setModalRemoveHero(false)}
        onBackdropPress={() => setModalRemoveHero(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0 }}
      >
        <View
          style={[
            styles.modalContainer,
            {
              height: 180,
              paddingVertical: 24,
              alignItems: "flex-start",
              marginHorizontal: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              bottom: 0,
              position: "absolute",
            },
          ]}
        >
          <View style={{ marginBottom: 25, display: "flex", flexDirection: "row" }}>
            <Icon name="Detach" width={24} height={24} fill="none" color={Colors.white} />
            <Text.ParagraphTitle style={{ marginLeft: 5, textAlignVertical: "top" }}>
              {"Detach Current Hero?"}
            </Text.ParagraphTitle>
          </View>
          <Text.Tertiary style={{ marginBottom: 24 }}>
            {"Do you really want to delete “current Hero“?"}
          </Text.Tertiary>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignContent: "space-between",
            }}
          >
            <View style={{ width: (vw(100) - 64) / 2 - 8, marginRight: 16 }}>
              <Button.Primary
                onPress={() => setModalRemoveHero(false)}
                textType={"Primary"}
                style={{ alignItems: "center", height: 40, paddingVertical: 12 }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Detach"}</Text.Primary>
              </Button.Primary>
            </View>

            <View style={{ width: (vw(100) - 64) / 2 - 8 }}>
              <Button.Black
                onPress={() => setModalRemoveHero(false)}
                textType={"Primary"}
                style={{
                  alignItems: "center",
                  height: 40,
                  paddingVertical: 12,
                  borderWidth: 0,
                  backgroundColor: Colors.btnBack,
                }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Cancel"}</Text.Primary>
              </Button.Black>
            </View>
          </View>
        </View>
      </Modal>

      {/* SaveScene Modal */}
      <Modal
        isVisible={modalConfirmSave}
        swipeDirection="down"
        onSwipeComplete={() => setModalConfirmSave(false)}
        onBackdropPress={() => setModalConfirmSave(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0 }}
      >
        <View
          style={[
            styles.modalContainer,
            {
              paddingVertical: 24,
              alignItems: "flex-start",
              marginHorizontal: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              bottom: 0,
              position: "absolute",
            },
          ]}
        >
          <View style={{ marginBottom: 25, display: "flex", flexDirection: "row" }}>
            <Ionicons name="warning" size={24} fill="none" color={Colors.white} />
            <Text.ParagraphTitle style={{ marginLeft: 5, textAlignVertical: "top" }}>
              {"Save Scene?"}
            </Text.ParagraphTitle>
          </View>
          <Text.Tertiary style={{ marginBottom: 24 }}>
            {"Do you want to save the data before exiting the scene editor? "}
          </Text.Tertiary>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignContent: "space-between",
            }}
          >
            <View style={{ width: (vw(100) - 64) / 2 - 8, marginRight: 16 }}>
              <Button.Primary
                onPress={() => saveScene()}
                textType={"Primary"}
                style={{ alignItems: "center", height: 40, paddingVertical: 12 }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Save"}</Text.Primary>
              </Button.Primary>
            </View>

            <View style={{ width: (vw(100) - 64) / 2 - 8 }}>
              <Button.Black
                onPress={() => setModalConfirmSave(false)}
                textType={"Primary"}
                style={{
                  alignItems: "center",
                  height: 40,
                  paddingVertical: 12,
                  borderWidth: 0,
                  backgroundColor: Colors.btnBack,
                }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Cancel"}</Text.Primary>
              </Button.Black>
            </View>
          </View>
        </View>
      </Modal>

      {/* dreamcast Modal */}
      <Modal
        isVisible={modalHero}
        onBackdropPress={() => setModalHero(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0, marginBottom: 0, justifyContent: "flex-end" }}
      >
        <View style={[styles.modalContainer, { height: vh(100) - 50, paddingBottom: 40 }]}>
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: Colors.white,
              opacity: 0.3,
              marginTop: 8,
              marginBottom: 18,
            }}
          ></View>

          <TouchableOpacity style={styles.modalBackBtn} onPress={() => setModalHero(false)}>
            <AntDesign name="close" size={20} color={Colors.blue} />
          </TouchableOpacity>

          <Text.ModalTitle style={{ marginBottom: 25 }}>{"Dream Cast"}</Text.ModalTitle>

          <TouchableOpacity style={styles.modalAddBtn} onPress={() => setModalNewActor(true)}>
            <AntDesign name="plus" size={20} color={Colors.blue} />
          </TouchableOpacity>
          <ScrollView>
            <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
              <ScrollView horizontal={true}>
                <View style={[styles.castInfo, { flex: 1 }]}>
                  <Image
                    source={imagePath["avatar3"]}
                    style={{ width: 64, height: 64, borderRadius: 32, marginRight: 16 }}
                  />
                  <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Text.ParagraphTitle style={{ marginBottom: 8, fontWeight: "700" }}>
                      {"Keano Reeves"}
                    </Text.ParagraphTitle>
                    <Text.Tertiary>{"Actor: John Wick"}</Text.Tertiary>
                    <Text.Tertiary style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      {"Ex killer, suffering after his daughter dies."}
                    </Text.Tertiary>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
                  <TouchableOpacity onPress={() => setModalNewActor(true)}>
                    <View style={styles.editCastBtn}>
                      <Icon name="Edit_white" width="24" height="24" fill="none" />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalDelActor(true)}>
                    <View style={[styles.editCastBtn, { backgroundColor: "rgba(255, 69, 58, 1)" }]}>
                      <Feather name="trash-2" size={24} color={Colors.white} />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
              <ScrollView horizontal={true}>
                <View style={[styles.castInfo, { flex: 1 }]}>
                  <Image
                    source={imagePath["avatar2"]}
                    style={{ width: 64, height: 64, borderRadius: 32, marginRight: 16 }}
                  />
                  <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Text.ParagraphTitle style={{ marginBottom: 8, fontWeight: "700" }}>
                      {"Jessica Jones"}
                    </Text.ParagraphTitle>
                    <Text.Tertiary>{"Actor: Laetitia Casta"}</Text.Tertiary>
                    <Text.Tertiary style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      {"Ex killer’s wife, suffering after his daughter dies."}
                    </Text.Tertiary>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
                  <TouchableOpacity onPress={() => setModalNewActor(true)}>
                    <View style={styles.editCastBtn}>
                      <Icon name="Edit_white" width="24" height="24" fill="none" />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalDelActor(true)}>
                    <View style={[styles.editCastBtn, { backgroundColor: "rgba(255, 69, 58, 1)" }]}>
                      <Feather name="trash-2" size={24} color={Colors.white} />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
              <ScrollView horizontal={true}>
                <View
                  style={[
                    styles.castInfo,
                    {
                      flex: 1,
                      backgroundColor: Colors.transparent,
                      borderColor: Colors.btnBack,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Image
                    source={imagePath["avatar4"]}
                    style={{ width: 64, height: 64, borderRadius: 32, marginRight: 16 }}
                  />
                  <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Text.ParagraphTitle style={{ marginBottom: 8, fontWeight: "700" }}>
                      {"Elizabet Watson"}
                    </Text.ParagraphTitle>
                    <Text.Tertiary>{"Actor: Margot Robbie"}</Text.Tertiary>
                    <Text.Tertiary style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      {"Ex killer’s wife, suffering after his daughter dies."}
                    </Text.Tertiary>
                  </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
                  <TouchableOpacity onPress={() => setModalNewActor(true)}>
                    <View style={styles.editCastBtn}>
                      <Icon name="Edit_white" width="24" height="24" fill="none" />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setModalDelActor(true)}>
                    <View style={[styles.editCastBtn, { backgroundColor: "rgba(255, 69, 58, 1)" }]}>
                      <Feather name="trash-2" size={24} color={Colors.white} />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
          <Button.Primary
            onPress={() => setModalHero(false)}
            textType={"Primary"}
            style={{ alignItems: "center" }}
          >
            <Text.TagTitle>{"Attach Selected"}</Text.TagTitle>
          </Button.Primary>
        </View>
      </Modal>
      {/* newActor Modal */}
      <Modal
        isVisible={modalNewActor}
        swipeDirection="down"
        onSwipeComplete={() => setModalNewActor(false)}
        onBackdropPress={() => setModalNewActor(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0, marginBottom: 0, justifyContent: "flex-end" }}
      >
        <View style={[styles.modalContainer, { height: vh(100) - 50, paddingBottom: 40 }]}>
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: Colors.white,
              opacity: 0.3,
              marginTop: 8,
              marginBottom: 18,
            }}
          ></View>

          <TouchableOpacity style={styles.modalBackBtn} onPress={() => setModalNewActor(false)}>
            <Ionicons name="arrow-back" size={20} color={Colors.blue} />
          </TouchableOpacity>

          <Text.ModalTitle style={{ marginBottom: 25 }}>{"Create a New Hero"}</Text.ModalTitle>
          <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
            <View style={{ flex: 1 }}>
              <Input value={""} placeholder={"Hero's Name"} />
            </View>
          </View>
          <View style={{ height: vh(90) - 220 }}>
            <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
              <View style={{ flex: 1, marginRight: 16 }}>
                <Input value={""} placeholder={"Actor's Name"} />
              </View>
              <TouchableOpacity
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: Colors.btnBack,
                  padding: 10,
                }}
              >
                <Icon name="User" width={96} height={96} fill={"none"} />
              </TouchableOpacity>
            </View>

            <View style={[styles.catBtnContainer, { display: "flex", flexDirection: "row" }]}>
              <TextInput
                value=""
                placeholder={"Ex killer, suffering after his daughter dies."}
                placeholderTextColor={Colors.white1}
                style={{
                  height: 160,
                  backgroundColor: Colors.inputBack,
                  padding: 16,
                  borderRadius: 8,
                  textAlignVertical: "top",
                  width: "100%",
                }}
                numberOfLines={3}
                multiline={true}
              />
            </View>
          </View>

          <Button.Primary
            onPress={() => setModalNewActor(false)}
            textType={"Primary"}
            style={{ alignItems: "center" }}
          >
            <Text.TagTitle>{"Create"}</Text.TagTitle>
          </Button.Primary>
        </View>
      </Modal>

      {/* delActor Modal */}
      <Modal
        isVisible={modalDelActor}
        swipeDirection="down"
        onSwipeComplete={() => setModalDelActor(false)}
        onBackdropPress={() => setModalDelActor(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0, marginBottom: 0 }}
      >
        <View
          style={[
            styles.modalContainer,
            {
              height: 180,
              paddingVertical: 24,
              alignItems: "flex-start",
              marginHorizontal: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            },
          ]}
        >
          <Text.ModalTitle style={{ marginBottom: 25, textAlign: "left" }}>
            <Feather name="trash-2" size={24} color={Colors.white} style={{ letterSpacing: 10 }} />
            {"Delete an Actor?"}
          </Text.ModalTitle>
          <Text.Tertiary style={{ marginBottom: 24 }}>
            {"Do you really want to delete “Actor_Name”?"}
          </Text.Tertiary>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignContent: "space-between",
            }}
          >
            <View style={{ width: (vw(100) - 64) / 2 - 8, marginRight: 16 }}>
              <Button.Primary
                onPress={() => setModalDelActor(false)}
                textType={"Primary"}
                style={{ alignItems: "center", height: 40, paddingVertical: 12 }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Delete"}</Text.Primary>
              </Button.Primary>
            </View>

            <View style={{ width: (vw(100) - 64) / 2 - 8 }}>
              <Button.Black
                onPress={() => setModalDelActor(false)}
                textType={"Primary"}
                style={{
                  alignItems: "center",
                  height: 40,
                  paddingVertical: 12,
                  borderWidth: 0,
                  backgroundColor: Colors.btnBack,
                }}
              >
                <Text.Primary style={{ marginTop: -4 }}>{"Cancel"}</Text.Primary>
              </Button.Black>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

SeriesSceneScreen.navigationOptions = navigationOptions();

export default SeriesSceneScreen;
