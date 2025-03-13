import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FEATURED_ITEMS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=870&auto=format&fit=crop',
    brand: 'Gucci',
    name: 'Leather Shoulder Bag',
    price: 2800
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=774&auto=format&fit=crop',
    brand: 'Louis Vuitton',
    name: 'Monogram Wallet',
    price: 950
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=774&auto=format&fit=crop',
    brand: 'Hermès',
    name: 'Silk Scarf',
    price: 450
  }
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>Label Source</Text>
          <Text style={styles.subtitle}>Luxury Marketplace</Text>
        </View>

        <Text style={styles.sectionTitle}>Featured Items</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}>
          {FEATURED_ITEMS.map((item) => (
            <Pressable key={item.id} style={styles.featuredItem}>
              <Image source={{ uri: item.image }} style={styles.featuredImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toLocaleString()}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <View style={styles.grid}>
          {FEATURED_ITEMS.map((item) => (
            <Pressable key={item.id} style={styles.gridItem}>
              <Image source={{ uri: item.image }} style={styles.gridImage} />
              <View style={styles.gridItemInfo}>
                <Text style={styles.gridBrand}>{item.brand}</Text>
                <Text style={styles.gridItemName}>{item.name}</Text>
                <Text style={styles.gridPrice}>${item.price.toLocaleString()}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  logo: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Playfair-Regular',
    fontSize: 24,
    color: '#000000',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  featuredContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  featuredItem: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featuredImage: {
    width: '100%',
    height: 320,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  itemInfo: {
    padding: 16,
  },
  brand: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#000000',
  },
  itemName: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  price: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000000',
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 16,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  gridImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  gridItemInfo: {
    padding: 12,
  },
  gridBrand: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#000000',
  },
  gridItemName: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  gridPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#000000',
    marginTop: 6,
  },
});