import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  UIManager,
  Platform,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { deleteBook } from '../../store/books/reducer';

import Button from '../Button';
import { normalize } from '../../helpers';
import { colors, metrics } from '../../constants';
import styles from './styles';

export default function ListItem({ item, navigation }) {
  // * STATES
  const [isShowingResume, setIsShowingResume] = useState(false);
  const { isLoading } = useSelector((state) => state.books);

  // * HOOKS
  const { t } = useTranslation();

  // * ACTIONS
  const dispatch = useDispatch();
  const deleteBookAsync = useCallback((value) => dispatch(deleteBook(value)), [
    dispatch,
  ]);

  // * FUNCTIONS
  const handleToggleResume = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsShowingResume((prevState) => !prevState);
  }, []);

  const handleDeleteBook = (bookId) => {
    Alert.alert(
      t('books.item.confirmDelete.title'),
      t('books.item.confirmDelete.message'),
      [
        {
          text: t('books.item.confirmDelete.cancelButton'),
          style: 'cancel',
        },
        {
          text: t('books.item.confirmDelete.confirmButton'),
          style: 'default',
          onPress: () => deleteBookAsync({ bookId }),
        },
      ]
    );
  };

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
      <Text style={styles.title}>{`${item.name} - ${item.genre?.name}`}</Text>

      <Text style={styles.label}>{`R$${item.price}`}</Text>

      <Text style={styles.label}>
        {t('books.item.qtdPages')}{' '}
        <Text style={styles.value}>{item.qtdPages}</Text>
      </Text>

      <Text style={styles.label}>
        {t('books.item.releaseDate')}{' '}
        <Text style={styles.value}>{item.releaseDate}</Text>
      </Text>

      {isShowingResume && (
        <View>
          <Text style={styles.label}>{t('books.item.resume')}</Text>
          <Text style={styles.value}>{item.resume}</Text>
        </View>
      )}
      <Button
        text={
          isShowingResume
            ? t('books.item.hideResumeButton')
            : t('books.item.showResumeButton')
        }
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
          text={t('books.item.deleteButton')}
          onPress={() => handleDeleteBook(item.id)}
          style={{ width: '49%', backgroundColor: colors.red }}
          isLoading={isLoading}
        />
        <Button
          text={t('books.item.editButton')}
          onPress={() => navigation.navigate('EditBook', { book: item })}
          style={{ width: '49%', backgroundColor: colors.yellow }}
          textStyle={{ color: colors.black }}
        />
      </View>
    </View>
  );
}
