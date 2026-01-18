
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
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsScreen() {
  console.log('ProjectsScreen: Rendering projects screen');
  const colorScheme = useColorScheme();
  const { t } = useLanguage();
  const isDark = colorScheme === 'dark';

  const handlePortfolioPress = () => {
    console.log('ProjectsScreen: User tapped portfolio link - Opening hadiyyeh.com');
    Linking.openURL('https://hadiyyeh.com');
  };

  const projects = [
    {
      title: 'Computer Vision Security System',
      category: 'Industrial & Security',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      description: 'AI-powered security monitoring with real-time threat detection',
    },
    {
      title: 'Digital Transformation Platform',
      category: 'Government',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      description: 'Comprehensive IT infrastructure modernization',
    },
    {
      title: 'E-Learning Management System',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      description: 'Interactive platform for online education and training',
    },
    {
      title: 'Smart Retail Analytics',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      description: 'Data-driven insights for retail optimization',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
          {t('projectsTitle')}
        </Text>
        <Text style={[styles.headerSubtitle, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
          {t('projectsSubtitle')}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Portfolio Link Card */}
        <TouchableOpacity
          style={[styles.portfolioCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
          onPress={handlePortfolioPress}
          activeOpacity={0.8}
        >
          <Image
            source={require('@/assets/images/7a85e900-d3a0-48f4-8eb4-5d00772c03b2.png')}
            style={styles.portfolioImage}
            resizeMode="cover"
          />
          <View style={styles.portfolioOverlay}>
            <Text style={styles.portfolioTitle}>{t('viewFullPortfolio')}</Text>
            <Text style={styles.portfolioSubtitle}>hadiyyeh.com</Text>
            <View style={styles.portfolioButton}>
              <Text style={styles.portfolioButtonText}>{t('visitWebsite')}</Text>
              <IconSymbol
                ios_icon_name="arrow.right"
                android_material_icon_name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.projectCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => console.log('ProjectsScreen: User tapped project:', project.title)}
            >
              <Image
                source={{ uri: project.image }}
                style={styles.projectImage}
                resizeMode="cover"
              />
              <View style={styles.projectContent}>
                <View style={[styles.categoryBadge, { backgroundColor: kasselColors.primary + '20' }]}>
                  <Text style={[styles.categoryText, { color: kasselColors.primary }]}>
                    {project.category}
                  </Text>
                </View>
                <Text style={[styles.projectTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                  {project.title}
                </Text>
                <Text style={[styles.projectDescription, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                  {project.description}
                </Text>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => console.log('ProjectsScreen: User viewing project details:', project.title)}
                >
                  <Text style={[styles.viewButtonText, { color: kasselColors.primary }]}>
                    {t('viewProject')}
                  </Text>
                  <IconSymbol
                    ios_icon_name="arrow.right"
                    android_material_icon_name="arrow-forward"
                    size={18}
                    color={kasselColors.primary}
                  />
                </TouchableOpacity>
              </View>
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
  portfolioCard: {
    margin: 20,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
    height: 240,
    ...Platform.select({
      ios: {
        shadowColor: kasselColors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  portfolioOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  portfolioTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  portfolioSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 20,
  },
  portfolioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: kasselColors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  portfolioButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  projectsContainer: {
    padding: 20,
  },
  projectCard: {
    borderRadius: 20,
    marginBottom: 20,
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
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 20,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
