import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, LayoutAnimation, UIManager, Platform } from 'react-native';
import dayjs from 'dayjs';

import Button from '../../../../components/Button';
import styles from './styles';

export default function ListItem({ item }) {
  // * STATES
  const [isShowingResume, setIsShowingResume] = useState(false);

  // * FUNCTIONS
  const handleToggleResume = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsShowingResume((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, [isShowingResume]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{`${item.name} - genero`}</Text>
        <Text>{`R$${item.price.toFixed(2)}`}</Text>
      </View>
      <Text style={styles.label}>
        Quantidade de páginas: <Text style={styles.value}>{item.qtdPages}</Text>
      </Text>
      <Text style={styles.label}>
        Data de lançamento:{' '}
        <Text style={styles.value}>
          {dayjs(item.releaseDate).format('DD/MM/YYYY')}
        </Text>
      </Text>
      {isShowingResume && (
        <View>
          <Text style={styles.label}>Resumo</Text>
          <Text style={styles.value}>{item.resume}</Text>
        </View>
      )}
      <Button
        text={isShowingResume ? 'Ocultar resumo' : 'Mostrar resumo'}
        onPress={handleToggleResume}
      />
    </View>
  );
}
