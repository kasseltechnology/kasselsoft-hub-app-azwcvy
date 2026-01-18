
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesScreen() {
  console.log('ServicesScreen: Rendering services screen');
  const colorScheme = useColorScheme();
  const { t } = useLanguage();
  const isDark = colorScheme === 'dark';

  const services = [
    {
      icon: 'code',
      title: t('webAppDev'),
      description: t('webAppDevDesc'),
      color: kasselColors.primary,
    },
    {
      icon: 'psychology',
      title: t('aiSolutions'),
      description: t('aiSolutionsDesc'),
      color: kasselColors.secondary,
    },
    {
      icon: 'campaign',
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
      color: kasselColors.accent,
    },
    {
      icon: 'analytics',
      title: t('dataAnalysis'),
      description: t('dataAnalysisDesc'),
      color: '#F59E0B',
    },
    {
      icon: 'school',
      title: t('training'),
      description: t('trainingDesc'),
      color: '#EC4899',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
          {t('servicesTitle')}
        </Text>
        <Text style={[styles.headerSubtitle, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
          {t('servicesSubtitle')}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => console.log('ServicesScreen: User tapped service:', service.title)}
            >
              <View style={[styles.serviceIconContainer, { backgroundColor: service.color + '20' }]}>
                <IconSymbol
                  ios_icon_name="star.fill"
                  android_material_icon_name={service.icon}
                  size={32}
                  color={service.color}
                />
              </View>
              <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {service.title}
              </Text>
              <Text style={[styles.serviceDescription, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {service.description}
              </Text>
              <TouchableOpacity
                style={[styles.requestButton, { backgroundColor: service.color }]}
                onPress={() => console.log('ServicesScreen: User requested service:', service.title)}
              >
                <Text style={styles.requestButtonText}>{t('requestService')}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
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
  servicesGrid: {
    padding: 20,
    gap: 16,
  },
  serviceCard: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
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
  serviceIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  requestButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  requestButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
