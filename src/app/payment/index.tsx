import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { CARD_SIDE, CreditCard } from "@/components/credit-card";

import { styles } from "./styles";

export function Payment() {
  const cardSide = useSharedValue(CARD_SIDE.front);

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.container}>
          <CreditCard cardSide={cardSide} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
