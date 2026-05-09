import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";

import { detailStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";

import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

import { useFocusEffect } from "@react-navigation/native";

type Props = ScreenProps<"Detail">;

export default function DetailScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const [gadget, setGadget] = useState<Gadget | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadGadget();
    }, []),
  );

  const loadGadget = async (): Promise<void> => {
    try {
      const data = await gadgetService.getById(id);

      setGadget(data);

      if (data === null) {
        Alert.alert("Error", " no encontrado");

        navigation.goBack();
        return;
      }
    } catch (error) {
      Alert.alert("Error", "No se puede cargar el gadget");

      console.error(error);
    }
  };

  const confirmDelete = (): void => {
    if (gadget === null) return;

    Alert.alert(
      "Eliminar gadget",
      `¿Estás seguro que quieres eliminar "${gadget.name}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: handleDelete,
        },
      ],
    );
  };

  const handleDelete = async (): Promise<void> => {
    if (gadget === null) return;

    try {
      await gadgetService.delete(gadget.id);

      Alert.alert("Exitoso", "eliminado correctamente");

      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se puede eliminar ");

      console.error(error);
    }
  };

  if (gadget === null) {
    return (
      <View style={detailStyles.container}>
        <Text style={detailStyles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.card}>
        <Text style={detailStyles.title}>{gadget.name}</Text>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Marca</Text>

          <Text style={detailStyles.value}>{gadget.brand}</Text>
        </View>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Categoría</Text>

          <Text style={detailStyles.value}>{gadget.category}</Text>
        </View>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Precio</Text>

          <Text style={detailStyles.value}>${gadget.price}</Text>
        </View>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>Año de compra</Text>

          <Text style={detailStyles.value}>{gadget.purchaseYear}</Text>
        </View>

        <View style={detailStyles.buttonContainer}>
          <TouchableOpacity
            style={detailStyles.editButton}
            onPress={() =>
              navigation.navigate("Form", {
                id: gadget.id,
              })
            }
          >
            <Text style={detailStyles.editButtonText}>✏️ Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={detailStyles.deleteButton}
            onPress={confirmDelete}
          >
            <Text style={detailStyles.deleteButtonText}>🗑️ Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
