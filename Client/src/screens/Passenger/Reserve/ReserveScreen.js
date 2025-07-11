import { View, StyleSheet } from "react-native";
//components
import { GenericContainer } from "../../../components/GenericContainer";
import { InformativeTitle } from "../../../components/InformativeTitle";
import { TripSearchForm } from "./components/TripSearchForm";
import { BlobBg } from "../../../components/Background/BlobBg";

export default function ReserveScreen({ navigation }) {
  return (
    <GenericContainer>
      <BlobBg />
      <InformativeTitle
        title={"Seleccione un origen y destino"}
        description={"Encuentra los mejores viajes"}
      />

      <View style={styles.form}>
        <TripSearchForm navigation={navigation} />
      </View>
    </GenericContainer>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 15,
  },
});
