import React from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import EmptyData from '../components/empty';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
  const appContext = useAppContext();

  if (!appContext.moodList.length) {
    return <EmptyData text={"you don't have any mood record"} />;
  }
  return (
    <ScrollView>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  );
};
