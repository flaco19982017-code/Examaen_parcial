import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#1DADEB",
  secondary: "#0E5A7A",
  background: "#0D1424",
  white: "#FFFFFF",
  textDark: "#F5F7FA",
  textMedium: "#ebedf1",
  textLight: "#d4d4d4",
  border: "#2C3A4F",
  inputBg: "#1D2A3B",
  danger: "#FF4058",
  dangerBg: "#111827",
  success: "#129c35",
  warning: "#F59E0B",
  shadow: "#00c7f4",
};

export const SIZES = {
  paddingSmall: 8,
  paddingMedium: 16,
  paddingLarge: 24,
  borderRadius: 14,
  fontSmall: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontTitle: 24,
  fabSize: 64,
};



export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.paddingLarge,
  },

  card: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 16,
    padding: SIZES.paddingLarge,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: SIZES.paddingMedium,
  },

  field: {
    marginBottom: SIZES.paddingMedium,
    backgroundColor: "#1A2638",
    padding: 14,
    borderRadius: 12,
  },

  label: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textLight,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },

  value: {
    fontSize: SIZES.fontLarge,
    color: COLORS.white,
    marginTop: 6,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: SIZES.paddingLarge,
    gap: 12,
  },

  editButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  editButtonText: {
    color: COLORS.white,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },

  deleteButton: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: COLORS.danger,
  },

  deleteButtonText: {
    color: COLORS.danger,
    fontSize: SIZES.fontMedium,
    fontWeight: "bold",
  },

  loadingText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
  },
});



export const formStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0D1424",
  },

  scrollContent: {
    paddingBottom: 24,
  },

  header: {
    backgroundColor: "#1D2A3B",
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },

  backContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  backIcon: {
    color: "#FFFFFF",
    fontSize: 34,
    marginRight: 12,
    marginTop: -2,
  },

  headerTitle: {
    color: "#F5F7FA",
    fontSize: 16,
    fontWeight: "bold",
  },

  createSmallButton: {
    backgroundColor: "#123B52",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
  },

  createSmallButtonText: {
    color: "#1DADEB",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },

  subtitle: {
    color: "#64748B",
    fontSize: 13,
    marginTop: -16,
  },

  formBody: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#9AA6B8",
    marginTop: 8,
    marginBottom: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  input: {
    borderWidth: 1,
    borderColor: "#2C3A4F",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    backgroundColor: "#1D2A3B",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1D2A3B",
    borderWidth: 1,
    borderColor: "#2C3A4F",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  inputIcon: {
    color: "#1DADEB",
    fontSize: 22,
    marginRight: 12,
  },

  inputIconMuted: {
    color: "#64748B",
    fontSize: 20,
    marginRight: 12,
  },

  moneyIcon: {
    color: "#00D19A",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 12,
  },

  inputWithIcon: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
    paddingVertical: 14,
  },

  rowInputs: {
    flexDirection: "row",
    gap: 12,
  },

  halfInput: {
    flex: 1,
  },

  rangeText: {
    color: "#64748B",
    fontSize: 11,
    fontStyle: "italic",
    marginTop: -4,
    marginLeft: 8,
  },

  saveButton: {
    backgroundColor: "#1DADEB",
    padding: 17,
    borderRadius: 10,
    marginTop: 34,
    alignItems: "center",
  },

  saveButtonDisabled: {
    backgroundColor: "#64748B",
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelButton: {
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2C3A4F",
    backgroundColor: "transparent",
  },

  cancelButtonText: {
    color: "#9AA6B8",
    fontSize: 15,
  },
  
});

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    backgroundColor: "#1D2A3B",
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLabel: {
    color: COLORS.textMedium,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 2,
  },

  headerSubtitle: {
    color: COLORS.textLight,
    fontSize: 13,
    marginTop: 6,
  },

  counterBox: {
    width: 58,
    height: 58,
    borderRadius: 9,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  counterNumber: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
  },

  counterText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 2,
  },

  searchContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingTop: 14,
  },

  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 13,
    fontSize: SIZES.fontMedium,
    backgroundColor: COLORS.inputBg,
    color: COLORS.white,
  },

  sectionTitle: {
    color: COLORS.textMedium,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 4,
    marginHorizontal: 12,
    marginTop: 22,
    marginBottom: 12,
  },

  list: {
    paddingHorizontal: 8,
    paddingBottom: 130,
  },

  card: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 14,
    padding: 15,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 4,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 11,
    backgroundColor: "#123B52",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  iconText: {
    fontSize: 34,
    color: COLORS.primary,
    marginTop: -3,
  },

  cardInfo: {
    flex: 1,
  },

  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },

  cardDetail: {
    fontSize: 13,
    color: COLORS.textMedium,
    marginTop: 3,
  },

  cardTeacher: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textMedium,
    marginTop: 4,
  },

  categoryBadge: {
    alignSelf: "flex-start",
    marginTop: 7,
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
  },

  categoryBadgeText: {
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  priceContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  priceText: {
    color: COLORS.success,
    fontSize: 17,
    fontWeight: "bold",
  },

  yearText: {
    color: COLORS.textLight,
    fontSize: 11,
    marginTop: 6,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: COLORS.textLight,
    fontSize: SIZES.fontMedium,
  },

  addLabelContainer: {
    position: "absolute",
    right: 105,
    bottom: 56,
    backgroundColor: "#0E5A7A",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },

  addLabelText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "bold",
  },

  dottedLine: {
    position: "absolute",
    right: 78,
    bottom: 58,
    color: COLORS.primary,
    fontSize: 14,
    letterSpacing: 2,
  },

  fab: {
    position: "absolute",
    bottom: 38,
    right: 20,
    width: SIZES.fabSize,
    height: SIZES.fabSize,
    borderRadius: SIZES.fabSize / 2,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
  },

  fabText: {
    color: COLORS.white,
    fontSize: 44,
    fontWeight: "300",
    marginTop: -5,
  },
});