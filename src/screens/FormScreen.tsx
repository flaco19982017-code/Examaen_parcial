import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { formStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";

import { NewGadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"Form">;

export const FormScreen = ({ route, navigation }: Props) => {

  const id = route.params?.id;

  const isEditMode: boolean = id !== undefined;


  const [form, setForm] = useState<NewGadget>({
    name: "",
    brand: "",
    category: "",
    price: undefined,
    purchaseYear: undefined,
  });

  const [saving, setSaving] = useState<boolean>(false);

  // Load gadget if edit mode
  useEffect(() => {
    if (isEditMode && id !== undefined) {
      loadGadget(id);
    }
  }, [id]);

  const loadGadget = async (gadgetId: number): Promise<void> => {
    try {
      const gadget = await gadgetService.getById(gadgetId);

      if (gadget === null) {
        Alert.alert("Error", "Gadget no encontrado");

        navigation.goBack();
        return;
      }

      setForm({
        name: gadget.name,
        brand: gadget.brand,
        category: gadget.category,
        price: gadget.price,
        purchaseYear: gadget.purchaseYear,
      });
    } catch (error) {
      Alert.alert("Error", "No se puede cargar el gadget");

      console.error(error);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    if (key === "price" || key === "purchaseYear") {
      const cleanValue = value.replace(",", ".");

      setForm({
        ...form,
        [key]: cleanValue === "" ? undefined : Number(cleanValue),
      });

      return;
    }

    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSave = async (): Promise<void> => {
    // VALIDATIONS

    if (
      form.name.trim() === "" ||
      form.brand.trim() === "" ||
      form.category.trim() === ""
    ) {
      Alert.alert("Campos incompletos", "Todos los campos son obligatorios");

      return;
    }

    if (!form.price || isNaN(form.price) || form.price <= 0) {
      Alert.alert("Precio inválido", "El precio debe ser mayor a 0");

      return;
    }

    if (
      !form.purchaseYear ||
      isNaN(form.purchaseYear) ||
      form.purchaseYear < 2000 ||
      form.purchaseYear > 2026
    ) {
      Alert.alert("Año inválido", "Ingrese un año entre 2000 y 2026");

      return;
    }

    try {
      setSaving(true);

      if (isEditMode && id !== undefined) {
        await gadgetService.update(id, form);
      } else {
        await gadgetService.create(form);
      }

      Alert.alert(
        "Exitoso",
        isEditMode
          ? "Gadget actualizado correctamente"
          : "Gadget creado correctamente",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ],
      );
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el gadget");

      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        style={formStyles.container}
        contentContainerStyle={formStyles.scrollContent}
      >
        <View style={formStyles.header}>
          <View style={formStyles.headerTop}>
            <TouchableOpacity
              style={formStyles.backContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={formStyles.backIcon}>‹</Text>

              <Text style={formStyles.headerTitle}>
                {isEditMode ? "Edit Gadget" : "New Gadget"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={formStyles.createSmallButton}
              onPress={handleSave}
              disabled={saving}
            >
              <Text style={formStyles.createSmallButtonText}>
                {isEditMode ? "UPDATE" : "CREATE"}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={formStyles.title}>
            {isEditMode ? "Edit inventory" : "Add to inventory"}
          </Text>

          <Text style={formStyles.subtitle}>
            registro de articulos tecnologicos
          </Text>
        </View>

        <View style={formStyles.formBody}>
          <Text style={formStyles.label}>Nombre de articulo *</Text>

          <View style={formStyles.inputIconContainer}>
            <Text style={formStyles.inputIcon}>○</Text>

            <TextInput
              style={formStyles.inputWithIcon}
              value={form.name}
              onChangeText={(value) => handleInputChange("name", value)}
              placeholder="samsung galaxy a15 plus"
              placeholderTextColor="#64748B"
              maxLength={60}
            />
          </View>

          <Text style={formStyles.label}>Marca *</Text>

          <View style={formStyles.inputIconContainer}>
            <Text style={formStyles.inputIconMuted}>□</Text>

            <TextInput
              style={formStyles.inputWithIcon}
              value={form.brand}
              onChangeText={(value) => handleInputChange("brand", value)}
              placeholder="Samsung"
              placeholderTextColor="#64748B"
              maxLength={40}
            />
          </View>

          <Text style={formStyles.label}>Categoría *</Text>

          <View style={formStyles.inputIconContainer}>
            <Text style={formStyles.inputIconMuted}>□</Text>

            <TextInput
              style={formStyles.inputWithIcon}
              value={form.category}
              onChangeText={(value) => handleInputChange("category", value)}
              placeholder="Celular, laptop, tablet, etc"
              placeholderTextColor="#64748B"
              maxLength={40}
            />
          </View>

          <View style={formStyles.rowInputs}>
            <View style={formStyles.halfInput}>
              <Text style={formStyles.label}>Precio *</Text>

              <View style={formStyles.inputIconContainer}>
                <Text style={formStyles.moneyIcon}>$</Text>

                <TextInput
                  style={formStyles.inputWithIcon}
                  value={form.price !== undefined ? form.price.toString() : ""}
                  onChangeText={(value) => handleInputChange("price", value)}
                  keyboardType="numeric"
                  placeholder="500"
                  placeholderTextColor="#64748B"
                />
              </View>
            </View>

            <View style={formStyles.halfInput}>
              <Text style={formStyles.label}>Year *</Text>

              <TextInput
                style={formStyles.input}
                value={
                  form.purchaseYear !== undefined
                    ? form.purchaseYear.toString()
                    : ""
                }
                onChangeText={(value) =>
                  handleInputChange("purchaseYear", value)
                }
                keyboardType="numeric"
                placeholder="2026"
                placeholderTextColor="#64748B"
              />

              <Text style={formStyles.rangeText}>Range: 2000-2026</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              formStyles.saveButton,
              saving && formStyles.saveButtonDisabled,
            ]}
            onPress={handleSave}
            disabled={saving}
          >
            <Text style={formStyles.saveButtonText}>
              {saving
                ? "Guardando..."
                : isEditMode
                  ? "ACTUALIZAR Articulo"
                  : "GUARDAR Articulo"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={formStyles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={formStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
