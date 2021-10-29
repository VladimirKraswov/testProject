import {useRef, useState} from 'react';

const AUTO_REFRESH_INTERVAL = 60000;
const REFRESH_INTERVAL = 15000;

export default function useRefresh(load) {
  const [isRefresh, setIsRefresh] = useState(false);

  const timer = useRef(null);
  const lastUpdateTimer = useRef(null);

  const reload = async () => {
    clearTimeout(timer.current);
    await load();
    timer.current = setTimeout(() => reload(), AUTO_REFRESH_INTERVAL);
    setIsRefresh(false);
    lastUpdateTimer.current = setTimeout(
      () => setIsRefresh(true),
      REFRESH_INTERVAL,
    );
  };

  const refresh = () => {
    if (isRefresh) {
      reload();
    }
  };

  const stop = () => {
    clearInterval(timer.current);
    clearTimeout(lastUpdateTimer.current);
  };

  return [reload, refresh, stop];
}
