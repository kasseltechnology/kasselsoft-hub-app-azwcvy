
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactScreen() {
  console.log('ContactScreen: Rendering contact screen');
  const colorScheme = useColorScheme();
  const { t } = useLanguage();
  const isDark = colorScheme === 'dark';

  const handleCall = (phone: string) => {
    console.log('ContactScreen: User initiating call to:', phone);
    Linking.openURL(`tel:${phone}`);
  };

  const handleWhatsApp = (phone: string) => {
    console.log('ContactScreen: User opening WhatsApp for:', phone);
    Linking.openURL(`whatsapp://send?phone=${phone}`);
  };

  const handleEmail = () => {
    console.log('ContactScreen: User opening email');
    Linking.openURL('mailto:info@kasselsoft.com');
  };

  const offices = [
    {
      name: t('jordan'),
      phone: '+962790025554',
      icon: 'location-on',
      gradient: [kasselColors.primary, kasselColors.primaryDark],
    },
    {
      name: t('uae'),
      phone: '+971555870870',
      icon: 'location-on',
      gradient: [kasselColors.secondary, kasselColors.secondaryDark],
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
          {t('contactTitle')}
        </Text>
        <Text style={[styles.headerSubtitle, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
          {t('contactSubtitle')}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.officesContainer}>
          {offices.map((office, index) => (
            <View key={index} style={styles.officeCard}>
              <LinearGradient
                colors={office.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.officeHeader}
              >
                <IconSymbol
                  ios_icon_name="location.fill"
                  android_material_icon_name={office.icon}
                  size={32}
                  color="#FFFFFF"
                />
                <Text style={styles.officeName}>{office.name}</Text>
              </LinearGradient>

              <View style={[styles.officeContent, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}>
                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={() => handleCall(office.phone)}
                >
                  <View style={[styles.contactIcon, { backgroundColor: kasselColors.primary + '20' }]}>
                    <IconSymbol
                      ios_icon_name="phone.fill"
                      android_material_icon_name="phone"
                      size={20}
                      color={kasselColors.primary}
                    />
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={[styles.contactLabel, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                      {t('phone')}
                    </Text>
                    <Text style={[styles.contactValue, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                      {office.phone}
                    </Text>
                  </View>
                  <IconSymbol
                    ios_icon_name="chevron.right"
                    android_material_icon_name="chevron-right"
                    size={20}
                    color={kasselColors.textSecondary}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={() => handleWhatsApp(office.phone)}
                >
                  <View style={[styles.contactIcon, { backgroundColor: kasselColors.accent + '20' }]}>
                    <IconSymbol
                      ios_icon_name="message.fill"
                      android_material_icon_name="chat"
                      size={20}
                      color={kasselColors.accent}
                    />
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={[styles.contactLabel, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                      {t('whatsapp')}
                    </Text>
                    <Text style={[styles.contactValue, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                      {office.phone}
                    </Text>
                  </View>
                  <IconSymbol
                    ios_icon_name="chevron.right"
                    android_material_icon_name="chevron-right"
                    size={20}
                    color={kasselColors.textSecondary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.emailSection}>
          <TouchableOpacity
            style={[styles.emailCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
            onPress={handleEmail}
          >
            <View style={[styles.emailIcon, { backgroundColor: kasselColors.secondary + '20' }]}>
              <IconSymbol
                ios_icon_name="envelope.fill"
                android_material_icon_name="email"
                size={28}
                color={kasselColors.secondary}
              />
            </View>
            <View style={styles.emailContent}>
              <Text style={[styles.emailLabel, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('email')}
              </Text>
              <Text style={[styles.emailValue, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                info@kasselsoft.com
              </Text>
            </View>
            <IconSymbol
              ios_icon_name="chevron.right"
              android_material_icon_name="chevron-right"
              size={20}
              color={kasselColors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.messageSection, { marginBottom: 40 }]}>
          <TouchableOpacity
            style={[styles.messageButton]}
            onPress={() => console.log('ContactScreen: User tapped send message')}
          >
            <LinearGradient
              colors={[kasselColors.gradientStart, kasselColors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.messageButtonGradient}
            >
              <IconSymbol
                ios_icon_name="paperplane.fill"
                android_material_icon_name="send"
                size={24}
                color="#FFFFFF"
              />
              <Text style={styles.messageButtonText}>{t('sendMessage')}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  officesContainer: {
    padding: 20,
    gap: 20,
  },
  officeCard: {
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: kasselColors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  officeHeader: {
    padding: 24,
    alignItems: 'center',
  },
  officeName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 12,
  },
  officeContent: {
    padding: 16,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  contactIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  emailSection: {
    padding: 20,
  },
  emailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: kasselColors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  emailIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  emailContent: {
    flex: 1,
  },
  emailLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  emailValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  messageSection: {
    padding: 20,
  },
  messageButton: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: kasselColors.shadowDark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  messageButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  messageButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
