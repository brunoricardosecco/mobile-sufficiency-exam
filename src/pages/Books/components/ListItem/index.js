import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, LayoutAnimation, UIManager, Platform } from 'react-native';
import dayjs from 'dayjs';

import Button from '../../../../components/Button';
import styles from './styles';
import { normalize } from '../../../../helpers';
import { colors, metrics } from '../../../../constants';

export default function ListItem({ item, navigation }) {
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
      <Text style={styles.title}>{`${item.name} - genero`}</Text>

      <Text style={styles.label}>{`R$${item.price.toFixed(2)}`}</Text>

      <Text style={styles.label}>
        Quantidade de páginas: <Text style={styles.value}>{item.qtdPages}</Text>
      </Text>

      <Text style={styles.label}>
        Data de lançamento: <Text style={styles.value}>{item.releaseDate}</Text>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: normalize(metrics.spacing / 2),
        }}
      >
        <Button
          text="Excluir"
          onPress={handleToggleResume}
          style={{ width: '49%', backgroundColor: colors.red }}
        />
        <Button
          text="Editar"
          onPress={() => navigation.navigate('EditBook', { book: item })}
          style={{ width: '49%', backgroundColor: colors.yellow }}
          textStyle={{ color: colors.black }}
        />
      </View>
    </View>
  );
}
