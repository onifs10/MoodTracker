import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppContext } from '../App.provider';
import { AnalyticDataType, MoodOptionWithTimestamp } from '../types';
import { groupBy } from 'lodash';
import EmptyData from '../components/empty';
import { VictoryPie } from 'victory-native';

export const Analytics: React.FC = () => {
  const [moodlist, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);
  const appContext = useAppContext();

  const [analyticsData, setAnalyticsData] = useState<AnalyticDataType[]>([]);

  useEffect(() => {
    setMoodList(appContext.moodList);
  }, [appContext]);

  useEffect(() => {
    const groupedList = groupBy(
      moodlist,
      (item: MoodOptionWithTimestamp) => item.mood.emoji,
    );
    const AnalyticsDataObjects: AnalyticDataType[] = [];
    for (const key in groupedList) {
      AnalyticsDataObjects.push({ x: key, y: groupedList[key].length });
    }
    setAnalyticsData(AnalyticsDataObjects);
  }, [moodlist]);

  if (!appContext.moodList.length) {
    return <EmptyData text={"you don't have any mood record"} />;
  }

  return (
    <View style={styles.container}>
      <VictoryPie
        data={analyticsData}
        padAngle={({ datum }) => datum.y}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        cornerRadius={20}
        innerRadius={50}
        animate={{
          duration: 2000,
        }}
        categories={['😤', '🤔', '🧑‍💻', '😊', '🥳']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
