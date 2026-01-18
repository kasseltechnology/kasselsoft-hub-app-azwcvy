
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';
import { router } from 'expo-router';

export default function HomeScreen() {
  console.log('HomeScreen: Rendering home screen');
  const colorScheme = useColorScheme();
  const { t, language, setLanguage, isRTL } = useLanguage();
  const isDark = colorScheme === 'dark';

  const toggleLanguage = () => {
    console.log('HomeScreen: User toggled language');
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const services = [
    {
      icon: 'code',
      title: t('webAppDev'),
      description: t('webAppDevDesc'),
    },
    {
      icon: 'psychology',
      title: t('aiSolutions'),
      description: t('aiSolutionsDesc'),
    },
    {
      icon: 'campaign',
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: isDark ? kasselColors.borderDark : kasselColors.border }]}>
        <Image
          source={{ uri: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/c7b75b70-cf4d-4390-91ae-038b0c614559/assets/images/18ddc7d0-cebd-48a1-b0fb-5dba29f604ba.jpeg?AWSAccessKeyId=AKIAVRUVRKQJC5DISQ4Q&Signature=9O%2FogTDPDANk9q93gSV5vGyeoYA%3D&Expires=1768812698' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={toggleLanguage} style={styles.langButton}>
            <Text style={[styles.langText, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
              {language === 'en' ? 'AR' : 'EN'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <IconSymbol
              ios_icon_name="bell.fill"
              android_material_icon_name="notifications"
              size={24}
              color={isDark ? kasselColors.textDark : kasselColors.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={[kasselColors.gradientStart, kasselColors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>{t('welcome')}</Text>
          <Text style={styles.heroTagline}>{t('tagline')}</Text>
        </LinearGradient>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {t('aboutTitle')}
          </Text>
          <Text style={[styles.sectionText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
            {t('aboutText')}
          </Text>
        </View>

        {/* Featured Services */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {t('featuredServices')}
          </Text>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped service card:', service.title);
                router.push('/services');
              }}
            >
              <View style={[styles.serviceIcon, { backgroundColor: kasselColors.primary + '20' }]}>
                <IconSymbol
                  ios_icon_name="star.fill"
                  android_material_icon_name={service.icon}
                  size={28}
                  color={kasselColors.primary}
                />
              </View>
              <View style={styles.serviceContent}>
                <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                  {service.title}
                </Text>
                <Text style={[styles.serviceDesc, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                  {service.description}
                </Text>
              </View>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name={isRTL ? 'chevron-left' : 'chevron-right'}
                size={20}
                color={kasselColors.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Mr. Kassel CTA */}
        <TouchableOpacity style={styles.section}>
          <LinearGradient
            colors={[kasselColors.secondary, kasselColors.secondaryDark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mrKasselCard}
          >
            <View style={styles.mrKasselIcon}>
              <IconSymbol
                ios_icon_name="brain"
                android_material_icon_name="psychology"
                size={32}
                color="#FFFFFF"
              />
            </View>
            <View style={styles.mrKasselContent}>
              <Text style={styles.mrKasselTitle}>{t('mrKassel')}</Text>
              <Text style={styles.mrKasselSubtitle}>{t('mrKasselSubtitle')}</Text>
              <Text style={styles.mrKasselDesc}>{t('mrKasselDesc')}</Text>
            </View>
            <View style={styles.mrKasselButton}>
              <Text style={styles.mrKasselButtonText}>{t('comingSoon')}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick Links */}
        <View style={[styles.section, { marginBottom: 40 }]}>
          <View style={styles.quickLinks}>
            <TouchableOpacity
              style={[styles.quickLink, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped Projects quick link');
                router.push('/projects');
              }}
            >
              <IconSymbol
                ios_icon_name="folder.fill"
                android_material_icon_name="folder"
                size={24}
                color={kasselColors.primary}
              />
              <Text style={[styles.quickLinkText, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('projects')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.quickLink, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped Blogs quick link');
                router.push('/blogs');
              }}
            >
              <IconSymbol
                ios_icon_name="doc.text.fill"
                android_material_icon_name="article"
                size={24}
                color={kasselColors.secondary}
              />
              <Text style={[styles.quickLinkText, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('blogs')}
              </Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  logo: {
    width: 120,
    height: 40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  langButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: kasselColors.primary + '20',
  },
  langText: {
    fontSize: 14,
    fontWeight: '700',
  },
  iconButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  hero: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.95,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 24,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
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
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  serviceDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  mrKasselCard: {
    borderRadius: 20,
    padding: 24,
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
  mrKasselIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  mrKasselContent: {
    marginBottom: 20,
  },
  mrKasselTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  mrKasselSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 12,
  },
  mrKasselDesc: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.85,
    lineHeight: 20,
  },
  mrKasselButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  mrKasselButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  quickLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  quickLink: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
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
  quickLinkText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
