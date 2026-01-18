
import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { kasselColors } from '@/constants/Colors';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t, isRTL } = useLanguage();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: kasselColors.primary,
        tabBarInactiveTintColor: isDark ? kasselColors.textSecondaryDark : kasselColors.textSecondary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? kasselColors.backgroundDark : kasselColors.background,
          borderTopColor: isDark ? kasselColors.borderDark : kasselColors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('home'),
          tabBarIcon: ({ color }) => (
            <IconSymbol
              ios_icon_name="house.fill"
              android_material_icon_name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: t('services'),
          tabBarIcon: ({ color }) => (
            <IconSymbol
              ios_icon_name="briefcase.fill"
              android_material_icon_name="work"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: t('projects'),
          tabBarIcon: ({ color }) => (
            <IconSymbol
              ios_icon_name="folder.fill"
              android_material_icon_name="folder"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="blogs"
        options={{
          title: t('blogs'),
          tabBarIcon: ({ color }) => (
            <IconSymbol
              ios_icon_name="doc.text.fill"
              android_material_icon_name="article"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: t('contact'),
          tabBarIcon: ({ color }) => (
            <IconSymbol
              ios_icon_name="phone.fill"
              android_material_icon_name="phone"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
