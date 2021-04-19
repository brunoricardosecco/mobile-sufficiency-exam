import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './styles';

export default function About() {
  // * HOOKS
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {t('about.author')}: Bruno Ricardo Secco
        </Text>
        <Text style={styles.subTitle}>{t('about.subTitle')}</Text>
        <Text style={styles.secondTitle}>{t('about.appUsage')}</Text>
        <Text style={styles.text}>{t('about.usageText')}</Text>
      </View>
    </View>
  );
}
