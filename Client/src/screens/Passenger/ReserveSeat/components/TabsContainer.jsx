import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { formatTime, formatDate } from "../../../../utils/dateTime.util";

const TabsContainer = ({
  passengers = [],
  travelDetails = {},
  reserve = false,
  Reserva = [],
}) => {
  const [activeTab, setActiveTab] = useState("detalles");
  const dateObject = formatDate(travelDetails[0].fecha_salida);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "detalles" && styles.activeTab]}
          onPress={() => setActiveTab("detalles")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "detalles" && styles.activeTabText,
            ]}
          >
            Detalles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "pasajeros" && styles.activeTab]}
          onPress={() => setActiveTab("pasajeros")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "pasajeros" && styles.activeTabText,
            ]}
          >
            Pasajeros
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "detalles" ? (
        <>
          {reserve && (
            <>
              <View style={styles.detailItem}>
                <View style={styles.iconWrapper}>
                  <Icon name="calendar-outline" style={styles.icon} />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.detailTitle}>Fecha de reserva</Text>
                  <Text style={styles.detailContent}>
                    {Reserva.formatedDate}
                  </Text>
                </View>
              </View>

              <View style={styles.detailItem}>
                <View style={styles.iconWrapper}>
                  <Icon name="checkmark-circle-outline" style={styles.icon} />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.detailTitle}>Estado de reserva</Text>
                  <Text style={styles.detailContent}>{Reserva.estado}</Text>
                </View>
              </View>
            </>
          )}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <View style={styles.iconWrapper}>
                <Icon name="location-outline" style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.detailTitle}>Origen y destino</Text>
                <Text style={styles.detailContent}>
                  {travelDetails[0].ruta.origen} -{" "}
                  {travelDetails[0].ruta.destino}
                </Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={styles.iconWrapper}>
                <Icon name="calendar-outline" style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.detailTitle}>Horario de viaje</Text>
                <Text style={styles.detailContent}>
                  {dateObject.formatedDate}
                  {"     "}
                  {travelDetails[0].hora_salida_programada.slice(0, 5)} -{" "}
                  {formatTime(
                    travelDetails[0].hora_salida_programada,
                    travelDetails[0].ruta.tiempo_estimado
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={styles.iconWrapper}>
                <Icon name="business-outline" style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.detailTitle}>Agencia</Text>
                <Text style={styles.detailContent}>
                  {travelDetails[0].bus.agencia.nombre_agencia}
                </Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={styles.iconWrapper}>
                <Icon name="bus-outline" style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.detailTitle}>Asientos</Text>
                <Text style={styles.detailContent}>
                  {travelDetails[0].bus.tipo_bus}
                </Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <View style={styles.iconWrapper}>
                <Icon name="pricetag-outline" style={styles.icon} />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.detailTitle}>Precio por pasaje</Text>
                <Text style={styles.detailContent}>
                  Bs. {travelDetails[0].costo}
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.passengersContainer}>
          <Text style={styles.sectionHeader}>Pasajeros</Text>
          {passengers.passengers.map((passenger, index) => (
            <View key={index} style={styles.passengerCard}>
              <View style={styles.passengerHeader}>
                <Text style={styles.passengerName}>
                  {passenger.firstName} {passenger.lastName}
                </Text>
                <Text style={styles.seatLabel}>Asiento {passenger.seat.numero}</Text>
              </View>
              <Text style={styles.passengerDetail}>
                CI: {passenger.identityNumber}
              </Text>
              <Text style={styles.passengerDetail}>
                Fecha Nacimiento: {passenger.birthDate}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default TabsContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 370,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4B2EC2",
    marginBottom: -1,
  },
  tabText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#4B2EC2",
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 0,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconWrapper: {
    backgroundColor: "#F0F3FF",
    borderRadius: 12,
    padding: 10,
    marginRight: 15,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#4B2EC2",
    fontSize: 24,
  },
  textWrapper: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 15,
    color: "#000",
    fontWeight: 500,
    marginBottom: 2,
  },
  detailContent: {
    fontSize: 13,
    color: "#666",
  },
  passengersContainer: {
    padding: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  passengerCard: {
    backgroundColor: "#F7F8FF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E6E8FF",
  },
  passengerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  passengerName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  seatLabel: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  passengerDetail: {
    fontSize: 13,
    color: "#555",
    marginBottom: 3,
  },
});
