import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { ButtonStyle } from "../../../../components/Button/ButtonStyle";

export const BusModal = ({
  title,
  visible,
  data,
  setShowModal,
  handleSelect,
}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSelect(item)}
    >
      <Text style={styles.listItemTitle}>
        {item.marca} {item.modelo}
      </Text>
      <Text style={styles.listItemSubtitle}>Placa: {item.placa}</Text>
      <Text style={styles.listItemSubtitle}>Tipo: {item.tipo_bus}</Text>
      <Text style={styles.listItemSubtitle}>Estado: {item.estado}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{title}</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_bus}
          />
          <ButtonStyle onClick={setShowModal} text={"Cancelar"} variant={2} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  listItemSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
