import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'selling' | 'buying';
};

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'New Offer Received',
    message: 'Someone made an offer on your Gucci bag',
    time: '2 minutes ago',
    read: false,
    type: 'selling',
  },
  {
    id: '2',
    title: 'Price Drop Alert',
    message: 'A Louis Vuitton item on your wishlist is now 20% off',
    time: '1 hour ago',
    read: false,
    type: 'buying',
  },
  {
    id: '3',
    title: 'Order Confirmed',
    message: 'Your purchase has been confirmed and will ship soon',
    time: '3 hours ago',
    read: true,
    type: 'buying',
  },
  {
    id: '4',
    title: 'New Collection',
    message: 'Check out the latest arrivals from top luxury brands',
    time: '1 day ago',
    read: true,
    type: 'buying',
  },
];

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState<'selling' | 'buying'>('selling');

  const filteredNotifications = SAMPLE_NOTIFICATIONS.filter(
    (notification) => notification.type === activeTab
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Stay updated with your activity</Text>
        
        <View style={styles.tabContainer}>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === 'selling' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('selling')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'selling' && styles.activeTabText,
              ]}>
              Selling (3)
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              activeTab === 'buying' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('buying')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'buying' && styles.activeTabText,
              ]}>
              Buying (3)
            </Text>
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.notificationList}>
        {filteredNotifications.map((notification) => (
          <View
            key={notification.id}
            style={[
              styles.notificationItem,
              notification.read && styles.readNotification,
            ]}>
            {!notification.read && <View style={styles.unreadDot} />}
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>
                {notification.message}
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </View>
        ))}
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
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTabButton: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#666666',
  },
  activeTabText: {
    color: '#000000',
  },
  notificationList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#ffffff',
  },
  readNotification: {
    backgroundColor: '#fafafa',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  notificationMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  notificationTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#999999',
  },
});