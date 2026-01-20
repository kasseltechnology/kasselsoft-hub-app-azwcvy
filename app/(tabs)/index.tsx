
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
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useLanguage } from '@/contexts/LanguageContext';
import { kasselColors } from '@/constants/Colors';
import { IconSymbol } from '@/components/IconSymbol';
import { router } from 'expo-router';

export default function HomeScreen() {
  console.log('HomeScreen: Component rendering');
  const { t, language, setLanguage, isRTL } = useLanguage();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    console.log('HomeScreen: User toggled language to:', newLang);
    setLanguage(newLang);
  };

  const handleMrKasselPress = () => {
    console.log('HomeScreen: User tapped Mr. Kassel - Opening kasselacademy.com');
    Linking.openURL('https://kasselacademy.com');
  };

  console.log('HomeScreen: Current language:', language, 'RTL:', isRTL);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]}>
        <Image
          source={require('@/assets/images/17f59966-1758-4784-b20b-2a7c35df32b3.jpeg')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <TouchableOpacity 
          onPress={toggleLanguage}
          style={styles.languageButton}
        >
          <Text style={[styles.languageText, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {language === 'en' ? 'العربية' : 'English'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <LinearGradient
          colors={[kasselColors.primary, kasselColors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>{t('welcome')}</Text>
          <Text style={styles.heroTagline}>{t('tagline')}</Text>
        </LinearGradient>

        {/* Who We Are Section */}
        <View style={[styles.section, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}>
          <Text style={[styles.sectionTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {t('whoWeAre')}
          </Text>
          <Text style={[styles.sectionText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
            {t('whoWeAreText')}
          </Text>
          
          {/* Who We Are Images */}
          <View style={styles.imageGrid}>
            <View style={styles.imageCard}>
              <Image
                source={require('@/assets/images/134cd7b8-397b-42e5-94cb-7344aa78b45e.png')}
                style={styles.featureImage}
                resizeMode="contain"
              />
              <Text style={[styles.imageCaption, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('innovativeTech')}
              </Text>
            </View>
            
            <View style={styles.imageCard}>
              <Image
                source={require('@/assets/images/8e7c722d-f404-4c97-a5c5-05fd933cbbb9.png')}
                style={styles.featureImage}
                resizeMode="contain"
              />
              <Text style={[styles.imageCaption, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('digitalMarketing')}
              </Text>
            </View>
            
            <View style={styles.imageCard}>
              <Image
                source={require('@/assets/images/ac0408be-3b16-4da4-a372-f28bdf48f99a.png')}
                style={styles.featureImage}
                resizeMode="contain"
              />
              <Text style={[styles.imageCaption, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('aiDevelopment')}
              </Text>
            </View>
            
            <View style={styles.imageCard}>
              <Image
                source={require('@/assets/images/d3909b07-4aaf-4bf4-93ed-811e3234f019.png')}
                style={styles.featureImage}
                resizeMode="contain"
              />
              <Text style={[styles.imageCaption, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('mobileApps')}
              </Text>
            </View>
          </View>
        </View>

        {/* Why Partner with Kassel Section */}
        <View style={[styles.section, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card, marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {t('whyPartner')}
          </Text>
          
          <View style={styles.partnershipList}>
            <View style={styles.partnershipItem}>
              <IconSymbol
                ios_icon_name="lightbulb.fill"
                android_material_icon_name="lightbulb"
                size={28}
                color={kasselColors.primary}
              />
              <Text style={[styles.partnershipText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('innovativeSolutions')}
              </Text>
            </View>
            
            <View style={styles.partnershipItem}>
              <IconSymbol
                ios_icon_name="star.fill"
                android_material_icon_name="star"
                size={28}
                color={kasselColors.primary}
              />
              <Text style={[styles.partnershipText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('expertiseAI')}
              </Text>
            </View>
            
            <View style={styles.partnershipItem}>
              <IconSymbol
                ios_icon_name="graduationcap.fill"
                android_material_icon_name="school"
                size={28}
                color={kasselColors.primary}
              />
              <Text style={[styles.partnershipText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('educationalInitiatives')}
              </Text>
            </View>
            
            <View style={styles.partnershipItem}>
              <IconSymbol
                ios_icon_name="hand.thumbsup.fill"
                android_material_icon_name="thumb-up"
                size={28}
                color={kasselColors.primary}
              />
              <Text style={[styles.partnershipText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('flexibleModels')}
              </Text>
            </View>
          </View>
        </View>

        {/* Featured Services */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
            {t('featuredServices')}
          </Text>
          
          <View style={styles.serviceGrid}>
            <TouchableOpacity 
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped AI Solutions card');
                router.push('/(tabs)/services');
              }}
            >
              <IconSymbol
                ios_icon_name="brain"
                android_material_icon_name="psychology"
                size={40}
                color={kasselColors.primary}
              />
              <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('aiSolutions')}
              </Text>
              <Text style={[styles.serviceDesc, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('aiSolutionsDesc')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped Web & Mobile Development card');
                router.push('/(tabs)/services');
              }}
            >
              <IconSymbol
                ios_icon_name="laptopcomputer"
                android_material_icon_name="computer"
                size={40}
                color={kasselColors.primary}
              />
              <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('webAppDev')}
              </Text>
              <Text style={[styles.serviceDesc, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('webAppDevDesc')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped Digital Marketing card');
                router.push('/(tabs)/services');
              }}
            >
              <IconSymbol
                ios_icon_name="chart.line.uptrend.xyaxis"
                android_material_icon_name="trending-up"
                size={40}
                color={kasselColors.primary}
              />
              <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('digitalMarketing')}
              </Text>
              <Text style={[styles.serviceDesc, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('digitalMarketingDesc')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.serviceCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => {
                console.log('HomeScreen: User tapped Training card');
                router.push('/(tabs)/services');
              }}
            >
              <IconSymbol
                ios_icon_name="book.fill"
                android_material_icon_name="school"
                size={40}
                color={kasselColors.primary}
              />
              <Text style={[styles.serviceTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                {t('training')}
              </Text>
              <Text style={[styles.serviceDesc, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                {t('trainingDesc')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mr. Kassel Section */}
        <TouchableOpacity onPress={handleMrKasselPress} activeOpacity={0.9}>
          <LinearGradient
            colors={[kasselColors.secondary, kasselColors.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mrKasselSection}
          >
            <IconSymbol
              ios_icon_name="brain.head.profile"
              android_material_icon_name="psychology"
              size={60}
              color="#FFFFFF"
            />
            <Text style={styles.mrKasselTitle}>{t('mrKassel')}</Text>
            <Text style={styles.mrKasselSubtitle}>{t('mrKasselSubtitle')}</Text>
            <Text style={styles.mrKasselDesc}>{t('mrKasselDesc')}</Text>
            <View style={styles.mrKasselButton}>
              <Text style={styles.mrKasselButtonText}>{t('visitKasselAcademy')}</Text>
              <IconSymbol
                ios_icon_name="arrow.right"
                android_material_icon_name="arrow-forward"
                size={18}
                color={kasselColors.primary}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <TouchableOpacity 
            style={[styles.ctaButton, { backgroundColor: kasselColors.primary }]}
            onPress={() => {
              console.log('HomeScreen: User tapped View All Projects button');
              router.push('/(tabs)/projects');
            }}
          >
            <Text style={styles.ctaButtonText}>{t('viewAll')} {t('projects')}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.ctaButton, { backgroundColor: kasselColors.secondary }]}
            onPress={() => {
              console.log('HomeScreen: User tapped Contact Us button');
              router.push('/(tabs)/contact');
            }}
          >
            <Text style={styles.ctaButtonText}>{t('contact')}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: kasselColors.border,
  },
  logoImage: {
    width: 120,
    height: 40,
  },
  languageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: kasselColors.primary,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  hero: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroTagline: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  imageCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  imageCaption: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  partnershipList: {
    marginTop: 8,
  },
  partnershipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  partnershipText: {
    fontSize: 15,
    lineHeight: 22,
    marginLeft: 16,
    flex: 1,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  serviceCard: {
    width: '48%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      },
    }),
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  serviceDesc: {
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
  mrKasselSection: {
    margin: 20,
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  mrKasselTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
  },
  mrKasselSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 8,
    opacity: 0.9,
  },
  mrKasselDesc: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.9,
  },
  mrKasselButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mrKasselButtonText: {
    color: kasselColors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctaSection: {
    padding: 20,
    gap: 12,
  },
  ctaButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
