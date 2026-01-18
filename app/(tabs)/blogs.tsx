
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

export default function BlogsScreen() {
  console.log('BlogsScreen: Rendering blogs screen');
  const colorScheme = useColorScheme();
  const { t } = useLanguage();
  const isDark = colorScheme === 'dark';

  const blogs = [
    {
      title: 'The Future of AI in Business',
      category: 'AI',
      date: '2024-01-15',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      icon: 'psychology',
      color: kasselColors.secondary,
    },
    {
      title: 'Digital Marketing Trends 2024',
      category: 'Marketing',
      date: '2024-01-10',
      excerpt: 'Key digital marketing strategies and trends that will shape the industry in the coming year.',
      icon: 'campaign',
      color: kasselColors.accent,
    },
    {
      title: 'Building Scalable Mobile Apps',
      category: 'Tech',
      date: '2024-01-05',
      excerpt: 'Best practices for developing mobile applications that can scale with your business growth.',
      icon: 'phone-android',
      color: kasselColors.primary,
    },
    {
      title: 'Computer Vision Applications',
      category: 'AI',
      date: '2023-12-28',
      excerpt: 'Real-world applications of computer vision technology across various industries.',
      icon: 'visibility',
      color: kasselColors.secondary,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background }]} edges={['top']}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
          {t('blogsTitle')}
        </Text>
        <Text style={[styles.headerSubtitle, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
          {t('blogsSubtitle')}
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.blogsContainer}>
          {blogs.map((blog, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.blogCard, { backgroundColor: isDark ? kasselColors.cardDark : kasselColors.card }]}
              onPress={() => console.log('BlogsScreen: User tapped blog:', blog.title)}
            >
              <View style={[styles.blogIcon, { backgroundColor: blog.color + '20' }]}>
                <IconSymbol
                  ios_icon_name="doc.text.fill"
                  android_material_icon_name={blog.icon}
                  size={28}
                  color={blog.color}
                />
              </View>
              <View style={styles.blogContent}>
                <View style={styles.blogMeta}>
                  <View style={[styles.categoryBadge, { backgroundColor: blog.color + '20' }]}>
                    <Text style={[styles.categoryText, { color: blog.color }]}>
                      {blog.category}
                    </Text>
                  </View>
                  <Text style={[styles.dateText, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                    {blog.date}
                  </Text>
                </View>
                <Text style={[styles.blogTitle, { color: isDark ? kasselColors.textDark : kasselColors.text }]}>
                  {blog.title}
                </Text>
                <Text style={[styles.blogExcerpt, { color: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary }]}>
                  {blog.excerpt}
                </Text>
                <TouchableOpacity
                  style={styles.readMoreButton}
                  onPress={() => console.log('BlogsScreen: User reading blog:', blog.title)}
                >
                  <Text style={[styles.readMoreText, { color: blog.color }]}>
                    {t('readMore')}
                  </Text>
                  <IconSymbol
                    ios_icon_name="arrow.right"
                    android_material_icon_name="arrow-forward"
                    size={16}
                    color={blog.color}
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
  blogsContainer: {
    padding: 20,
  },
  blogCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
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
  blogIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  blogContent: {
    flex: 1,
  },
  blogMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
  blogTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
  },
  blogExcerpt: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
