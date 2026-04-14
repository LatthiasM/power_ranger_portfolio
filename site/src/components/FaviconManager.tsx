// FaviconManager.tsx — change le favicon selon la route active
import { useLocation } from 'react-router-dom';
import { useFavicon } from '../hooks/useFavicon';

const routeFavicons: Record<string, string> = {
  '/':         '/img/eclairmulticolor.png',
  '/paul':     '/img/eclairbleu.png',
  '/roxana':   '/img/eclairmauve.png',
  '/mathis':   '/img/eclairrouge.png',
  '/matthias': '/img/eclairvert.png',
  '/steven':   '/img/eclairjaune.png',
};

export default function FaviconManager() {
  const { pathname } = useLocation();
  const favicon = routeFavicons[pathname] ?? '/img/eclairmulticolor.png';
  useFavicon(favicon);
  return null;
}
