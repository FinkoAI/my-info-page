import Vue from 'vue';

import './styles/quasar.sass';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import {
  Quasar,
  QBadge,
  QCard,
  QCardSection,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QRouteTab,
  QSeparator,
  QSpace,
  QTab,
  QTabs,
  QTimeline,
  QTimelineEntry,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QImg,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
} from 'quasar';

Vue.use(Quasar, {
  config: {},
  components: {
    QBadge,
    QCard,
    QCardSection,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QRouteTab,
    QSeparator,
    QSpace,
    QTab,
    QTabs,
    QTimeline,
    QTimelineEntry,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QImg,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
  },
  directives: {
  },
  plugins: {
  },
});
