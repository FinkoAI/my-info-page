import Vue from 'vue';

import './styles/quasar.sass';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import {
  Quasar,
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
