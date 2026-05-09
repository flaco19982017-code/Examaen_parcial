import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

import { listStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";

import { useCallback, useState } from "react";

import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

import { useFocusEffect } from "@react-navigation/native";

type Props = ScreenProps<"List">;

export const ListScreen = ({ navigation }: Props) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);


  const [loading, setLoading] = useState<boolean>(false);


  const [searchText, setSearchText] = useState<string>("");

 
  useFocusEffect(
    useCallback(() => {
      loadGadgets();
    }, []),
  );

  const loadGadgets = async (): Promise<void> => {
    try {
      setLoading(true);

      const data = await gadgetService.getAll();

      setGadgets(data);
    } catch (error) {
      Alert.alert("Error", "No se pueden cargar los gadgets");

      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const filteredGadgets = gadgets.filter(
    (gadget) =>
      gadget.name.toLowerCase().includes(searchText.toLowerCase()) ||
      gadget.brand.toLowerCase().includes(searchText.toLowerCase()),
  );

  const getIconColor = (category: string) => {
    const lowerCategory = category.toLowerCase();

    if (lowerCategory.includes("phone")) {
      return "#A855F7";
    }

    if (lowerCategory.includes("tablet") || lowerCategory.includes("ipad")) {
      return "#F59E0B";
    }

    return "#1DADEB";
  };

  const getIconBackground = (category: string) => {
    const lowerCategory = category.toLowerCase();

    if (lowerCategory.includes("phone")) {
      return "#332352";
    }

    if (lowerCategory.includes("tablet") || lowerCategory.includes("ipad")) {
      return "#3D3219";
    }

    return "#123B52";
  };

  const getCategoryBackground = (category: string) => {
    const lowerCategory = category.toLowerCase();

    if (lowerCategory.includes("phone")) {
      return "#3A2567";
    }

    if (lowerCategory.includes("tablet") || lowerCategory.includes("ipad")) {
      return "#5B4219";
    }

    return "#0E5A7A";
  };

  return (
    <View style={listStyles.container}>
      <View style={listStyles.header}>
        <View>
          <Text style={listStyles.headerLabel}>Inventario de Gadget </Text>

          <Text style={listStyles.headerTitle}>Mis Gadget de articulo </Text>

          
        </View>

        <View style={listStyles.counterBox}>
          <Text style={listStyles.counterNumber}>{gadgets.length}</Text>

          <Text style={listStyles.counterText}>NUMERO</Text>
        </View>
      </View>

      {/* Search bar */}
      <View style={listStyles.searchContainer}>
        <TextInput
          style={listStyles.searchInput}
          placeholder="🔍 Buscar gadget..."
          placeholderTextColor="#ffffff"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <Text style={listStyles.sectionTitle}>LISTADO</Text>

      <FlatList
        data={filteredGadgets}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.list}
        ListEmptyComponent={
          <Text style={listStyles.emptyText}>
            {loading
              ? "Cargando..."
              : searchText
                ? "No se encontraron gadgets"
                : "Todavía no hay gadgets"}
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={listStyles.card}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          >
            <View style={listStyles.cardContent}>
              <View
                style={[
                  listStyles.iconBox,
                  {
                    backgroundColor: getIconBackground(item.category),
                  },
                ]}
              >
                <Text
                  style={[
                    listStyles.iconText,
                    {
                      color: getIconColor(item.category),
                    },
                  ]}
                >
                  ▭
                </Text>
              </View>

              <View style={listStyles.cardInfo}>
                <Text style={listStyles.cardName}>{item.name}</Text>

                <Text style={listStyles.cardDetail}>{item.brand}</Text>

                <View
                  style={[
                    listStyles.categoryBadge,
                    {
                      backgroundColor: getCategoryBackground(item.category),
                    },
                  ]}
                >
                  <Text
                    style={[
                      listStyles.categoryBadgeText,
                      {
                        color: getIconColor(item.category),
                      },
                    ]}
                  >
                    {item.category}
                  </Text>
                </View>
              </View>

              <View style={listStyles.priceContainer}>
                <Text style={listStyles.priceText}>${item.price}</Text>

                <Text style={listStyles.yearText}>{item.purchaseYear}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={listStyles.addLabelContainer}>
        <Text style={listStyles.addLabelText}>rEGISTRO DE NUEVOS GADGET </Text>
      </View>

      <Text style={listStyles.dottedLine}>---</Text>

   
      <TouchableOpacity
        style={listStyles.fab}
        onPress={() => navigation.navigate("Form", {})}
      >
        <Text style={listStyles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
