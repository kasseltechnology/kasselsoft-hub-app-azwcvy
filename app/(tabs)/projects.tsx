
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
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsScreen() {
  console.log('ProjectsScreen: Rendering projects screen');
  const colorScheme = useColorScheme();
  const { t } = useLanguage();
  const isDark = colorScheme === 'dark';

  const projects = [
    {
      title: 'Computer Vision Security System',
      category: 'Industrial & Security',
      image: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/c7b75b70-cf4d-4390-91ae-038b0c614559/assets/images/cdb8ab74-3650-4f08-b208-3dbef7a0a63e.jpeg',
      description: 'AI-powered security monitoring with real-time threat detection',
    },
    {
      title: 'Digital Transformation Platform',
      category: 'Government',
      image: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/c7b75b70-cf4d-4390-91ae-038b0c614559/assets/images/24155265-1ab9-4367-b45f-4f19404859e5.jpeg',
      description: 'Comprehensive IT infrastructure modernization',
    },
    {
      title: 'E-Learning Management System',
      category: 'Education',
      image: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/c7b75b70-cf4d-4390-91ae-038b0c614559/assets/images/a663b353-2812-4773-b755-66957f6d6246.jpeg',
      description: 'Interactive platform for online education and training',
    },
    {
      title: 'Smart Retail Analytics',
      category: 'Retail',
      image: 'https://prod-finalquest-user-projects-storage-bucket-aws.s3.amazonaws.com/user-projects/c7b75b70-cf4d-4390-91ae-038b0c614559/assets/images/83303a41-33b0-4550-bd79-3482a017d0a1.jpeg',
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
